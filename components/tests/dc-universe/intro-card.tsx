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
      className="bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-lg max-w-3xl mx-auto border border-blue-600"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 mb-4">
          Welcher DC-Charakter bist du?
        </h1>
        <p className="text-gray-300 text-lg">Ein Persönlichkeitstest für Fans des DC Extended Universe</p>
      </div>

      <div className="space-y-4 text-gray-300 mb-8">
        <p>
          Das DC Extended Universe ist voller faszinierender Charaktere mit einzigartigen Persönlichkeiten. Von
          Supermans Idealismus bis zu Batmans Entschlossenheit, von Wonder Womans Stärke bis zum Jokers Chaos – jeder
          Charakter verkörpert bestimmte Eigenschaften, die uns ansprechen.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welchem DC-Charakter du am
          ähnlichsten bist. Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten.
        </p>
        <p>
          Bist du bereit, deine Reise durch das DC-Universum zu beginnen und zu entdecken, welcher Superheld (oder
          Schurke) in dir steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen der DC-Charaktere aus dem
          DCEU.
        </p>
      </div>
    </motion.div>
  )
}
