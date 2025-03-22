"use client"

import type { Answer, Question, Youtuber } from "./types"
import { useState } from "react"
import { motion } from "framer-motion"

interface QuestionCardProps {
  question: Question
  onAnswer: (points: Record<Youtuber, number>) => void
  currentIndex: number
  totalQuestions: number
}

export function QuestionCard({ question, onAnswer, currentIndex, totalQuestions }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleSelect = (answerId: string, points: Record<Youtuber, number>) => {
    setSelectedAnswer(answerId)

    // Add a small delay before moving to the next question for better UX
    setTimeout(() => {
      onAnswer(points)
      setSelectedAnswer(null)
    }, 500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-black bg-opacity-75 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-3xl mx-auto border-2 border-red-600"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-red-500 font-bold text-lg">
            Frage {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="h-3 bg-gray-900 rounded-full w-full max-w-xs ml-4">
            <div
              className="h-3 bg-gradient-to-r from-red-700 to-red-500 rounded-full"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-red-100 mb-2">{question.text}</h3>
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
  onSelect: (answerId: string, points: Record<Youtuber, number>) => void
}

function AnswerOption({ answer, isSelected, onSelect }: AnswerOptionProps) {
  return (
    <button
      onClick={() => onSelect(answer.id, answer.youtuberPoints)}
      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
        isSelected
          ? "bg-gradient-to-r from-red-700 to-red-500 text-white font-bold border border-red-300"
          : "bg-black/80 text-white border border-red-900/50 hover:bg-red-950 hover:border-red-500"
      }`}
    >
      {answer.text}
    </button>
  )
}
