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
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-3xl mx-auto border border-purple-500/30"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Welcher TV-Serienfigur ähnelst du am meisten?
        </h1>
        <p className="text-gray-300 text-lg">Ein Persönlichkeitstest für Fans von TV-Serien</p>
      </div>

      <div className="space-y-4 text-gray-300 mb-8">
        <p>
          TV-Serien bieten uns eine faszinierende Vielfalt an Charakteren, mit denen wir lachen, weinen und uns
          identifizieren können. Diese Figuren werden oft zu einem festen Bestandteil unseres Lebens, und wir entwickeln
          starke Meinungen und Gefühle für sie.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welcher beliebten TV-Serienfigur du
          am ähnlichsten bist. Von den Freunden aus "Friends" über die Kollegen aus "The Office" bis hin zu den
          Charakteren aus "Game of Thrones" und "The Mandalorian" – finde heraus, welcher Charakter deine Persönlichkeit
          am besten widerspiegelt.
        </p>
        <p>
          Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten. Bist du bereit zu entdecken, welche
          TV-Serienfigur in dir steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen beliebter TV-Serienfiguren.
        </p>
      </div>
    </motion.div>
  )
}

