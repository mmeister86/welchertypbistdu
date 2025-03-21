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
  const characterTraits: Record<string, string[]> = {
    spongebob: ["Optimistisch", "Freundlich", "Energiegeladen"],
    patrick: ["Einfach gestrickt", "Loyal", "Unbeschwert"],
    squidward: ["Künstlerisch", "Zynisch", "Anspruchsvoll"],
    krabs: ["Geschäftstüchtig", "Sparsam", "Durchsetzungsfähig"],
    sandy: ["Sportlich", "Intelligent", "Abenteuerlustig"],
    plankton: ["Ehrgeizig", "Clever", "Hartnäckig"],
    gary: ["Treu", "Ruhig", "Genügsam"],
    puff: ["Streng", "Ordnungsliebend", "Geduldig"],
    pearl: ["Modebewusst", "Temperamentvoll", "Gesellig"],
    karen: ["Logisch", "Rational", "Unterstützend"],
  };

  const traits = characterTraits[result.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border-4 border-white"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-gray-700 mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg overflow-hidden -mt-6 border-2 border-blue-200">
          <div className="w-full md:w-1/3 relative h-64 md:h-full">
            <Image
              src={result.image}
              alt={result.name}
              width={300}
              height={300}
              className="object-contain p-2 w-full h-full"
              onError={(e) => {
                // Fallback zur Platzhalter-Bild nur wenn kein Bild gefunden wurde
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
              {result.name}
            </h3>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {traits.map((trait: string, index: number) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <ShareButtons
                  url={`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/tests/spongebob/ergebnis?character=${result.id}`}
                  title={`Ich bin ${result.name} aus SpongeBob! Finde heraus, welcher SpongeBob-Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
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

      <div className="bg-blue-50 p-6">
        <h4 className="text-lg font-semibold text-blue-900 mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-700 mb-4">
          Dieser Test zeigt dir, welchem SpongeBob Schwammkopf Charakter du am
          ähnlichsten bist. Die Fragen wurden basierend auf den
          Persönlichkeitsmerkmalen und Verhaltensweisen der beliebten Charaktere
          aus Bikini Bottom entwickelt.
        </p>
        <p className="text-gray-700">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
