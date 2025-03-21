"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ResultCard } from "@/components/tests/marvel/result-card";
import { marvelCharacterResults } from "@/components/tests/marvel/test-data";
import type { MarvelCharacter } from "@/components/tests/marvel/types";

interface ResultContentProps {
  character?: string;
}

export function ResultContent({
  character: characterParam,
}: ResultContentProps) {
  const router = useRouter();
  const [character, setCharacter] = useState<MarvelCharacter | null>(null);

  useEffect(() => {
    if (
      characterParam &&
      Object.keys(marvelCharacterResults).includes(characterParam)
    ) {
      setCharacter(characterParam as MarvelCharacter);
    } else {
      // Zur Testseite weiterleiten, wenn kein gültiger Charakter
      router.push("/tests/marvel");
    }
  }, [characterParam, router]);

  // Button zum Neustart des Tests
  const handleRestart = () => {
    router.push("/tests/marvel");
  };

  // Lade-Anzeige während der Überprüfung des Charakters oder Weiterleitung
  if (!character) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-white text-xl">Lade Ergebnis...</div>
      </div>
    );
  }

  return (
    <ResultCard
      result={marvelCharacterResults[character]}
      onRestart={handleRestart}
    />
  );
}
