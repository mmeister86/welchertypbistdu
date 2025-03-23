"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

interface IntroCardProps {
  onStart: () => void;
}

export function IntroCard({ onStart }: IntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto border-2 border-blue-200"
    >
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Car size={60} className="text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Welche Automarke passt zu deiner Persönlichkeit?
        </h1>
        <p className="text-blue-700 text-lg">
          Finde heraus, welche der 20 beliebtesten Automarken am besten zu
          deinem Charakter passt
        </p>
      </div>

      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          Automarken sind weit mehr als nur Transportmittel - sie spiegeln oft
          unsere Persönlichkeit wider. Studien zeigen sogar überraschende
          Zusammenhänge zwischen Automarken und Charaktereigenschaften: Von der
          Intelligenz bis hin zu psychologischen Merkmalen gibt es faszinierende
          Korrelationen.
        </p>
        <p>
          Dieser humorvolle Persönlichkeitstest hilft dir herauszufinden, welche
          der 20 ausgewählten Automarken am besten zu dir passt. Beantworte die
          folgenden zehn Fragen ehrlich, und entdecke dein automobiles Alter
          Ego!
        </p>
        <p>
          Wusstest du schon? Studien zeigen, dass Skoda-Fahrer den höchsten
          durchschnittlichen IQ unter Autofahrern haben, während Fahrer goldener
          Autos angeblich die höchsten Psychopathie-Werte aufweisen!
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test basiert auf den 20 beliebtesten Automarken und dient der
          Unterhaltung. Die Korrelationen zwischen Persönlichkeitsmerkmalen und
          Automarkenpräferenzen wurden in verschiedenen Studien untersucht.
        </p>
      </div>
    </motion.div>
  );
}
