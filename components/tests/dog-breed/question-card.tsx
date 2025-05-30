"use client";

import type { Answer, Question } from "./types";
import { useState } from "react";
import { motion } from "framer-motion";
import { QuestionPagination } from "../question-pagination";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  currentIndex: number;
  totalQuestions: number;
  answeredQuestions: number[];
  onNavigate: (index: number) => void;
}

export function QuestionCard({
  question,
  onAnswer,
  currentIndex,
  totalQuestions,
  answeredQuestions,
  onNavigate,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelect = (answerId: string) => {
    setSelectedAnswer(answerId);

    // Add a small delay before moving to the next question for better UX
    setTimeout(() => {
      onAnswer(answerId);
      setSelectedAnswer(null);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto border-2 border-amber-300"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-amber-700 font-bold">
            Frage {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="h-2 bg-gray-100 rounded-full w-full max-w-xs ml-4">
            <div
              className="h-2 bg-amber-500 rounded-full"
              style={{
                width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2">
          {question.text}
        </h3>
      </div>

      {/* Navigation-Punkte für Fragen */}
      <QuestionPagination
        totalQuestions={totalQuestions}
        currentIndex={currentIndex}
        answeredQuestions={answeredQuestions}
        onNavigate={onNavigate}
      />

      <div className="space-y-3 mt-6">
        {question.answers.map((answer: Answer) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswer === answer.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface AnswerOptionProps {
  answer: Answer;
  isSelected: boolean;
  onSelect: (answerId: string) => void;
}

function AnswerOption({ answer, isSelected, onSelect }: AnswerOptionProps) {
  return (
    <button
      onClick={() => onSelect(answer.id)}
      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
        isSelected
          ? "bg-amber-500 text-white"
          : "bg-amber-50 text-amber-900 hover:bg-amber-100"
      } border-2 ${isSelected ? "border-amber-600" : "border-transparent"}`}
    >
      {answer.text}
    </button>
  );
}
