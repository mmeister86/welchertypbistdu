"use client";

import type { CharacterResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ui/share-buttons";

interface ResultCardProps {
  result: CharacterResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  // Wir definieren die Traits für jeden Charakter, wenn sie nicht im Typ enthalten sind
  const getCharacterTraits = (show: string): string[] => {
    switch (show) {
      case "Friends":
        return ["Witzig", "Loyal", "Sympathisch"];
      case "Breaking Bad":
        return ["Strategisch", "Risikobereit", "Entschlossen"];
      case "The Office":
        return ["Humorvoll", "Unkonventionell", "Kreativ"];
      case "Stranger Things":
        return ["Mutig", "Neugierig", "Loyal"];
      case "Game of Thrones":
        return ["Strategisch", "Überlebenskünstler", "Hartnäckig"];
      default:
        return ["Anpassungsfähig", "Charakterstark", "Einzigartig"];
    }
  };

  // Hole die Traits für den aktuellen Charakter
  const traits = result.show ? getCharacterTraits(result.show) : [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border-2 border-indigo-300"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white mb-2">{result.show}</p>
        <p className="text-white mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-indigo-50 rounded-lg overflow-hidden -mt-6 border border-indigo-200">
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
            <h3 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4">
              {result.name}
            </h3>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {traits.map((trait, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                {/* Neue ShareButtons-Komponente */}
                <ShareButtons
                  url={window.location.href}
                  title={`Ich bin ${result.name} aus ${result.show}! Finde heraus, welcher TV-Serien Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50"
                />
              </div>

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

      <div className="bg-indigo-50 p-6">
        <h4 className="text-lg font-semibold text-indigo-900 mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-700 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften der
          beliebtesten TV-Serien Charaktere. Die Fragen wurden entwickelt, um
          deine Persönlichkeitsmerkmale mit denen der Charaktere aus
          verschiedenen TV-Serien zu vergleichen.
        </p>
        <p className="text-gray-700">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
