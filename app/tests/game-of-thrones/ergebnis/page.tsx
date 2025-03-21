import { Suspense } from "react";
import { ResultContent } from "./result-content";
import { SnowBackground } from "@/components/tests/game-of-thrones/snow-background";
import { AdBanner } from "@/components/tests/game-of-thrones/ad-banner";
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
  const characterParam =
    typeof searchParamsData.character === "string"
      ? searchParamsData.character
      : undefined;

  // Dynamische Imports, um das Bündeln mit dem Client zu vermeiden
  const { characterResults } = await import(
    "@/components/tests/game-of-thrones/test-data"
  );

  if (
    characterParam &&
    characterResults[characterParam as keyof typeof characterResults]
  ) {
    const characterInfo =
      characterResults[characterParam as keyof typeof characterResults];

    return {
      title: `${characterInfo.name} ist dein Game of Thrones Charakter | WelcherTypBistDu`,
      description: `Du bist ${
        characterInfo.name
      } aus Game of Thrones! ${characterInfo.description.substring(0, 150)}...`,
      openGraph: {
        title: `${characterInfo.name} ist dein Game of Thrones Charakter | WelcherTypBistDu`,
        description: `Du bist ${
          characterInfo.name
        } aus Game of Thrones! ${characterInfo.description.substring(
          0,
          150
        )}...`,
        images: [characterInfo.image],
      },
      twitter: {
        card: "summary_large_image",
        title: `${characterInfo.name} - Game of Thrones Charaktertest | WelcherTypBistDu`,
        description: `Du bist ${
          characterInfo.name
        }! ${characterInfo.description.substring(0, 100)}...`,
        images: [characterInfo.image],
      },
    };
  }

  // Standard-Metadaten, wenn kein Charakter angegeben ist
  return {
    title: "Dein Game of Thrones Charaktertest Ergebnis | WelcherTypBistDu",
    description:
      "Sieh dir an, welcher Game of Thrones Charakter am besten zu deiner Persönlichkeit passt!",
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

export default async function GameOfThronesResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extrahiere den Character-Parameter sicher
  const searchParamsData = await searchParams;
  const characterParam =
    typeof searchParamsData.character === "string"
      ? searchParamsData.character
      : undefined;

  let structuredData = null;

  // Verarbeite nur, wenn wir einen Character-Parameter haben
  if (characterParam) {
    // Erstelle strukturierte Daten für die Ergebnisseite
    const { characterResults } = await import(
      "@/components/tests/game-of-thrones/test-data"
    );

    if (characterResults[characterParam as keyof typeof characterResults]) {
      const characterInfo =
        characterResults[characterParam as keyof typeof characterResults];

      structuredData = {
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "Game of Thrones Charaktertest",
        description:
          "Finde heraus, welcher Game of Thrones Charakter am besten zu deiner Persönlichkeit passt.",
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName: "Persönlichkeitstest",
        },
        about: {
          "@type": "Thing",
          name: "Game of Thrones",
          description: "Die beliebte Fantasy-Serie",
        },
        result: {
          "@type": "Thing",
          name: characterInfo.name,
          description: characterInfo.description,
        },
      };
    }
  }

  return (
    <>
      {structuredData && <JsonLdScript characterData={structuredData} />}

      <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <SnowBackground />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Game of Thrones Logo */}
          <div className="flex justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-200 got-font">
              Game of Thrones
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
              <ResultContent character={characterParam} />
            </Suspense>
          </div>

          {/* Ad Banner at the bottom */}
          <AdBanner />
        </div>
      </div>
    </>
  );
}
