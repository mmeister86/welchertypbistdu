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

// Erweitere die CharacterResult-Daten mit notwendigen Informationen
interface EnhancedCharacterData {
  side: string;
  color: string;
  traits: string[];
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  // Definiere zusätzliche Daten für jeden Charakter (side, color, traits)
  const characterData: Record<string, EnhancedCharacterData> = {
    luke: {
      side: "Die helle Seite",
      color: "bg-blue-600",
      traits: ["Mutig", "Idealistisch", "Die Macht nutzend"],
    },
    anakin: {
      side: "Die helle Seite / Dunkle Seite",
      color: "bg-purple-600",
      traits: ["Temperamentvoll", "Talentiert", "Impulsiv"],
    },
    vader: {
      side: "Die dunkle Seite",
      color: "bg-red-600",
      traits: ["Mächtig", "Diszipliniert", "Unnachgiebig"],
    },
    palpatine: {
      side: "Die dunkle Seite",
      color: "bg-red-800",
      traits: ["Manipulativ", "Machtgierig", "Weitsichtig"],
    },
    leia: {
      side: "Die helle Seite",
      color: "bg-blue-500",
      traits: ["Führungsstark", "Entschlossen", "Diplomatisch"],
    },
    han: {
      side: "Die helle Seite",
      color: "bg-yellow-600",
      traits: ["Unabhängig", "Charmant", "Einfallsreich"],
    },
    chewbacca: {
      side: "Die helle Seite",
      color: "bg-yellow-700",
      traits: ["Loyal", "Stark", "Warmherzig"],
    },
    yoda: {
      side: "Die helle Seite",
      color: "bg-green-600",
      traits: ["Weise", "Geduldig", "Meister der Macht"],
    },
    grogu: {
      side: "Die helle Seite",
      color: "bg-green-500",
      traits: ["Sensibel", "Neugierig", "Mächtig"],
    },
    mandalorian: {
      side: "Neutral",
      color: "bg-gray-500",
      traits: ["Ehrenhaft", "Beschützer", "Entschlossen"],
    },
    maul: {
      side: "Die dunkle Seite",
      color: "bg-red-700",
      traits: ["Rachsüchtig", "Ausdauernd", "Strategisch"],
    },
    obiwan: {
      side: "Die helle Seite",
      color: "bg-blue-700",
      traits: ["Gewissenhaft", "Loyal", "Meister des Lichtschwerts"],
    },
    padme: {
      side: "Die helle Seite",
      color: "bg-purple-500",
      traits: ["Diplomatisch", "Couragiert", "Führungsstark"],
    },
    rey: {
      side: "Die helle Seite",
      color: "bg-blue-400",
      traits: ["Selbstständig", "Hoffnungsvoll", "Anpassungsfähig"],
    },
  };

  // Hole die zusätzlichen Daten für den aktuellen Charakter
  const characterInfo = characterData[result.id] || {
    side: "Neutral",
    color: "bg-gray-600",
    traits: [],
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-black rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border border-yellow-400"
    >
      <div className={`p-6 text-center ${characterInfo.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white mb-2">{characterInfo.side}</p>
        <p className="text-white mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
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
              {characterInfo.traits.map((trait: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <ShareButtons
                  url={window.location.href}
                  title={`Ich bin ${result.name} aus Star Wars! Finde heraus, welcher Star Wars Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color={
                    characterInfo.side.includes("helle")
                      ? "text-blue-400 hover:text-blue-300 hover:bg-gray-800"
                      : "text-red-400 hover:text-red-300 hover:bg-gray-800"
                  }
                />
              </div>

              <button
                onClick={onRestart}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
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
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften der
          beliebtesten Star Wars Charaktere. Die Fragen wurden entwickelt, um
          deine Persönlichkeitsmerkmale mit denen der Charaktere aus der Star
          Wars Saga zu vergleichen.
        </p>
        <p className="text-gray-300">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
