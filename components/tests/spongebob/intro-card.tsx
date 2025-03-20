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
      className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Welcher Spongebob Schwammkopf Charakter bist du?
        </h1>
        <p className="text-blue-800 text-lg">Ein Persönlichkeitstest für Fans von Bikini Bottom</p>
      </div>

      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          Die Unterwasserwelt von Bikini Bottom ist voller einzigartiger und liebenswerter Charaktere. Von SpongeBobs
          grenzenlosem Optimismus bis zu Thaddäus' künstlerischen Ambitionen, von Mr. Krabs' Liebe zum Geld bis zu
          Sandys wissenschaftlichem Eifer – jeder Charakter hat seine ganz eigene Persönlichkeit.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welchem Spongebob Schwammkopf
          Charakter du am ähnlichsten bist. Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten.
        </p>
        <p>
          Bist du bereit, in die Tiefen von Bikini Bottom einzutauchen und zu entdecken, welcher Unterwasserbewohner in
          dir steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen der Spongebob Schwammkopf
          Charaktere.
        </p>
      </div>
    </motion.div>
  )
}

