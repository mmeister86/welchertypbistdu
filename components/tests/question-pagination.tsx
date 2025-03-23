"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Vereinfachte Navigation zwischen Fragen mit zwei Richtungsbuttons
 * Links-Button: Zur vorherigen Frage navigieren
 * Rechts-Button: Zur nächsten Frage navigieren
 */
export function QuestionPagination({
  totalQuestions,
  currentIndex,
  answeredQuestions,
  onNavigate,
}: {
  totalQuestions: number;
  currentIndex: number;
  answeredQuestions: number[];
  onNavigate: (index: number) => void;
}) {
  // Prüfen, ob Navigation zur vorherigen Frage möglich ist
  const canGoBack = currentIndex > 0;

  // Prüfen, ob Navigation zur nächsten Frage möglich ist
  // (wenn sie bereits beantwortet wurde oder die aktuelle Frage ist)
  const canGoForward =
    currentIndex < totalQuestions - 1 &&
    answeredQuestions.includes(currentIndex + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center gap-4 my-4"
    >
      {/* Zurück-Button */}
      <div className="inline-block">
        <button
          className={`px-3 py-2 border rounded-md transition-all duration-200 flex items-center
            ${
              canGoBack
                ? "border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          onClick={() => canGoBack && onNavigate(currentIndex - 1)}
          disabled={!canGoBack}
          aria-label="Zur vorherigen Frage"
          title="Zur vorherigen Frage"
        >
          <ChevronLeft size={18} />
          <span className="ml-1 text-sm">Zurück</span>
        </button>
      </div>

      {/* Vorwärts-Button */}
      <div className="inline-block">
        <button
          className={`px-3 py-2 border rounded-md transition-all duration-200 flex items-center
            ${
              canGoForward
                ? "border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          onClick={() => canGoForward && onNavigate(currentIndex + 1)}
          disabled={!canGoForward}
          aria-label="Zur nächsten Frage"
          title="Zur nächsten Frage"
        >
          <span className="mr-1 text-sm">Weiter</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}
