"use client";

import type { YoutuberResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ui/share-buttons";

interface ResultCardProps {
  result: YoutuberResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  // Wir definieren die Traits für jeden YouTuber
  const getYoutuberTraits = (youtuber: string): string[] => {
    switch (youtuber) {
      case "Bibis Beautypalace":
        return ["Kreativ", "Authentisch", "Enthusiastisch"];
      case "Gronkh":
        return ["Humorvoll", "Authentisch", "Leidenschaftlich"];
      case "PewDiePie":
        return ["Energiegeladen", "Direkt", "Rebellisch"];
      case "Emma Chamberlain":
        return ["Selbstironisch", "Ehrlich", "Trendsetzend"];
      case "Casey Neistat":
        return ["Kreativ", "Abenteuerlustig", "Ehrgeizig"];
      case "Markiplier":
        return ["Ausdrucksstark", "Herzlich", "Unterhaltsam"];
      case "James Charles":
        return ["Selbstbewusst", "Kreativ", "Perfektionist"];
      default:
        return ["Unterhaltsam", "Einzigartig", "Talentiert"];
    }
  };

  // Wir bestimmen die Standard-Farbe, falls keine angegeben ist
  const bgColor = result.color || "bg-red-600";

  // Hole die Traits für den aktuellen YouTuber
  const traits = getYoutuberTraits(result.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-black bg-opacity-75 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto border-2 border-red-600"
    >
      <div className="p-6 text-center bg-red-700">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-black bg-opacity-80 rounded-lg overflow-hidden -mt-6 border border-red-500">
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
            <h3 className="text-2xl md:text-4xl font-bold text-red-500 mb-4">
              {result.name}
            </h3>
            <p className="text-white mb-6">{result.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {traits.map((trait, index) => (
                <span
                  key={index}
                  className="bg-red-900 text-white px-3 py-1 rounded-full border border-red-600"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex items-center">
                <ShareButtons
                  url={`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/tests/youtuber/ergebnis?youtuber=${result.id}`}
                  title={`Ich bin ${result.name}! Finde heraus, welcher YouTuber du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-red-500 hover:text-red-700"
                />
              </div>

              <button
                onClick={onRestart}
                className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-lg transition-colors border border-red-500"
              >
                Test wiederholen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-80 p-6 border-t-2 border-red-600">
        <h4 className="text-lg font-semibold text-red-500 mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-200 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften der
          beliebtesten YouTube-Stars. Die Fragen wurden entwickelt, um
          deine Persönlichkeitsmerkmale mit denen der YouTuber aus
          verschiedenen Content-Kategorien zu vergleichen.
        </p>
        <p className="text-gray-200">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors border border-red-500"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
