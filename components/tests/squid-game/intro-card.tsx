"use client";

import { motion } from "framer-motion";

// Komponente für die Einführungskarte des Tests
export function IntroCard({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-pink-300 border-opacity-30 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Welcher Squid Game-Charakter bist du?
      </h2>

      <div className="text-gray-200 space-y-4 mb-8">
        <p>
          Die Netflix-Serie Squid Game hat die Welt im Sturm erobert. Mit ihren
          unvergesslichen Charakteren und moralischen Dilemmata hat sie uns alle
          zum Nachdenken gebracht.
        </p>
        <p>
          Aber welchem der Charaktere ähnelst du am meisten? Bist du loyal und
          gutherzig wie Gi-hun, strategisch und berechnend wie Sang-woo oder
          unabhängig und resilient wie Sae-byeok?
        </p>
        <p>
          Beantworte 10 Fragen und finde heraus, welcher Squid Game-Charakter
          deiner Persönlichkeit am nächsten kommt. Keine Sorge - dieser Test ist
          deutlich weniger tödlich als die echten Spiele!
        </p>
      </div>

      <div className="flex justify-center">
        <motion.button
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Test starten
        </motion.button>
      </div>
    </motion.div>
  );
}
