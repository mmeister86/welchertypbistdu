"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Question } from "./types";

type QuestionCardProps = {
  question: Question;
  onAnswer: (character: string) => void;
  currentIndex: number;
  totalQuestions: number;
};

// Komponente für die Anzeige der Fragen und Antwortmöglichkeiten
export function QuestionCard({
  question,
  onAnswer,
  currentIndex,
  totalQuestions,
}: QuestionCardProps) {
  // State für ausgewählte Antwort hinzufügen
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Funktion zum Behandeln der Antwortauswahl mit Verzögerung
  const handleSelect = (character: string) => {
    setSelectedAnswer(character);

    // Füge eine kleine Verzögerung hinzu, bevor zur nächsten Frage gewechselt wird
    setTimeout(() => {
      onAnswer(character);
      setSelectedAnswer(null);
    }, 500);
  };

  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-pink-300 border-opacity-30 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Fortschrittsanzeige */}
      <div className="mb-6">
        <div className="flex justify-between text-gray-300 text-sm mb-2">
          <span>
            Frage {currentIndex + 1} von {totalQuestions}
          </span>
          <span>
            {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2.5">
          <div
            className="bg-pink-600 h-2.5 rounded-full"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Frage */}
      <h3 className="text-xl font-bold text-white mb-6">{question.text}</h3>

      {/* Antwortmöglichkeiten */}
      <div className="space-y-3">
        {question.answers.map((answer) => (
          <motion.button
            key={answer.id}
            className={`w-full text-left p-4 bg-white ${
              selectedAnswer === answer.character
                ? "bg-opacity-15 border-pink-500 border-opacity-70"
                : "bg-opacity-5 border-pink-300 border-opacity-20"
            } hover:bg-opacity-10 border rounded-lg text-gray-200 transition-all`}
            onClick={() => handleSelect(answer.character)}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {answer.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
