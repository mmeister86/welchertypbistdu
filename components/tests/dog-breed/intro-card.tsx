"use client";

import { motion } from "framer-motion";
import { Dog } from "lucide-react";

interface IntroCardProps {
  onStart: () => void;
}

export function IntroCard({ onStart }: IntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto border-2 border-amber-300"
    >
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Dog size={48} className="text-amber-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
          Welche Hunderasse passt zu dir?
        </h1>
        <p className="text-amber-700 text-lg">
          Ein Persönlichkeitstest für Hundeliebhaber
        </p>
      </div>

      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          Du überlegst, dir einen Hund anzuschaffen, bist dir aber nicht sicher,
          welche Rasse am besten zu dir passt? Dieser Test hilft dir, eine
          Hunderasse zu finden, die zu deinem Lebensstil, deiner Wohnsituation
          und deinen Vorlieben passt.
        </p>
        <p>
          Beantworte 10 einfache Fragen zu deinem Alltag, deinen Aktivitäten und
          Vorlieben, und wir schlagen dir eine Hunderasse vor, die gut zu dir
          passen könnte.
        </p>
        <p>
          Denk daran: Jeder Hund ist ein Individuum mit eigenem Charakter.
          Dieser Test gibt dir eine erste Orientierung, ersetzt aber nicht die
          gründliche Recherche und den persönlichen Kontakt mit Hunden der
          jeweiligen Rasse.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg flex items-center"
        >
          Test starten
          <Dog size={20} className="ml-2" />
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und gibt eine grobe Orientierung.
          Die Entscheidung für einen Hund sollte wohlüberlegt sein und auf
          umfassender Information basieren.
        </p>
      </div>
    </motion.div>
  );
}
