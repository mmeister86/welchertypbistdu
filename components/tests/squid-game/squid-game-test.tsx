"use client";

import { useReducer } from "react";
import { AnimatePresence } from "framer-motion";
import type { Character, TestState } from "./types";
import { questions, characterResults } from "./test-data";
import { QuestionCard } from "./question-card";
import { ResultCard } from "./result-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { SquidGameBackground } from "./squid-game-background";
import { trackTestStart, trackAnswer, trackResult } from "./analytics";

// Reduzierungsfunktion zur Verwaltung des Testzustands
function testReducer(state: TestState, action: any): TestState {
  switch (action.type) {
    case "START_TEST":
      trackTestStart();
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: {},
        result: null,
        showResult: false,
      };
    case "ANSWER_QUESTION":
      const currentQuestion = questions[state.currentQuestionIndex];
      const selectedAnswer = currentQuestion.answers.find(
        (answer) => answer.character === action.character
      );

      if (selectedAnswer) {
        trackAnswer(currentQuestion.id, selectedAnswer.id);
      }

      const newAnswers = {
        ...state.answers,
        [currentQuestion.id]: action.character,
      };

      // Wenn dies die letzte Frage war, berechne das Ergebnis
      if (state.currentQuestionIndex === questions.length - 1) {
        const result = calculateResult(newAnswers);
        trackResult(result);
        return {
          ...state,
          answers: newAnswers,
          result: result,
          showResult: true,
        };
      }

      // Sonst gehe zur nächsten Frage
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
      };
    default:
      return state;
  }
}

// Funktion zur Berechnung des Ergebnisses basierend auf den Antworten
function calculateResult(answers: Record<string, Character>): Character {
  // Zähle das Vorkommen jedes Charakters
  const characterCounts: Record<Character, number> = {
    "gi-hun": 0,
    "sae-byeok": 0,
    "sang-woo": 0,
    "il-nam": 0,
    "deok-su": 0,
    ali: 0,
    "mi-nyeo": 0,
    "ji-yeong": 0,
    "jun-ho": 0,
    "front-man": 0,
  };

  // Zähle jedes Charaktervorkommen
  Object.values(answers).forEach((character) => {
    characterCounts[character]++;
  });

  // Finde den Charakter mit der höchsten Anzahl
  let maxCount = 0;
  let result: Character = "gi-hun"; // Standard

  Object.entries(characterCounts).forEach(([character, count]) => {
    if (count > maxCount) {
      maxCount = count;
      result = character as Character;
    }
  });

  return result;
}

export function SquidGameTest() {
  // Initialisiere den Testzustand
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1, // -1 bedeutet, wir sind auf dem Intro-Bildschirm
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
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-pink-800 to-red-900 relative">
      <SquidGameBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Squid Game Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 bg-[url('/images/squid-game-logo.png')] bg-contain bg-center bg-no-repeat"></div>
        </div>

        {/* Ad Banner am Anfang */}
        <AdBanner />

        {/* Hauptinhalt */}
        <div className="my-8">
          <AnimatePresence mode="wait" initial={false}>
            {state.currentQuestionIndex === -1 && (
              <IntroCard key="intro" onStart={handleStart} />
            )}

            {state.currentQuestionIndex >= 0 && !state.showResult && (
              <QuestionCard
                key={`question-${state.currentQuestionIndex}`}
                question={questions[state.currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentIndex={state.currentQuestionIndex}
                totalQuestions={questions.length}
              />
            )}

            {state.showResult && state.result && (
              <ResultCard
                key="result"
                result={characterResults[state.result]}
                onRestart={handleRestart}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Ad Banner am Ende */}
        <AdBanner />
      </div>
    </div>
  );
}
