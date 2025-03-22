"use client"

import { useReducer } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import type { Youtuber, TestState, YoutuberResult } from "./types"
import { questions } from "./test-data"
import { QuestionCard } from "./question-card"
import { ResultCard } from "./result-card"
import { IntroCard } from "./intro-card"
import { YouTubeBackground } from "./youtube-background"
import { trackTestStarted, trackTestCompleted } from "./analytics"

// Importiere die youtuberResults aus test-data.ts
import { youtuberResults } from "./test-data"

// Reducer für die Verwaltung des Test-Zustands
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
        [questions[state.currentQuestionIndex].id]: action.youtuber,
      }

      // Wenn dies die letzte Frage war, berechne das Ergebnis
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          result: calculateResult(newAnswers),
          showResult: true,
        }
      }

      // Andernfalls gehe zur nächsten Frage
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
      }
    default:
      return state
  }
}

// Funktion zur Berechnung des Ergebnisses basierend auf den Antworten
function calculateResult(answers: Record<string, string>): Youtuber {
  // Zähle das Vorkommen jedes YouTubers
  const youtuberCounts: Record<Youtuber, number> = {
    bibisBeautypalace: 0,
    gronkh: 0,
    laserLuca: 0,
    julienco: 0,
    juliusChezame: 0,
    vickelJose: 0,
    uyenNinh: 0,
    doktorLight: 0,
    fabianMagic: 0,
    werBistDu: 0,
    pewDiePie: 0,
    dudePerfect: 0,
    jennaMarbles: 0,
    davidDobrik: 0,
    lizaKoshy: 0,
    caseyNeistat: 0,
    emmaChamberlain: 0,
    markiplier: 0,
    shaneDawson: 0,
    jamesCharles: 0,
  }

  // Zähle jedes YouTuber-Vorkommen
  Object.values(answers).forEach((youtuber) => {
    if (youtuber in youtuberCounts) {
      youtuberCounts[youtuber as Youtuber]++
    }
  })

  // Finde den YouTuber mit der höchsten Anzahl
  let maxCount = 0
  let result: Youtuber = "pewDiePie" // Standard

  Object.entries(youtuberCounts).forEach(([youtuber, count]) => {
    if (count > maxCount) {
      maxCount = count
      result = youtuber as Youtuber
    }
  })

  return result
}

export function YouTuberTest() {
  const router = useRouter()

  // Initialisiere den Test-Zustand
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1, // -1 bedeutet, dass wir auf dem Intro-Bildschirm sind
    answers: {},
    result: null,
    showResult: false,
  })

  const handleStart = () => {
    trackTestStarted()
    dispatch({ type: "START_TEST" })
  }

  // Wir aktualisieren den Typ der handleAnswer-Funktion, um mit dem erwarteten Typ zu arbeiten
  const handleAnswer = (points: Record<Youtuber, number>) => {
    // Finde den Youtuber mit den höchsten Punkten
    let maxPoints = 0
    let selectedYoutuber: Youtuber = "pewDiePie" // Default-Wert

    Object.entries(points).forEach(([youtuber, point]) => {
      if (point > maxPoints) {
        maxPoints = point
        selectedYoutuber = youtuber as Youtuber
      }
    })

    dispatch({
      type: "ANSWER_QUESTION",
      youtuber: selectedYoutuber,
    })

    // Prüfe, ob dies die letzte Frage ist
    if (state.currentQuestionIndex === questions.length - 1) {
      // Berechne das Ergebnis vor der Weiterleitung
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: selectedYoutuber,
      }
      const result = calculateResult(newAnswers)

      // Verfolge das Ergebnis vor der Weiterleitung
      trackTestCompleted(result)

      try {
        // Verfolge den Testabschluss mit dem Ergebnis
        if (typeof window !== "undefined" && "gtag" in window) {
          // @ts-ignore - gtag ist nicht typisiert
          window.gtag("event", "test_completed", {
            test_type: "youtuber",
            result_youtuber: result,
          })
        }
      } catch (e) {
        console.error("Analytics error:", e)
      }

      // Weiterleitung zur Ergebnisseite mit dem YouTuber
      router.push(`/tests/youtube/ergebnis?youtuber=${result}`)
    }
  }

  const handleRestart = () => {
    window.scrollTo(0, 0)
    dispatch({ type: "START_TEST" })
  }

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <YouTubeBackground intensity={0.3} speed={0.3} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* YouTube Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-red-500 shadow-sm">
                YouTube TEST
              </h1>
            </div>
          </div>
        </div>

        {/* Hauptinhalt */}
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
              <ResultCard
                result={youtuberResults[state.result] as YoutuberResult}
                onRestart={handleRestart}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
