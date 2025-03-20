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
      className="bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-lg max-w-3xl mx-auto border border-red-600"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 mb-4">
          Welcher Marvel-Held bist du?
        </h1>
        <p className="text-gray-300 text-lg">Ein Persönlichkeitstest für Fans des Marvel Cinematic Universe</p>
      </div>

      <div className="space-y-4 text-gray-300 mb-8">
        <p>
          Das Marvel Cinematic Universe ist voller faszinierender Charaktere mit einzigartigen Persönlichkeiten. Von
          Tony Starks Genialität bis zu Steve Rogers' Integrität, von Thors Stärke bis zu Lokis List – jeder Charakter
          verkörpert bestimmte Eigenschaften, die uns ansprechen.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welchem Marvel-Charakter du am
          ähnlichsten bist. Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten.
        </p>
        <p>
          Bist du bereit, deine Reise durch das Marvel-Universum zu beginnen und zu entdecken, welcher Superheld (oder
          Schurke) in dir steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen der Marvel-Charaktere aus dem
          MCU.
        </p>
      </div>
    </motion.div>
  )
}

