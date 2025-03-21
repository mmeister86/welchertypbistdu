"use client";

import type { MarvelCharacterResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ShareButtons } from "@/components/ui/share-buttons";

interface ResultCardProps {
  result: MarvelCharacterResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-900 bg-opacity-90 rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border border-red-600"
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
              {result.traits.map((trait, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full flex items-center"
                >
                  <CheckCircle2 size={16} className="mr-1 text-red-500" />{" "}
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <ShareButtons
                  url={`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/tests/marvel/ergebnis?character=${result.id}`}
                  title={`Ich bin ${result.name} aus dem Marvel Universum! Finde heraus, welcher Marvel-Charakter du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-white hover:text-gray-200 hover:bg-gray-800"
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
          beliebtesten Marvel-Helden und -Schurken. Die Fragen wurden
          entwickelt, um deine Persönlichkeitsmerkmale mit denen der Charaktere
          aus dem Marvel Cinematic Universe zu vergleichen.
        </p>
        <p className="text-gray-300">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
