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
import { StarfieldBackground } from "./starfield-background";

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
        [action.questionId]: action.answerId,
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
function calculateResult(answers: Record<string, string>): Character {
  // Initialize scores for each character
  const scores: Record<Character, number> = {
    luke: 0,
    anakin: 0,
    vader: 0,
    palpatine: 0,
    leia: 0,
    han: 0,
    chewbacca: 0,
    yoda: 0,
    grogu: 0,
    mandalorian: 0,
    maul: 0,
    obiwan: 0,
    padme: 0,
    rey: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.answers.find((a) => a.id === answerId);
    if (!answer) return;

    // Add character points from this answer
    Object.entries(answer.characterPoints).forEach(([character, points]) => {
      scores[character as Character] += points;
    });
  });

  // Find the character with the highest score
  let highestScore = 0;
  let result: Character = "luke"; // Default

  Object.entries(scores).forEach(([character, score]) => {
    if (score > highestScore) {
      highestScore = score;
      result = character as Character;
    }
  });

  return result;
}

export function StarWarsTest() {
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
    const currentQuestion = questions[state.currentQuestionIndex];
    dispatch({
      type: "ANSWER_QUESTION",
      questionId: currentQuestion.id,
      answerId,
    });

    // Prüfe, ob dies die letzte Frage ist
    if (state.currentQuestionIndex === questions.length - 1) {
      // Berechne das Ergebnis vor der Weiterleitung
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
            test_type: "star-wars",
            result_character: result,
          });
        }
      } catch (e) {
        console.error("Analytics error:", e);
      }
      // Weiterleitung zur Ergebnisseite mit dem Charakter
      router.push(`/tests/star-wars/ergebnis?character=${result}`);
    }
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-black relative">
      <StarfieldBackground starCount={300} speed={0.3} />
      <div className="max-w-6xl mx-auto">
        {/* Star Wars Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-[512px] h-[256px] bg-[url('/images/star-wars-logo.png')] bg-contain bg-center bg-no-repeat z-20"></div>
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

            {state.showResult && state.result && (
              <ResultCard
                result={characterResults[state.result]}
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
