"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ResultCard } from "@/components/tests/dc-universe/result-card";
import { dcCharacterResults } from "@/components/tests/dc-universe/test-data";
import type { DCCharacter } from "@/components/tests/dc-universe/types";

interface ResultContentProps {
  character?: string;
}

export function ResultContent({
  character: characterParam,
}: ResultContentProps) {
  const router = useRouter();
  const [character, setCharacter] = useState<DCCharacter | null>(null);

  useEffect(() => {
    if (
      characterParam &&
      Object.keys(dcCharacterResults).includes(characterParam)
    ) {
      setCharacter(characterParam as DCCharacter);
    } else {
      // Zur Testseite weiterleiten, wenn kein gültiger Charakter
      router.push("/tests/dc-universe");
    }
  }, [characterParam, router]);

  // Button zum Neustart des Tests
  const handleRestart = () => {
    router.push("/tests/dc-universe");
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
      result={dcCharacterResults[character]}
      onRestart={handleRestart}
    />
  );
}
