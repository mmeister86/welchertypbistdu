"use client";

import { useReducer, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import type { CarBrand, TestResult, Answer } from "./types";
import { questions } from "./test-data";
import { QuestionCard } from "./question-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { AutoBackground } from "./auto-background";

// Definiere den Typ für die Action
type TestAction =
  | { type: "START_TEST" }
  | { type: "ANSWER_QUESTION"; answerId: string }
  | { type: "NAVIGATE_TO_QUESTION"; questionIndex: number };

// Definiere den erweiterten TestState-Typ
interface TestState {
  currentQuestionIndex: number;
  answers: Record<number, Answer>;
  completed: boolean;
  result: TestResult | undefined;
  answerHistory: string[]; // Speichert die IDs der gegebenen Antworten
  canNavigateBack: boolean; // Steuert, ob zurück navigiert werden kann
}

// Initialisiere den initialen State
const initialState: TestState = {
  currentQuestionIndex: -1, // -1 bedeutet, wir sind auf dem Intro-Bildschirm
  answers: {},
  completed: false,
  result: undefined,
  answerHistory: [],
  canNavigateBack: false,
};

// Reducer for managing test state
function testReducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case "START_TEST":
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: {},
        completed: false,
        result: undefined,
        answerHistory: [], // Setze den Antwortverlauf zurück
        canNavigateBack: false, // Deaktiviere die Rückwärtsnavigation am Anfang
      };
    case "ANSWER_QUESTION":
      const answer = questions[state.currentQuestionIndex].answers.find(
        (a) => a.id === action.answerId
      );

      if (!answer) {
        return state; // No valid answer found, return state unchanged
      }

      const newAnswers = {
        ...state.answers,
        [state.currentQuestionIndex]: answer,
      };

      // Speichere die Antwort im Antwortverlauf
      const newAnswerHistory = [...state.answerHistory];
      newAnswerHistory[state.currentQuestionIndex] = action.answerId;

      // Wenn dies die letzte Frage war, berechne das Ergebnis
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          result: calculateResult(newAnswers),
          completed: true,
          answerHistory: newAnswerHistory,
        };
      }

      // Ansonsten gehe zur nächsten Frage
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
        answerHistory: newAnswerHistory,
        canNavigateBack: true, // Aktiviere die Rückwärtsnavigation
      };
    // Füge den Fall für die Navigation zu einer bestimmten Frage hinzu
    case "NAVIGATE_TO_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.questionIndex,
      };
    default:
      return state;
  }
}

// Function to calculate the result based on answers
function calculateResult(answers: Record<number, Answer>): TestResult {
  // Initialize scores for each car brand
  const brandScores: Record<CarBrand, number> = {
    Volkswagen: 0,
    BMW: 0,
    "Mercedes-Benz": 0,
    Audi: 0,
    Porsche: 0,
    Opel: 0,
    Skoda: 0,
    Toyota: 0,
    Honda: 0,
    Ford: 0,
    Fiat: 0,
    Peugeot: 0,
    Renault: 0,
    Volvo: 0,
    Tesla: 0,
    Mazda: 0,
    Hyundai: 0,
    Suzuki: 0,
    Mini: 0,
    Jeep: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answer]) => {
    // Add points for each car brand based on the answer's points
    Object.entries(answer.points).forEach(([brand, points]) => {
      brandScores[brand as CarBrand] += points as number;
    });
  });

  // Find the brand with the highest score
  let highestScore = 0;
  let resultBrand: CarBrand = "Volkswagen"; // Default

  Object.entries(brandScores).forEach(([brand, score]) => {
    if (score > highestScore) {
      highestScore = score;
      resultBrand = brand as CarBrand;
    }
  });

  // TODO: Complete the proper result calculation
  // This is a simplified version just to make the code work
  return {
    brand: resultBrand,
    score: highestScore,
    profile: {
      name: resultBrand,
      group: "Deutsche Automarken", // Default, should be determined based on the brand
      traits: [],
      description: "",
      animal: "",
      keywords: [],
    },
    matchPercentage: 100,
    alternativeBrands: [],
  };
}

export function AutoTest() {
  const router = useRouter();
  // Initialize test state
  const [state, dispatch] = useReducer(testReducer, initialState);

  const handleStart = () => {
    dispatch({ type: "START_TEST" });
  };

  const handleAnswer = (answerId: string) => {
    dispatch({
      type: "ANSWER_QUESTION",
      answerId,
    });
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  // Funktion zum Navigieren zu einer bestimmten Frage
  const handleNavigate = (questionIndex: number) => {
    dispatch({ type: "NAVIGATE_TO_QUESTION", questionIndex });
  };

  // Use useEffect to handle navigation after the component renders
  useEffect(() => {
    if (state.completed && state.result) {
      router.push(`/tests/automarken/ergebnis?brand=${state.result.brand}`);
    }
  }, [state.completed, state.result, router]);

  // Return loading state or null if we're about to navigate away
  if (state.completed && state.result) {
    return <div className="text-center p-8">Dein Ergebnis wird geladen...</div>;
  }

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <AutoBackground density={40} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Auto Test Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-blue-800">
                AUTOMARKEN TEST
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

            {state.currentQuestionIndex >= 0 && !state.completed && (
              <QuestionCard
                question={questions[state.currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentIndex={state.currentQuestionIndex}
                totalQuestions={questions.length}
                onNavigate={handleNavigate} // Übergib die Navigationsfunktion
                answeredQuestions={state.answerHistory
                  .map((_, index) => index)
                  .filter((index) => state.answerHistory[index] !== undefined)} // Übergib die beantworteten Fragen
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
