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

    // Add a slight delay before moving to the next question
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
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto border-2 border-red-500"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-red-700 font-bold">
            Frage {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="h-2 bg-gray-100 rounded-full w-full max-w-xs ml-4">
            <div
              className="h-2 bg-red-500 rounded-full"
              style={{
                width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          {question.text}
        </h3>
      </div>

      <div className="space-y-3 mt-6">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswer === answer.id}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Navigation-Punkte für Fragen */}
      <QuestionPagination
        totalQuestions={totalQuestions}
        currentIndex={currentIndex}
        answeredQuestions={answeredQuestions}
        onNavigate={onNavigate}
      />
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
          ? "bg-red-500 text-white"
          : "bg-gray-50 text-gray-900 hover:bg-gray-100"
      } border-2 ${isSelected ? "border-red-600" : "border-transparent"}`}
    >
      {answer.text}
    </button>
  );
}
