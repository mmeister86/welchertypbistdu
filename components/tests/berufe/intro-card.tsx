"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

interface IntroCardProps {
  onStart: () => void
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
          <Briefcase size={60} className="text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Welcher Beruf passt wirklich zu dir?</h1>
        <p className="text-blue-700 text-lg">
          Finde heraus, welcher der beliebtesten Berufe in Deutschland zu deiner Persönlichkeit passt
        </p>
      </div>

      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          Die Wahl des richtigen Berufs ist eine der wichtigsten Entscheidungen im Leben. Jeder Beruf hat seine eigenen
          Anforderungen, Vorteile und Herausforderungen, die zu unterschiedlichen Persönlichkeiten passen.
        </p>
        <p>
          Dieser Test hilft dir dabei, aus den 15 beliebtesten Berufen in Deutschland denjenigen zu finden, der am
          besten zu deinem Charakter, deinen Vorlieben und deiner Arbeitsweise passt. Beantworte die folgenden 10 Fragen
          ehrlich, um das beste Ergebnis zu erhalten.
        </p>
        <p>
          Denk daran: Dies ist ein unterhaltsamer Test, der dir eine erste Orientierung geben kann, aber keine
          professionelle Berufsberatung ersetzt.
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
          Dieser Test basiert auf den 15 beliebtesten Berufen in Deutschland und dient der Unterhaltung und ersten
          Orientierung.
        </p>
      </div>
    </motion.div>
  )
}

