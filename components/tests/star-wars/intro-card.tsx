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
      className="bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-lg max-w-3xl mx-auto backdrop-blur-sm"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Welcher Star Wars Charakter bist du?</h1>
        <p className="text-gray-300 text-lg">Ein Persönlichkeitstest für Fans der Galaxie</p>
      </div>

      <div className="space-y-4 text-gray-300 mb-8">
        <p>
          Das Star Wars Universum ist voller faszinierender Charaktere mit einzigartigen Persönlichkeiten. Von Luke
          Skywalkers Idealismus bis zu Darth Vaders Autorität, von Leias Führungsstärke bis zu Han Solos Abenteuerlust –
          jeder Charakter verkörpert bestimmte Eigenschaften, die uns ansprechen.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welchem Star Wars Charakter du am
          ähnlichsten bist. Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten.
        </p>
        <p>
          Bist du bereit, deine Reise durch die Galaxie zu beginnen und zu entdecken, welcher Star Wars Charakter in dir
          steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen der Star Wars Charaktere.</p>
      </div>
    </motion.div>
  )
}

