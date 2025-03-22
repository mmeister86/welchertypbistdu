"use client"

import { useRouter } from "next/navigation"
import { ResultCard } from "@/components/tests/youtuber/result-card"
import { youtuberResults } from "@/components/tests/youtuber/test-data"
import type { Youtuber, YoutuberResult } from "@/components/tests/youtuber/types"
import { motion } from "framer-motion"

interface ResultContentProps {
  youtuber: string
}

export function ResultContent({ youtuber }: ResultContentProps) {
  const router = useRouter()

  // Standard-YouTuber festlegen für den Fall, dass kein gültiger Wert übergeben wurde
  const validYoutuber = (youtuber as Youtuber) in youtuberResults ? (youtuber as Youtuber) : "pewDiePie"

  // Ergebnis-Daten abrufen
  const result = youtuberResults[validYoutuber] as YoutuberResult

  // Funktion zum Neustarten des Tests
  const handleRestart = () => {
    // Zurück zur Testseite navigieren
    router.push("/tests/youtube")
  }

  // Falls kein gültiges Ergebnis gefunden wurde
  if (!result) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center p-8 bg-black bg-opacity-75 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-600"
      >
        <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Etwas ist schiefgelaufen.</h2>
        <p className="mb-6 text-white">Wir konnten dein Ergebnis nicht finden. Bitte versuche den Test erneut.</p>
        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors border border-red-500"
        >
          Test wiederholen
        </button>
      </motion.div>
    )
  }

  // Valides Ergebnis anzeigen mit der ResultCard-Komponente
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <ResultCard
          result={result}
          onRestart={handleRestart}
        />
      </motion.div>
    </div>
  )
}
