"use client"

import type { CharacterResult } from "./types"
import { motion } from "framer-motion"
import Image from "next/image"
import { Share2 } from "lucide-react"
import Link from "next/link"

interface ResultCardProps {
  result: CharacterResult
  onRestart: () => void
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mein Spongebob Persönlichkeitstest Ergebnis",
        text: `Ich bin ${result.name}! Finde heraus, welcher Spongebob Charakter du bist.`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(
        `Ich bin ${result.name}! Finde heraus, welcher Spongebob Charakter du bist: ${window.location.href}`,
      )
      alert("Link in die Zwischenablage kopiert!")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Dein Ergebnis</h2>
        <p className="text-white mb-6">Basierend auf deinen Antworten bist du...</p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg overflow-hidden -mt-6">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <Image src={result.image || "/placeholder.svg"} alt={result.name} fill className="object-cover" />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4">{result.name}</h3>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <Share2 size={18} />
                Teilen
              </button>

              <button
                onClick={onRestart}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition-colors"
              >
                Test wiederholen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6">
        <h4 className="text-lg font-semibold text-blue-800 mb-4">Über diesen Test</h4>
        <p className="text-gray-700 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften der beliebtesten Spongebob Schwammkopf
          Figuren. Die Fragen wurden entwickelt, um deine Persönlichkeitsmerkmale mit denen der Charaktere aus Bikini
          Bottom zu vergleichen.
        </p>
        <p className="text-gray-700">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

