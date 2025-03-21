"use client";

import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import type { MarvelCharacter, TestState } from "./types";
import { questions, marvelCharacterResults } from "./test-data";
import { QuestionCard } from "./question-card";
import { ResultCard } from "./result-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { ComicBackground } from "./comic-background";

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
        [questions[state.currentQuestionIndex].id]: action.answerId,
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
function calculateResult(answers: Record<string, string>): MarvelCharacter {
  // Initialize scores for each character
  const scores: Record<MarvelCharacter, number> = {
    ironMan: 0,
    captainAmerica: 0,
    thor: 0,
    hulk: 0,
    blackWidow: 0,
    hawkeye: 0,
    spiderMan: 0,
    blackPanther: 0,
    captainMarvel: 0,
    doctorStrange: 0,
    starLord: 0,
    loki: 0,
    thanos: 0,
    ultron: 0,
    hela: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.answers.find((a) => a.id === answerId);
    if (!answer) return;

    // Add points for each character
    Object.entries(answer.points).forEach(([character, points]) => {
      scores[character as MarvelCharacter] += points;
    });
  });

  // Find the character with the highest score
  let highestScore = 0;
  let result: MarvelCharacter = "ironMan"; // Default

  Object.entries(scores).forEach(([character, score]) => {
    if (score > highestScore) {
      highestScore = score;
      result = character as MarvelCharacter;
    }
  });

  return result;
}

export function MarvelTest() {
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

  const handleAnswer = (answerId: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      answerId,
    });

    // Prüfe, ob dies die letzte Frage ist
    if (state.currentQuestionIndex === questions.length - 1) {
      // Berechne das Ergebnis vor der Weiterleitung
      const currentQuestion = questions[state.currentQuestionIndex];
      const selectedAnswer = currentQuestion.answers.find(
        (a) => a.id === answerId
      );

      if (selectedAnswer) {
        const newAnswers = {
          ...state.answers,
          [currentQuestion.id]: answerId,
        };
        const result = calculateResult(newAnswers);

        // Verfolge das Ergebnis vor der Weiterleitung
        try {
          // Verfolge den Testabschluss mit dem Ergebnis
          if (typeof window !== "undefined" && "gtag" in window) {
            // @ts-ignore - gtag ist nicht typisiert
            window.gtag("event", "test_completed", {
              test_type: "marvel",
              result_character: result,
            });
          }
        } catch (e) {
          console.error("Analytics error:", e);
        }

        // Weiterleitung zur Ergebnisseite mit dem Charakter
        router.push(`/tests/marvel/ergebnis?character=${result}`);
      }
    }
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <ComicBackground density={25} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Marvel Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                MARVEL TEST
              </h1>
            </div>
          </div>
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
