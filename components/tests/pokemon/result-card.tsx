"use client";

import type { PokemonResult } from "./types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ui/share-buttons";

interface ResultCardProps {
  result: PokemonResult;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  // Helfer-Funktion, um den Typ als Array darzustellen (für mehrere Typen)
  const getTypes = (typeString: string): string[] => {
    return typeString.split("/").map((t) => t.trim());
  };

  // Traits für verschiedene Pokémon definieren
  const getPokemonTraits = (pokemonId: string): string[] => {
    const traits: Record<string, string[]> = {
      pikachu: ["Schnell", "Elektrisierend", "Loyal"],
      relaxo: ["Entspannt", "Stark", "Gemütlich"],
      bisasam: ["Pflanzenkraft", "Ausgeglichen", "Freundlich"],
      glumanda: ["Feurig", "Temperamentvoll", "Mutig"],
      mew: ["Mysteriös", "Verspielt", "Selten"],
      evoli: ["Anpassungsfähig", "Vielseitig", "Liebenswert"],
      glurak: ["Mächtig", "Stolz", "Feurig"],
      mewtu: ["Intelligent", "Psionisch", "Tiefgründig"],
      gengar: ["Geisterhaft", "Verspielt", "Listig"],
      schiggy: ["Wasserliebend", "Gesellig", "Geschickt"],
      arkani: ["Majestätisch", "Treu", "Tapfer"],
      arceus: ["Göttlich", "Weise", "Allmächtig"],
      dragoran: ["Sanftmütig", "Beschützend", "Drachenkraft"],
      enton: ["Verwirrt", "Unterschätzt", "Wässrig"],
      galoppa: ["Elegant", "Schnell", "Feurig"],
    };
    return traits[pokemonId] || ["Einzigartig", "Besonders", "Kraftvoll"];
  };

  // Hole die Traits für das aktuelle Pokémon
  const traits = getPokemonTraits(result.id);
  // Hole die Typen als Array
  const types = getTypes(result.type);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto border-2 border-red-400"
    >
      <div className={`p-6 text-center ${result.color}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Dein Ergebnis
        </h2>
        <p className="text-white mb-2">Typ: {types.join(" / ")}</p>
        <p className="text-white mb-6">
          Basierend auf deinen Antworten bist du...
        </p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row items-center bg-red-50 rounded-lg overflow-hidden -mt-6 border-2 border-red-200">
          <div className="w-full md:w-1/3 relative h-64 md:h-full">
            <Image
              src={result.image || "/placeholder.svg"}
              alt={result.name}
              width={300}
              height={300}
              className="object-contain p-4 w-full h-full"
              onError={(e) => {
                // Fallback zur Platzhalter-Bild nur wenn kein Bild gefunden wurde
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-red-900 mb-4">
              {result.name}
            </h3>
            <p className="text-gray-700 mb-6">{result.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {traits.map((trait: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center bg-red-100 px-3 py-2 rounded-lg"
                >
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-red-900">{trait}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <ShareButtons
                  url={`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/tests/pokemon/ergebnis?pokemon=${result.id}`}
                  title={`Ich bin ${result.name} (Typ: ${result.type})! Finde heraus, welches Pokémon du bist.`}
                  className="mb-2 sm:mb-0"
                  color="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
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

      <div className="bg-red-50 p-6">
        <h4 className="text-lg font-semibold text-red-900 mb-4">
          Über diesen Test
        </h4>
        <p className="text-gray-700 mb-4">
          Dieser Persönlichkeitstest basiert auf den Eigenschaften verschiedener
          Pokémon. Die Fragen wurden entwickelt, um deine
          Persönlichkeitsmerkmale mit denen dieser beliebten Kreaturen zu
          vergleichen.
        </p>
        <p className="text-gray-700">
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
