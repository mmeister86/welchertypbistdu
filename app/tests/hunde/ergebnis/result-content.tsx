"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ResultCard } from "@/components/tests/dog-breed/result-card";
import { dogBreedResults } from "@/components/tests/dog-breed/test-data";
import type { DogBreed } from "@/components/tests/dog-breed/types";

interface ResultContentProps {
  breed?: string;
}

export function ResultContent({ breed: breedParam }: ResultContentProps) {
  const router = useRouter();
  const [breed, setBreed] = useState<DogBreed | null>(null);

  useEffect(() => {
    if (breedParam && Object.keys(dogBreedResults).includes(breedParam)) {
      setBreed(breedParam as DogBreed);
    } else {
      // Zur Testseite weiterleiten, wenn keine gültige Hunderasse
      router.push("/tests/dog-personality");
    }
  }, [breedParam, router]);

  // Button zum Neustart des Tests
  const handleRestart = () => {
    router.push("/tests/dog-personality");
  };

  // Lade-Anzeige während der Überprüfung der Hunderasse oder Weiterleitung
  if (!breed) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-amber-800 text-xl">Lade Ergebnis...</div>
      </div>
    );
  }

  return (
    <ResultCard result={dogBreedResults[breed]} onRestart={handleRestart} />
  );
}
