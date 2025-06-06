"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ResultCard } from "@/components/tests/spongebob/result-card";
import { characterResults } from "@/components/tests/spongebob/test-data";
import type { Character } from "@/components/tests/spongebob/types";

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
      // Redirect to test page if no valid character
      router.push("/tests/spongebob");
    }
  }, [characterParam, router]);

  // Handle restart button click
  const handleRestart = () => {
    router.push("/tests/spongebob");
  };

  // Show loading while checking character or redirect
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
