"use client"

import { motion } from "framer-motion"

interface IntroCardProps {
  onStart: () => void
}

export function IntroCard({ onStart }: IntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-lg max-w-3xl mx-auto border border-gray-700"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
          Welcher Game of Thrones Charakter bist du?
        </h1>
        <p className="text-gray-300 text-lg">Ein Persönlichkeitstest für Fans von Westeros</p>
      </div>

      <div className="space-y-4 text-gray-300 mb-8">
        <p>
          Die Welt von Game of Thrones ist voller faszinierender Charaktere mit einzigartigen Persönlichkeiten. Von Ned
          Starks unerschütterlicher Ehre bis zu Cersei Lannisters Machtstreben, von Tyrion Lannisters scharfem Verstand
          bis zu Daenerys Targaryens Entschlossenheit – jeder Charakter verkörpert bestimmte Eigenschaften, die uns
          ansprechen.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welchem Game of Thrones Charakter du
          am ähnlichsten bist. Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten.
        </p>
        <p>
          Bist du bereit, deine Reise durch die Sieben Königslande zu beginnen und zu entdecken, welcher Bewohner von
          Westeros in dir steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen der Game of Thrones
          Charaktere.
        </p>
      </div>
    </motion.div>
  )
}

