"use client";

import type { DogBreedResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Share2, Activity, Scissors, Heart } from "lucide-react";
import Link from "next/link";

interface ResultCardProps {
  result: DogBreedResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mein Hunderassen-Test Ergebnis",
        text: `Laut dem Test passt ein ${result.name} am besten zu mir! Finde heraus, welche Hunderasse zu dir passt.`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(
        `Laut dem Test passt ein ${result.name} am besten zu mir! Finde heraus, welche Hunderasse zu dir passt: ${window.location.href}`
      );
      alert("Link in die Zwischenablage kopiert!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border-2 border-amber-300"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-foreground mb-6">
          Basierend auf deinen Antworten passt am besten zu dir...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-amber-50 rounded-lg overflow-hidden -mt-6 border-2 border-amber-200">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <Image
              src={result.image || "/placeholder.svg?height=300&width=300"}
              alt={result.name}
              fill
              className="object-cover p-2"
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 text-foreground">
              {result.name}
            </h3>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Activity
                  size={20}
                  className="text-amber-600 mr-2 text-foreground"
                />
                <span className="text-sm text-foreground">
                  {result.activityLevel}
                </span>
              </div>
              <div className="flex items-center">
                <Scissors
                  size={20}
                  className="text-amber-600 mr-2 text-foreground"
                />
                <span className="text-sm text-foreground">
                  {result.groomingNeeds}
                </span>
              </div>
              <div className="flex items-center">
                <Heart
                  size={20}
                  className="text-amber-600 mr-2 text-foreground"
                />
                <span className="text-sm text-foreground">{result.size}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {result.goodWith.map((trait, index) => (
                <span
                  key={index}
                  className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors"
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

      <div className="bg-amber-50 p-6">
        <h4 className="text-lg font-semibold text-amber-900 mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-700 mb-4">
          Dieser Test gibt dir eine Idee, welche Hunderasse zu deinem Lebensstil
          und deinen Vorlieben passen könnte. Bedenke jedoch, dass jeder Hund
          ein Individuum ist und die Persönlichkeit innerhalb einer Rasse
          variieren kann.
        </p>
        <p className="text-gray-700 mb-4">
          Bevor du dich für einen Hund entscheidest, informiere dich gründlich
          über die Rasse, sprich mit Züchtern oder Tierheimen und überlege, ob
          du die Zeit, Energie und Ressourcen hast, die ein Hund benötigt.
        </p>
        <p className="text-gray-700">
          Möchtest du weitere Persönlichkeitstests ausprobieren? Entdecke unsere
          anderen Tests!
        </p>

        <div className="mt-6">
          <Link
            href="/tests"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Weitere Tests entdecken
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
