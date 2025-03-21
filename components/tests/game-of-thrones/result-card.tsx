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
  // Wir definieren die Traits für jeden Charakter, da sie nicht im ursprünglichen Typ enthalten sind
  const getTraitsByHouse = (house: string): string[] => {
    switch (house) {
      case "Stark":
        return ["Ehrenhaft", "Loyal", "Standhaft"];
      case "Lannister":
        return ["Strategisch", "Wohlhabend", "Machtorientiert"];
      case "Targaryen":
        return ["Entschlossen", "Charismatisch", "Temperamentvoll"];
      case "Baratheon":
        return ["Willensstark", "Kriegerisch", "Stolz"];
      case "Tyrell":
        return ["Diplomatisch", "Einfallsreich", "Ambitioniert"];
      case "Martell":
        return ["Leidenschaftlich", "Rachsüchtig", "Unabhängig"];
      case "Greyjoy":
        return ["Zäh", "Selbstständig", "Furchtlos"];
      default:
        return ["Anpassungsfähig", "Überlebensorientiert", "Klug"];
    }
  };

  // Hole die Traits basierend auf dem Haus des Charakters
  const traits = result.house ? getTraitsByHouse(result.house) : [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border border-gray-600"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white mb-2">Haus {result.house}</p>
        <p className="text-white mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden -mt-6 border border-gray-300">
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
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {result.name}
            </h3>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {traits.map((trait, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
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
                  }/tests/game-of-thrones/ergebnis?character=${result.id}`}
                  title={`Ich bin ${result.name} aus Game of Thrones! Finde heraus, welcher GoT-Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-white hover:text-gray-300 hover:bg-gray-700"
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

      <div className="bg-gray-100 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-700 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften der
          beliebtesten Game of Thrones Charaktere. Die Fragen wurden entwickelt,
          um deine Persönlichkeitsmerkmale mit denen der Charaktere aus dem
          sieben Königreichen zu vergleichen.
        </p>
        <p className="text-gray-700">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
