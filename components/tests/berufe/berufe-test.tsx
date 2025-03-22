"use client";

import { useReducer, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import type { Career, TestState } from "./types";
import { questions, careerResults } from "./test-data";
import { QuestionCard } from "./question-card";
import { ResultCard } from "./result-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { CareerBackground } from "./career-background";

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
function calculateResult(answers: Record<string, string>): Career {
  // Initialize scores for each career
  const careerScores: Record<Career, number> = {
    PF: 0,
    KZ: 0,
    KB: 0,
    VK: 0,
    EH: 0,
    FI: 0,
    MFA: 0,
    IK: 0,
    EL: 0,
    SHK: 0,
    ZFA: 0,
    ARZT: 0,
    POL: 0,
    FW: 0,
    LEH: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.answers.find((a) => a.id === answerId);
    if (!answer) return;

    // Add points for each career
    answer.careers.forEach((career) => {
      careerScores[career]++;
    });
  });

  // Find the career with the highest score
  let highestScore = 0;
  let result: Career = "PF"; // Default

  Object.entries(careerScores).forEach(([career, score]) => {
    if (score > highestScore) {
      highestScore = score;
      result = career as Career;
    }
  });

  return result;
}

export function BerufeTest() {
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
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  // Use useEffect to handle navigation after the component renders
  useEffect(() => {
    if (state.showResult && state.result) {
      router.push(`/tests/berufe/ergebnis?career=${state.result}`);
    }
  }, [state.showResult, state.result, router]);

  // Return loading state or null if we're about to navigate away
  if (state.showResult && state.result) {
    return <div className="text-center p-8">Dein Ergebnis wird geladen...</div>;
  }

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <CareerBackground density={40} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Career Test Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-blue-800">BERUFSTEST</h1>
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
