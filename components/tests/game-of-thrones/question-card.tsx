"use client"

import type { Answer, Question } from "./types"
import { useState } from "react"
import { motion } from "framer-motion"

interface QuestionCardProps {
  question: Question
  onAnswer: (character: string) => void
  currentIndex: number
  totalQuestions: number
}

export function QuestionCard({ question, onAnswer, currentIndex, totalQuestions }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleSelect = (answerId: string, character: string) => {
    setSelectedAnswer(answerId)

    // Add a small delay before moving to the next question for better UX
    setTimeout(() => {
      onAnswer(character)
      setSelectedAnswer(null)
    }, 500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-lg max-w-3xl mx-auto border border-gray-700"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-amber-500 font-bold">
            Frage {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="h-2 bg-gray-700 rounded-full w-full max-w-xs ml-4">
            <div
              className="h-2 bg-amber-500 rounded-full"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{question.text}</h3>
      </div>

      <div className="space-y-3">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswer === answer.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </motion.div>
  )
}

interface AnswerOptionProps {
  answer: Answer
  isSelected: boolean
  onSelect: (answerId: string, character: string) => void
}

function AnswerOption({ answer, isSelected, onSelect }: AnswerOptionProps) {
  return (
    <button
      onClick={() => onSelect(answer.id, answer.character)}
      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
        isSelected ? "bg-amber-500 text-gray-900" : "bg-gray-700 text-white hover:bg-gray-600"
      }`}
    >
      {answer.text}
    </button>
  )
}

