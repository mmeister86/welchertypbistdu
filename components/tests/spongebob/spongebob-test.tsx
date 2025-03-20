"use client"

import { useReducer } from "react"
import { AnimatePresence } from "framer-motion"
import type { Character, TestState } from "./types"
import { questions, characterResults } from "./test-data"
import { QuestionCard } from "./question-card"
import { ResultCard } from "./result-card"
import { IntroCard } from "./intro-card"
import { AdBanner } from "./ad-banner"
import { BubbleBackground } from "./bubble-background"

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
    spongebob: 0,
    patrick: 0,
    squidward: 0,
    krabs: 0,
    sandy: 0,
    plankton: 0,
    puff: 0,
    pearl: 0,
    gary: 0,
    karen: 0,
  }

  // Count each character occurrence
  Object.values(answers).forEach((character) => {
    characterCounts[character]++
  })

  // Find the character with the highest count
  let maxCount = 0
  let result: Character = "spongebob" // Default

  Object.entries(characterCounts).forEach(([character, count]) => {
    if (count > maxCount) {
      maxCount = count
      result = character as Character
    }
  })

  return result
}

export function SpongebobTest() {
  // Initialize test state
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1, // -1 means we're at the intro screen
    answers: {},
    result: null,
    showResult: false,
  })

  const handleStart = () => {
    dispatch({ type: "START_TEST" })
  }

  const handleAnswer = (character: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      character,
    })
  }

  const handleRestart = () => {
    window.scrollTo(0, 0)
    dispatch({ type: "START_TEST" })
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-blue-500 to-blue-700 relative">
      <BubbleBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Spongebob Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 bg-[url('/images/spongebob-logo.png')] bg-contain bg-center bg-no-repeat"></div>
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

