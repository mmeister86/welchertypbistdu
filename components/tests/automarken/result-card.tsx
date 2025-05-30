"use client";

import type { TestResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Share2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ResultCardProps {
  result: TestResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Welche Automarke passt zu mir?",
        text: `Laut dem Test passt ${result.brand} am besten zu meiner Persönlichkeit! Finde heraus, welche Automarke zu dir passt.`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(
        `Laut dem Test passt ${result.brand} am besten zu meiner Persönlichkeit! Finde heraus, welche Automarke zu dir passt: ${window.location.href}`
      );
      alert("Link in die Zwischenablage kopiert!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto border-2 border-blue-200"
    >
      <div className="p-6 text-center bg-blue-600">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white/90 mb-6">
          Diese Automarke passt am besten zu deiner Persönlichkeit:
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg overflow-hidden -mt-6 border-2 border-blue-100">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <Image
              src={`/images/automarken/${result.brand.toLowerCase()}.jpg`}
              alt={result.brand}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2">
              {result.brand}
            </h3>
            <p className="text-sm text-blue-600 mb-4">
              Übereinstimmung: {Math.round(result.matchPercentage)}%
            </p>
            <p className="text-gray-700 mb-6">{result.profile.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {result.profile.traits.map((trait, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800">
                <span className="font-semibold">Dein Spirit Animal:</span>{" "}
                {result.profile.animal}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
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

      <div className="p-6 bg-blue-50">
        <h4 className="text-lg font-semibold text-blue-800 mb-4">
          Alternative Marken die auch zu dir passen könnten:
        </h4>
        <div className="space-y-3 mb-6">
          {result.alternativeBrands.map((alt, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg border border-blue-100"
            >
              <span className="font-medium text-blue-800">{alt.brand}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-blue-600">
                  {Math.round((alt.score / result.score) * 100)}%
                  Übereinstimmung
                </span>
                <ArrowRight size={16} className="text-blue-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-100 p-4 rounded-lg text-blue-800 mb-6">
          <p className="font-semibold">Wichtiger Hinweis:</p>
          <p>
            Dieser Test dient nur zur Orientierung und zum Spaß. Die Wahl eines
            Autos sollte auf praktischen Bedürfnissen, Budget und gründlicher
            Recherche basieren.
          </p>
        </div>

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
