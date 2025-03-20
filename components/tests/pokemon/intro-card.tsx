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
      className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-3xl mx-auto border-4 border-yellow-400"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Welches Pokémon bin ich?</h1>
        <p className="text-blue-800 text-lg">Der ultimative Persönlichkeitstest für Pokémon-Fans</p>
      </div>

      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          Hast du dich jemals gefragt, welches Pokémon deine Persönlichkeit am besten widerspiegelt? Bist du eher der
          energiegeladene Typ wie Pikachu oder doch gemütlicher wie Relaxo?
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welches Pokémon am besten zu deiner
          Persönlichkeit passt. Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten.
        </p>
        <p>
          Bist du bereit, deine Reise durch die Welt der Pokémon zu beginnen und zu entdecken, welches Pokémon in dir
          steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg border-2 border-yellow-400"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen beliebter Pokémon.</p>
      </div>
    </motion.div>
  )
}

