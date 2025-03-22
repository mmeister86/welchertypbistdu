"use client";

import type { DCCharacterResult, Trait } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ui/share-buttons";

interface ResultCardProps {
  result: DCCharacterResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const traitLabels: Record<Trait, string> = {
    courage: "Mut",
    intelligence: "Intelligenz",
    humor: "Humor",
    morality: "Moral",
    leadership: "Führungsstärke",
    chaos: "Chaos",
    justice: "Gerechtigkeit",
  };

  const getTraitColor = (value: number) => {
    if (value >= 8) return "bg-green-500";
    if (value >= 5) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-900 bg-opacity-90 rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border border-blue-600"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white mb-2">
          {result.type === "hero" ? "Superheld" : "Schurke"}
        </p>
        <p className="text-white mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden -mt-6">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <Image
              src={result.image || "/placeholder.svg"}
              alt={result.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {result.name}
            </h3>
            <p className="text-gray-300 mb-6">{result.description}</p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {Object.entries(result.traits).map(([trait, value]) => (
                <div key={trait} className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full ${getTraitColor(
                      value
                    )} mr-2`}
                  ></div>
                  <span className="text-gray-300">
                    {traitLabels[trait as Trait]}:{" "}
                  </span>
                  <span className="text-white ml-1">{value}/10</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <ShareButtons
                  url={`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/tests/dc-universe/ergebnis?character=${result.id}`}
                  title={`Ich bin ${result.name} aus dem DC Universe! Finde heraus, welcher DC-Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-white hover:text-gray-300 hover:bg-gray-700"
                />
              </div>

              <button
                onClick={onRestart}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Test wiederholen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-300 mb-4">
          Dieser Persönlichkeitstest basiert auf den Charaktereigenschaften der
          beliebtesten DC-Helden und -Schurken. Die Fragen wurden entwickelt, um
          deine Persönlichkeitsmerkmale mit denen der Charaktere aus dem DC
          Extended Universe zu vergleichen.
        </p>
        <p className="text-gray-300">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

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
  );
}
