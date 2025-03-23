"use client";

import { useReducer } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import type { DCCharacter, TestState, Trait } from "./types";
import { questions, dcCharacterResults } from "./test-data";
import { QuestionCard } from "./question-card";
import { ResultCard } from "./result-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { DCBackground } from "./dc-background";
import { trackTestCompleted } from "./analytics";

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
        [questions[state.currentQuestionIndex].id]: action.answerId,
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

// Function to calculate the result based on answers
function calculateResult(answers: Record<string, string>): DCCharacter {
  // Initialize scores for each trait
  const traitScores: Record<Trait, number> = {
    courage: 0,
    intelligence: 0,
    humor: 0,
    morality: 0,
    leadership: 0,
    chaos: 0,
    justice: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.answers.find((a) => a.id === answerId);
    if (!answer) return;

    // Add points for each trait
    Object.entries(answer.points).forEach(([trait, points]) => {
      traitScores[trait as Trait] += points;
    });
  });

  // Find the character with the closest match to the user's trait scores
  let bestMatch: DCCharacter = "superman"; // Default
  let smallestDifference = Number.MAX_VALUE;

  Object.entries(dcCharacterResults).forEach(([characterId, character]) => {
    let totalDifference = 0;

    // Calculate the sum of squared differences for each trait
    Object.entries(traitScores).forEach(([trait, score]) => {
      const characterScore = character.traits[trait as Trait];
      const difference = characterScore - score;
      totalDifference += difference * difference;
    });

    // If this character is a closer match, update the best match
    if (totalDifference < smallestDifference) {
      smallestDifference = totalDifference;
      bestMatch = characterId as DCCharacter;
    }
  });

  return bestMatch;
}

export function DCUniverseTest() {
  // Initialize test state and router
  const router = useRouter();
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1,
    answers: {},
    answerHistory: [], // Initialize empty answer history
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
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: answerId,
      };
      const result = calculateResult(newAnswers);

      // Verfolge das Ergebnis vor der Weiterleitung
      try {
        // Verfolge den Testabschluss mit dem Ergebnis
        trackTestCompleted(result);
      } catch (e) {
        console.error("Analytics error:", e);
      }

      // Weiterleitung zur Ergebnisseite mit dem Charakter
      router.push(`/tests/dc-universe/ergebnis?character=${result}`);
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
    <div className="min-h-screen py-12 px-4 relative">
      <DCBackground density={25} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* DC Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[512px] h-[256px] bg-[url('/images/dc.png')] mx-4 p-10 bg-contain bg-center bg-no-repeat z-20"></div>
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
                answeredQuestions={state.answerHistory}
                onNavigate={handleNavigate}
              />
            )}

            {state.showResult && state.result && (
              <ResultCard
                result={dcCharacterResults[state.result]}
                onRestart={handleRestart}
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
