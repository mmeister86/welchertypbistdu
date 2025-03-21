import { Suspense } from "react";
import { ResultContent } from "./result-content";
import { PokeballBackground } from "@/components/tests/pokemon/pokeball-background";
import { AdBanner } from "@/components/tests/pokemon/ad-banner";
import type { Metadata } from "next";
import Script from "next/script";

type MetadataProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: MetadataProps): Promise<Metadata> {
  // Für serverseitige Metadaten-Generierung
  const searchParamsData = await searchParams;
  const pokemonParam =
    typeof searchParamsData.pokemon === "string"
      ? searchParamsData.pokemon
      : undefined;

  // Dynamische Imports, um das Bündeln mit dem Client zu vermeiden
  const { pokemonResults } = await import(
    "@/components/tests/pokemon/test-data"
  );

  if (
    pokemonParam &&
    pokemonResults[pokemonParam as keyof typeof pokemonResults]
  ) {
    const pokemonInfo =
      pokemonResults[pokemonParam as keyof typeof pokemonResults];

    return {
      title: `${pokemonInfo.name} ist dein Pokémon | WelcherTypBistDu`,
      description: `Du bist ${pokemonInfo.name} vom Typ ${
        pokemonInfo.type
      }! ${pokemonInfo.description.substring(0, 150)}...`,
      openGraph: {
        title: `${pokemonInfo.name} ist dein Pokémon | WelcherTypBistDu`,
        description: `Du bist ${pokemonInfo.name} vom Typ ${
          pokemonInfo.type
        }! ${pokemonInfo.description.substring(0, 150)}...`,
        images: [pokemonInfo.image],
      },
      twitter: {
        card: "summary_large_image",
        title: `${pokemonInfo.name} - Pokémon Persönlichkeitstest | WelcherTypBistDu`,
        description: `Du bist ${
          pokemonInfo.name
        }! ${pokemonInfo.description.substring(0, 100)}...`,
        images: [pokemonInfo.image],
      },
    };
  }

  // Standard-Metadaten, wenn kein Pokémon angegeben ist
  return {
    title: "Dein Pokémon Persönlichkeitstest Ergebnis | WelcherTypBistDu",
    description:
      "Sieh dir an, welches Pokémon am besten zu deiner Persönlichkeit passt!",
  };
}

// Erstelle eine Client-Komponente für JSON-LD-Skript
function JsonLdScript({ characterData }: { characterData: any }) {
  if (!characterData) return null;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(characterData) }}
    />
  );
}

export default async function PokemonResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extrahiere den Pokémon-Parameter sicher
  const searchParamsData = await searchParams;
  const pokemonParam =
    typeof searchParamsData.pokemon === "string"
      ? searchParamsData.pokemon
      : undefined;

  let structuredData = null;

  // Verarbeite nur, wenn wir einen Pokémon-Parameter haben
  if (pokemonParam) {
    // Erstelle strukturierte Daten für die Ergebnisseite
    const { pokemonResults } = await import(
      "@/components/tests/pokemon/test-data"
    );

    if (pokemonResults[pokemonParam as keyof typeof pokemonResults]) {
      const pokemonInfo =
        pokemonResults[pokemonParam as keyof typeof pokemonResults];

      structuredData = {
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "Pokémon Persönlichkeitstest",
        description:
          "Finde heraus, welches Pokémon am besten zu deiner Persönlichkeit passt.",
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName: "Persönlichkeitstest",
        },
        about: {
          "@type": "Thing",
          name: "Pokémon",
          description: "Die beliebte Videospiel- und Anime-Serie",
        },
        result: {
          "@type": "Thing",
          name: pokemonInfo.name,
          description: pokemonInfo.description,
        },
      };
    }
  }

  return (
    <>
      {structuredData && <JsonLdScript characterData={structuredData} />}

      <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-red-500 to-red-600 relative">
        <PokeballBackground />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Pokémon Logo */}
          <div className="flex justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-md pokemon-font">
              Pokémon Test
            </h1>
          </div>

          {/* Ad Banner at the top */}
          <AdBanner />

          {/* Result Card */}
          <div className="my-8">
            <Suspense
              fallback={
                <div className="text-white text-xl text-center p-12">
                  Lade Ergebnis...
                </div>
              }
            >
              <ResultContent pokemon={pokemonParam} />
            </Suspense>
          </div>

          {/* Ad Banner at the bottom */}
          <AdBanner />
        </div>
      </div>
    </>
  );
}
