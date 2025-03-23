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
import { BubbleBackground } from "./bubble-background";

// Reducer for managing test state
function testReducer(state: TestState, action: any): TestState {
  switch (action.type) {
    case "START_TEST":
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: {},
        answerHistory: [], // Reset answer history
        result: null,
        showResult: false,
      };
    case "ANSWER_QUESTION":
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: action.character,
      };

      // Update answer history
      const newHistory = [...state.answerHistory];
      if (!newHistory.includes(state.currentQuestionIndex)) {
        newHistory.push(state.currentQuestionIndex);
      }

      // If this was the last question, calculate the result
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          answerHistory: newHistory,
          result: calculateResult(newAnswers),
          showResult: true,
        };
      }

      // Otherwise, move to the next question
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
        answerHistory: newHistory,
      };
    case "NAVIGATE_TO_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.questionIndex,
      };
    default:
      return state;
  }
}

// Funktion zur Berechnung des Ergebnisses basierend auf den Antworten
function calculateResult(answers: Record<string, Character>): Character {
  // Zähle das Vorkommen jedes Charakters
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
  };

  // Zähle jedes Charaktervorkommen
  Object.values(answers).forEach((character) => {
    characterCounts[character]++;
  });

  // Finde den Charakter mit der höchsten Anzahl
  let maxCount = 0;
  let result: Character = "spongebob"; // Standard

  Object.entries(characterCounts).forEach(([character, count]) => {
    if (count > maxCount) {
      maxCount = count;
      result = character as Character;
    }
  });

  return result;
}

export function SpongebobTest() {
  const router = useRouter();

  // Initialisiere den Testzustand
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1,
    answers: {},
    answerHistory: [],
    result: null,
    showResult: false,
  });

  const handleStart = () => {
    dispatch({ type: "START_TEST" });
  };

  const handleAnswer = (character: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      character: character as Character,
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
            test_type: "spongebob",
            result_character: result,
          });
        }
      } catch (e) {
        console.error("Analytics error:", e);
      }
      // Weiterleitung zur Ergebnisseite mit dem Charakter
      router.push(`/tests/spongebob/ergebnis?character=${result}`);
    }
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  // Add navigation handler
  const handleNavigate = (questionIndex: number) => {
    dispatch({
      type: "NAVIGATE_TO_QUESTION",
      questionIndex,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-blue-500 to-blue-700 relative">
      <BubbleBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Spongebob Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-[512px] h-[256px] bg-[url('/images/spongebob-logo.png')] bg-contain bg-center bg-no-repeat z-20"></div>
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
                answeredQuestions={state.answerHistory}
                onNavigate={handleNavigate}
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
