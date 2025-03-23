"use client";

import { useReducer } from "react";
import { AnimatePresence } from "framer-motion";
import type { DogBreed, TestState } from "./types";
import { questions, dogBreedResults } from "./test-data";
import { QuestionCard } from "./question-card";
import { ResultCard } from "./result-card";
import { IntroCard } from "./intro-card";
import { AdBanner } from "./ad-banner";
import { PawBackground } from "./paw-background";

// Reducer für Verwaltung des Test-Zustands
function testReducer(state: TestState, action: any): TestState {
  switch (action.type) {
    case "START_TEST":
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: {},
        answerHistory: [], // Zurücksetzen des Verlaufs
        result: null,
        showResult: false,
      };
    case "ANSWER_QUESTION":
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: action.answerId,
      };

      // Antwortenverlauf aktualisieren
      const newHistory = [...state.answerHistory];
      if (!newHistory.includes(state.currentQuestionIndex)) {
        newHistory.push(state.currentQuestionIndex);
      }

      // Wenn dies die letzte Frage war, Ergebnis berechnen
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          answerHistory: newHistory,
          result: calculateResult(newAnswers),
          showResult: true,
        };
      }

      // Ansonsten zur nächsten Frage
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
        answerHistory: newHistory,
      };
    case "NAVIGATE_TO_QUESTION":
      // Navigation zu einer bestimmten Frage ermöglichen
      return {
        ...state,
        currentQuestionIndex: action.questionIndex,
      };
    default:
      return state;
  }
}

// Function to calculate the result based on answers
function calculateResult(answers: Record<string, string>): DogBreed {
  // Initialize scores for each dog breed
  const scores: Record<DogBreed, number> = {
    borderCollie: 0,
    australianShepherd: 0,
    siberianHusky: 0,
    beagle: 0,
    pug: 0,
    cavalierKingCharles: 0,
    shihTzu: 0,
    frenchBulldog: 0,
    goldenRetriever: 0,
    labradorRetriever: 0,
    irishWolfhound: 0,
    brusselsGriffon: 0,
    bullTerrier: 0,
    cotonDeTulear: 0,
    alaskanKleeKai: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.answers.find(
      (a: { id: string }) => a.id === answerId
    );
    if (!answer) return;

    // Add points for each dog breed
    Object.entries(answer.points).forEach(([breed, points]) => {
      // Typecasting points to number to ensure proper addition
      // This fixes the 'points is of type unknown' error
      scores[breed as DogBreed] += Number(points);
    });
  });

  // Find the dog breed with the highest score
  let highestScore = 0;
  let result: DogBreed = "goldenRetriever"; // Default
  let tiedBreeds: DogBreed[] = [];

  Object.entries(scores).forEach(([breed, score]) => {
    if (score > highestScore) {
      highestScore = score;
      result = breed as DogBreed;
      tiedBreeds = [breed as DogBreed];
    } else if (score === highestScore) {
      tiedBreeds.push(breed as DogBreed);
    }
  });

  // If there's a tie, randomly select one of the tied breeds
  if (tiedBreeds.length > 1) {
    const randomIndex = Math.floor(Math.random() * tiedBreeds.length);
    result = tiedBreeds[randomIndex];
  }

  return result;
}

export function DogBreedTest() {
  // Initialisierung des Test-Zustands
  const [state, dispatch] = useReducer(testReducer, {
    currentQuestionIndex: -1, // -1 bedeutet, wir sind auf dem Intro-Screen
    answers: {},
    answerHistory: [], // Speichert Indizes der beantworteten Fragen
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

  const handleNavigate = (questionIndex: number) => {
    dispatch({
      type: "NAVIGATE_TO_QUESTION",
      questionIndex,
    });
  };

  const handleRestart = () => {
    window.scrollTo(0, 0);
    dispatch({ type: "START_TEST" });
  };

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <PawBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Dog Breed Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-32 bg-[url('/images/dogs/dog-logo.png')] bg-contain bg-center bg-no-repeat"></div>
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
                result={dogBreedResults[state.result]}
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
