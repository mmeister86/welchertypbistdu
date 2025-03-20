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
        title: "Mein TV-Serienfiguren Persönlichkeitstest Ergebnis",
        text: `Ich bin ${result.name}! Finde heraus, welcher TV-Serienfigur du am meisten ähnelst.`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(
        `Ich bin ${result.name}! Finde heraus, welcher TV-Serienfigur du am meisten ähnelst: ${window.location.href}`,
      )
      alert("Link in die Zwischenablage kopiert!")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border border-purple-500/30"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Dein Ergebnis</h2>
        <p className="text-white/80 mb-2">{result.show}</p>
        <p className="text-white/80 mb-6">Basierend auf deinen Antworten ähnelst du am meisten...</p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-black/30 rounded-lg overflow-hidden -mt-6">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <Image src={result.image || "/placeholder.svg"} alt={result.name} fill className="object-cover" />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">{result.name}</h3>
            <p className="text-gray-300 mb-6">{result.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg transition-colors hover:from-purple-700 hover:to-pink-700"
              >
                <Share2 size={18} />
                Teilen
              </button>

              <button
                onClick={onRestart}
                className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Test wiederholen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/30 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Über diesen Test</h4>
        <p className="text-gray-300 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften beliebter TV-Serienfiguren. Die Fragen
          wurden entwickelt, um deine Persönlichkeitsmerkmale mit denen der Charaktere aus verschiedenen Serien zu
          vergleichen.
        </p>
        <p className="text-gray-300">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors hover:from-purple-700 hover:to-pink-700"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

