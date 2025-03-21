"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ResultCard } from "@/components/tests/pokemon/result-card";
import { pokemonResults } from "@/components/tests/pokemon/test-data";
import type { Pokemon } from "@/components/tests/pokemon/types";

interface ResultContentProps {
  pokemon?: string;
}

export function ResultContent({ pokemon: pokemonParam }: ResultContentProps) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (pokemonParam && Object.keys(pokemonResults).includes(pokemonParam)) {
      setPokemon(pokemonParam as Pokemon);
    } else {
      // Zur Testseite weiterleiten, wenn kein gültiges Pokémon
      router.push("/tests/pokemon");
    }
  }, [pokemonParam, router]);

  // Button zum Neustart des Tests
  const handleRestart = () => {
    router.push("/tests/pokemon");
  };

  // Lade-Anzeige während der Überprüfung des Pokémons oder Weiterleitung
  if (!pokemon) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-white text-xl">Lade Ergebnis...</div>
      </div>
    );
  }

  return (
    <ResultCard result={pokemonResults[pokemon]} onRestart={handleRestart} />
  );
}
