"use client";

import { motion } from "framer-motion";
import { Share2, RotateCcw } from "lucide-react";
import type { CharacterResult } from "./types";

type ResultCardProps = {
  result: CharacterResult;
  onRestart: () => void;
};

// Komponente für die Anzeige des Testergebnisses
export function ResultCard({ result, onRestart }: ResultCardProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Mein Squid Game Persönlichkeitstest",
          text: `Ich bin ${result.name}! Welcher Squid Game-Charakter bist du?`,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // Fallback für Browser ohne Web Share API
      navigator.clipboard.writeText(
        `Ich bin ${result.name}! Finde heraus, welcher Squid Game-Charakter du bist: ${window.location.href}`
      );
      alert("Link zum Teilen in die Zwischenablage kopiert!");
    }
  };

  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl border border-pink-300 border-opacity-30 max-w-2xl mx-auto overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Ergebnisbereich mit Gradient-Hintergrund */}
      <div className={`bg-gradient-to-br ${result.color} p-8`}>
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Du bist...
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Charakterbild (Platzhalter) */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-black bg-opacity-30 mb-4 md:mb-0 md:mr-6 flex items-center justify-center overflow-hidden">
            {/* Platzhalter für Charakterbild */}
            <span className="text-6xl text-white">#</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {result.name}
            </h3>
            <div className="h-1 w-20 bg-white mb-4"></div>
            <p className="text-white text-opacity-90">{result.description}</p>
          </div>
        </div>
      </div>

      {/* Aktionsbereich */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium shadow-lg transition-colors"
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={18} />
            Ergebnis teilen
          </motion.button>

          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full font-medium transition-colors"
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={18} />
            Test wiederholen
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
