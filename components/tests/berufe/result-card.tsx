"use client"

import type { CareerResult } from "./types"
import { motion } from "framer-motion"
import Image from "next/image"
import { Share2, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

interface ResultCardProps {
  result: CareerResult
  onRestart: () => void
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mein Berufs-Persönlichkeitstest Ergebnis",
        text: `Laut dem Test passt der Beruf ${result.name} am besten zu mir! Finde heraus, welcher Beruf zu dir passt.`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(
        `Laut dem Test passt der Beruf ${result.name} am besten zu mir! Finde heraus, welcher Beruf zu dir passt: ${window.location.href}`,
      )
      alert("Link in die Zwischenablage kopiert!")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto border-2 border-blue-200"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Dein Ergebnis</h2>
        <p className="text-white/90 mb-6">Basierend auf deinen Antworten passt dieser Beruf am besten zu dir:</p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg overflow-hidden -mt-6 border-2 border-blue-100">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <Image
              src={result.image || "/placeholder.svg?height=300&width=300"}
              alt={result.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2">{result.name}</h3>
            <p className="text-sm text-blue-600 mb-4">{result.fullName}</p>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {result.traits.map((trait, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>

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

      <div className="p-6 bg-blue-50">
        <h4 className="text-lg font-semibold text-blue-800 mb-4">Typische Aufgaben:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
          {result.dailyTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
              <CheckCircle2 size={20} className="mr-2" /> Vorteile
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {result.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-red-700 mb-2 flex items-center">
              <XCircle size={20} className="mr-2" /> Herausforderungen
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {result.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg text-blue-800 mb-6">
          <p className="font-semibold">Wichtiger Hinweis:</p>
          <p>
            Dieser Test dient nur zur Orientierung und zum Spaß. Die Berufswahl sollte auf gründlicher Recherche,
            persönlichen Interessen und Gesprächen mit Berufsberatern basieren.
          </p>
        </div>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

