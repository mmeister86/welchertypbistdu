"use client";

import { RotateCcw } from "lucide-react";
import { CharacterResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ui/share-buttons";

interface ResultCardProps {
  result: CharacterResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  // Wir definieren die Traits für jeden Charakter, da sie nicht im ursprünglichen Typ enthalten sind
  const characterTraits: Record<string, string[]> = {
    "gi-hun": ["Mitfühlend", "Optimistisch", "Glücksspieler"],
    "sae-byeok": ["Zäh", "Überlebenskünstler", "Fokussiert"],
    "sang-woo": ["Intelligent", "Strategisch", "Ehrgeizig"],
    "il-nam": ["Weise", "Rätselhaft", "Erfahren"],
    "deok-su": ["Brutal", "Dominant", "Furchtlos"],
    ali: ["Loyal", "Gutherzig", "Vertrauensvoll"],
    "mi-nyeo": ["Unberechenbar", "Durchsetzungsfähig", "Anpassungsfähig"],
    "ji-yeong": ["Pragmatisch", "Aufrichtig", "Selbstlos"],
    "jun-ho": ["Entschlossen", "Hartnäckig", "Gerecht"],
    "front-man": ["Diszipliniert", "Mysteriös", "Autoritär"],
  };

  // Hole die Traits für den aktuellen Charakter
  const traits = characterTraits[result.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-black rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border border-pink-500"
    >
      <div className="p-6 text-center bg-pink-500 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Dein Ergebnis</h2>
        <p className="mb-6">Basierend auf deinen Antworten bist du...</p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg overflow-hidden -mt-6">
          <div className="w-full md:w-1/3 relative h-64 md:h-full">
            <Image
              src={result.image || "/placeholder.svg"}
              alt={result.name}
              width={300}
              height={300}
              className="object-cover w-full h-full"
              onError={(e) => {
                // Fallback zur Platzhalter-Bild nur wenn kein Bild gefunden wurde
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {result.name}
            </h3>
            <p className="text-gray-300 mb-6">{result.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {traits.map((trait: string, index: number) => (
                <span
                  key={index}
                  className="inline-block bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <ShareButtons
                  url={window.location.href}
                  title={`Mein Squid Game Test: Ich bin ${result.name}! Finde heraus, welcher Squid Game Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-pink-500 hover:text-pink-400 hover:bg-gray-800"
                />
              </div>

              <button
                onClick={onRestart}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <RotateCcw size={16} />
                Test wiederholen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-300 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charakteren aus der
          beliebten Netflix-Serie Squid Game. Die Fragen wurden entwickelt, um
          deine Persönlichkeit und Entscheidungsfindung mit denen der Charaktere
          aus der Show zu vergleichen.
        </p>
        <p className="text-gray-300">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
