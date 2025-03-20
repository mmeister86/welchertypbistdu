"use client"

import { useReducer } from "react"
import { AnimatePresence } from "framer-motion"
import type { Pokemon, TestState } from "./types"
import { questions, pokemonResults } from "./test-data"
import { QuestionCard } from "./question-card"
import { ResultCard } from "./result-card"
import { IntroCard } from "./intro-card"
import { AdBanner } from "./ad-banner"
import { PokeballBackground } from "./pokeball-background"

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
        [questions[state.currentQuestionIndex].id]: action.answerId,
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
function calculateResult(answers: Record<string, string>): Pokemon {
  // Initialize scores for each Pokémon
  const scores: Record<Pokemon, number> = {
    pikachu: 0,
    relaxo: 0,
    bisasam: 0,
    glumanda: 0,
    mew: 0,
    evoli: 0,
    glurak: 0,
    mewtu: 0,
    gengar: 0,
    schiggy: 0,
    arkani: 0, // Added
    arceus: 0, // Added
    dragoran: 0, // Added
    enton: 0, // Added
    galoppa: 0, // Added
  }

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question) return

    const answer = question.answers.find((a) => a.id === answerId)
    if (!answer) return

    // Add points for each Pokémon
    Object.entries(answer.points).forEach(([pokemon, points]) => {
      scores[pokemon as Pokemon] += points
    })
  })

  // Find the Pokémon with the highest score
  let highestScore = 0
  let result: Pokemon = "pikachu" // Default
  let tiedPokemon: Pokemon[] = []

  Object.entries(scores).forEach(([pokemon, score]) => {
    if (score > highestScore) {
      highestScore = score
      result = pokemon as Pokemon
      tiedPokemon = [pokemon as Pokemon]
    } else if (score === highestScore) {
      tiedPokemon.push(pokemon as Pokemon)
    }
  })

  // If there's a tie, randomly select one of the tied Pokémon
  // This helps prevent any single Pokémon from being favored in ties
  if (tiedPokemon.length > 1) {
    const randomIndex = Math.floor(Math.random() * tiedPokemon.length)
    result = tiedPokemon[randomIndex]
  }

  return result
}

export function PokemonTest() {
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

  const handleAnswer = (answerId: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      answerId,
    })
  }

  const handleRestart = () => {
    window.scrollTo(0, 0)
    dispatch({ type: "START_TEST" })
  }

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <PokeballBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Pokémon Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 bg-[url('/images/pokemon/logo.png')] bg-contain bg-center bg-no-repeat"></div>
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
              <ResultCard result={pokemonResults[state.result]} onRestart={handleRestart} />
            )}
          </AnimatePresence>
        </div>

        {/* Ad Banner at the bottom */}
        <AdBanner />
      </div>
    </div>
  )
}

