"use client"

import { useReducer } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import type { Character, TestState } from "./types"
import { questions, characterResults } from "./test-data"
import { QuestionCard } from "./question-card"
import { ResultCard } from "./result-card"
import { IntroCard } from "./intro-card"
import { AdBanner } from "./ad-banner"
import { TVStaticBackground } from "./tv-static-background"
import { trackTestStarted, trackTestCompleted } from "./analytics"

// Reducer for managing test state
function testReducer(state: TestState, action: any): TestState {
  switch (action.type) {
    case "START_TEST":
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: {},
        result: null,
        showResult: false,
      }
    case "ANSWER_QUESTION":
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: action.character,
      }

      // If this was the last question, calculate the result
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          result: calculateResult(newAnswers),
          showResult: true,
        }
      }

      // Otherwise, move to the next question
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
      }
    default:
      return state
  }
}

// Function to calculate the result based on answers
function calculateResult(answers: Record<string, Character>): Character {
  // Count occurrences of each character
  const characterCounts: Record<Character, number> = {
    rachel: 0,
    monica: 0,
    chandler: 0,
    joey: 0,
    ross: 0,
    phoebe: 0,
    michael: 0,
    dwight: 0,
    pam: 0,
    jim: 0,
    leslie: 0,
    ron: 0,
    april: 0,
    andy: 0,
    mandalorian: 0,
    grogu: 0,
    tyrion: 0,
    arya: 0,
  }

  // Count each character occurrence
  Object.values(answers).forEach((character) => {
    characterCounts[character]++
  })

  // Find the character with the highest count
  let maxCount = 0
  let result: Character = "chandler" // Default

  Object.entries(characterCounts).forEach(([character, count]) => {
    if (count > maxCount) {
      maxCount = count
      result = character as Character
    }
  })

  return result
}

export function TVCharactersTest() {
  const router = useRouter()

  // Initialize test state
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1, // -1 means we're at the intro screen
    answers: {},
    result: null,
    showResult: false,
  })

  const handleStart = () => {
    trackTestStarted()
    dispatch({ type: "START_TEST" })
  }

  const handleAnswer = (character: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      character,
    })

    // Prüfe, ob dies die letzte Frage ist
    if (state.currentQuestionIndex === questions.length - 1) {
      // Berechne das Ergebnis vor der Weiterleitung
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: character as Character,
      }
      const result = calculateResult(newAnswers)

      // Verfolge das Ergebnis vor der Weiterleitung
      trackTestCompleted(result)

      try {
        // Verfolge den Testabschluss mit dem Ergebnis
        if (typeof window !== "undefined" && "gtag" in window) {
          // @ts-ignore - gtag ist nicht typisiert
          window.gtag("event", "test_completed", {
            test_type: "tv-characters",
            result_character: result,
          })
        }
      } catch (e) {
        console.error("Analytics error:", e)
      }

      // Weiterleitung zur Ergebnisseite mit dem Charakter
      router.push(`/tests/tv-characters/ergebnis?character=${result}`)
    }
  }

  const handleRestart = () => {
    window.scrollTo(0, 0)
    dispatch({ type: "START_TEST" })
  }

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <TVStaticBackground intensity={0.05} speed={0.3} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TV Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                TV CHARACTERS
              </h1>
            </div>
          </div>
        </div>

        {/* Ad Banner at the top */}
        <AdBanner />

        {/* Main Content */}
        <div className="my-8">
          <AnimatePresence mode="wait">
            {state.currentQuestionIndex === -1 && <IntroCard onStart={handleStart} />}

            {state.currentQuestionIndex >= 0 && !state.showResult && (
              <QuestionCard
                question={questions[state.currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentIndex={state.currentQuestionIndex}
                totalQuestions={questions.length}
              />
            )}

            {state.showResult && state.result && (
              <ResultCard result={characterResults[state.result]} onRestart={handleRestart} />
            )}
          </AnimatePresence>
        </div>

        {/* Ad Banner at the bottom */}
        <AdBanner />
      </div>
    </div>
  )
}
