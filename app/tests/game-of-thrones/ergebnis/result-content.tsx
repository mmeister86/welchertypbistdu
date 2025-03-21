"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ResultCard } from "@/components/tests/game-of-thrones/result-card";
import { characterResults } from "@/components/tests/game-of-thrones/test-data";
import type { Character } from "@/components/tests/game-of-thrones/types";

interface ResultContentProps {
  character?: string;
}

export function ResultContent({
  character: characterParam,
}: ResultContentProps) {
  const router = useRouter();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (
      characterParam &&
      Object.keys(characterResults).includes(characterParam)
    ) {
      setCharacter(characterParam as Character);
    } else {
      // Zur Testseite weiterleiten, wenn kein gültiger Charakter
      router.push("/tests/game-of-thrones");
    }
  }, [characterParam, router]);

  // Button zum Neustart des Tests
  const handleRestart = () => {
    router.push("/tests/game-of-thrones");
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
      result={characterResults[character]}
      onRestart={handleRestart}
    />
  );
}
