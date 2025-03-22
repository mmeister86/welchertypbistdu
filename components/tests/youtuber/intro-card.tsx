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
      className="bg-black bg-opacity-75 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-3xl mx-auto border-2 border-red-600"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
          Welcher YouTuber bist du?
        </h1>
        <p className="text-white text-lg">Ein Persönlichkeitstest für Fans von Content Creators</p>
      </div>

      <div className="space-y-4 text-white mb-8">
        <p>
          YouTube bietet uns eine faszinierende Vielfalt an Content Creators, mit denen wir lachen, lernen und uns
          identifizieren können. Diese YouTuber werden oft zu einem festen Bestandteil unseres Alltags, und wir entwickeln
          starke Meinungen und Gefühle für sie.
        </p>
        <p>
          Dieser Test besteht aus 10 Fragen, die dir helfen werden herauszufinden, welchem beliebten YouTuber du
          am ähnlichsten bist. Von Gaming-Profis wie Gronkh und PewDiePie über Beauty-Experten wie Bibi und James Charles
          bis hin zu unterhaltsamen Alltags-Vloggern wie Emma Chamberlain und Casey Neistat – finde heraus, welcher YouTuber
          deine Persönlichkeit am besten widerspiegelt.
        </p>
        <p>
          Beantworte die Fragen ehrlich, um das genaueste Ergebnis zu erhalten. Bist du bereit zu entdecken, welcher
          YouTube-Star in dir steckt?
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg transition-colors text-lg shadow-md border border-red-400"
        >
          Test starten
        </button>
      </div>

      <div className="mt-8 text-center text-red-300 text-sm">
        <p>
          Dieser Test dient der Unterhaltung und basiert auf den Persönlichkeitsmerkmalen beliebter YouTuber.
        </p>
      </div>
    </motion.div>
  )
}
