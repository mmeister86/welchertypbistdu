"use client";

import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import type { Character, TestState } from "./types";
import { questions, characterResults } from "./test-data";
import { QuestionCard } from "./question-card";
import { ResultCard } from "./result-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { SnowBackground } from "./snow-background";

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
      };
    case "ANSWER_QUESTION":
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: action.character,
      };

      // If this was the last question, calculate the result
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          result: calculateResult(newAnswers),
          showResult: true,
        };
      }

      // Otherwise, move to the next question
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
      };
    default:
      return state;
  }
}

// Function to calculate the result based on answers
function calculateResult(answers: Record<string, Character>): Character {
  // Count occurrences of each character
  const characterCounts: Record<Character, number> = {
    ned: 0,
    cersei: 0,
    tyrion: 0,
    daenerys: 0,
    jon: 0,
    arya: 0,
    jaime: 0,
    sansa: 0,
  };

  // Count each character occurrence
  Object.values(answers).forEach((character) => {
    characterCounts[character]++;
  });

  // Find the character with the highest count
  let maxCount = 0;
  let result: Character = "jon"; // Default

  Object.entries(characterCounts).forEach(([character, count]) => {
    if (count > maxCount) {
      maxCount = count;
      result = character as Character;
    }
  });

  return result;
}

export function GameOfThronesTest() {
  const router = useRouter();

  // Initialize test state
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1, // -1 means we're at the intro screen
    answers: {},
    result: null,
    showResult: false,
  });

  const handleStart = () => {
    dispatch({ type: "START_TEST" });
  };

  const handleAnswer = (character: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      character,
    });

    // Prüfe, ob dies die letzte Frage ist
    if (state.currentQuestionIndex === questions.length - 1) {
      // Berechne das Ergebnis vor der Weiterleitung
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: character as Character,
      };
      const result = calculateResult(newAnswers);

      // Verfolge das Ergebnis vor der Weiterleitung
      try {
        // Verfolge den Testabschluss mit dem Ergebnis
        if (typeof window !== "undefined" && "gtag" in window) {
          // @ts-ignore - gtag ist nicht typisiert
          window.gtag("event", "test_completed", {
            test_type: "got",
            result_character: result,
          });
        }
      } catch (e) {
        console.error("Analytics error:", e);
      }

      // Weiterleitung zur Ergebnisseite mit dem Charakter
      router.push(`/tests/game-of-thrones/ergebnis?character=${result}`);
    }
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <SnowBackground snowflakeCount={150} speed={0.7} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Game of Thrones Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-[512px] h-[180px] bg-[url('/images/got-logo.png')] bg-contain bg-center bg-no-repeat"></div>
        </div>

        {/* Ad Banner at the top */}
        <AdBanner />

        {/* Main Content */}
        <div className="my-8">
          <AnimatePresence mode="wait">
            {state.currentQuestionIndex === -1 && (
              <IntroCard onStart={handleStart} />
            )}

            {state.currentQuestionIndex >= 0 && !state.showResult && (
              <QuestionCard
                question={questions[state.currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentIndex={state.currentQuestionIndex}
                totalQuestions={questions.length}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Ad Banner at the bottom */}
        <AdBanner />
      </div>
    </div>
  );
}
