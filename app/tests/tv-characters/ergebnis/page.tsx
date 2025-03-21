import { Suspense } from "react";
import { ResultContent } from "./result-content";
import { TVStaticBackground } from "@/components/tests/tv-characters/tv-static-background";
import { AdBanner } from "@/components/tests/tv-characters/ad-banner";
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
    "@/components/tests/tv-characters/test-data"
  );

  if (
    characterParam &&
    characterResults[characterParam as keyof typeof characterResults]
  ) {
    const characterInfo =
      characterResults[characterParam as keyof typeof characterResults];

    return {
      title: `${characterInfo.name} ist dein TV-Serien Charakter | WelcherTypBistDu`,
      description: `Du bist ${
        characterInfo.name
      } aus ${characterInfo.show}! ${characterInfo.description.substring(
        0,
        150
      )}...`,
      openGraph: {
        title: `${characterInfo.name} ist dein TV-Serien Charakter | WelcherTypBistDu`,
        description: `Du bist ${
          characterInfo.name
        } aus ${characterInfo.show}! ${characterInfo.description.substring(
          0,
          150
        )}...`,
        images: [characterInfo.image],
      },
      twitter: {
        card: "summary_large_image",
        title: `${characterInfo.name} - TV-Serien Charaktertest | WelcherTypBistDu`,
        description: `Du bist ${
          characterInfo.name
        }! ${characterInfo.description.substring(0, 100)}...`,
        images: [characterInfo.image],
      },
    };
  }

  // Standard-Metadaten, wenn kein Charakter angegeben ist
  return {
    title: "Dein TV-Serien Charaktertest Ergebnis | WelcherTypBistDu",
    description:
      "Sieh dir an, welcher TV-Serien Charakter am besten zu deiner Persönlichkeit passt!",
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

export default async function TVCharactersResultPage({
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
      "@/components/tests/tv-characters/test-data"
    );

    if (characterResults[characterParam as keyof typeof characterResults]) {
      const characterInfo =
        characterResults[characterParam as keyof typeof characterResults];

      structuredData = {
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "TV-Serien Charaktertest",
        description:
          "Finde heraus, welcher TV-Serien Charakter am besten zu deiner Persönlichkeit passt.",
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName: "Persönlichkeitstest",
        },
        about: {
          "@type": "Thing",
          name: "TV-Serien",
          description: "Beliebte Fernsehserien und ihre Charaktere",
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

      <div className="min-h-screen py-12 px-4 relative">
        <TVStaticBackground intensity={0.05} speed={0.3} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* TV Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-32 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  TV CHARACTERS
                </h1>
              </div>
            </div>
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
