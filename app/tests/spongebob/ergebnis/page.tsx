import { Suspense } from "react";
import { ResultContent } from "./result-content";
import { BubbleBackground } from "@/components/tests/spongebob/bubble-background";
import { AdBanner } from "@/components/tests/spongebob/ad-banner";
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
    "@/components/tests/spongebob/test-data"
  );

  if (
    characterParam &&
    characterResults[characterParam as keyof typeof characterResults]
  ) {
    const characterInfo =
      characterResults[characterParam as keyof typeof characterResults];

    return {
      title: `${characterInfo.name} ist dein SpongeBob Charakter | WelcherTypBistDu`,
      description: `Du bist ${
        characterInfo.name
      } aus SpongeBob Schwammkopf! ${characterInfo.description.substring(
        0,
        150
      )}...`,
      openGraph: {
        title: `${characterInfo.name} ist dein SpongeBob Charakter | WelcherTypBistDu`,
        description: `Du bist ${
          characterInfo.name
        } aus SpongeBob Schwammkopf! ${characterInfo.description.substring(
          0,
          150
        )}...`,
        images: [characterInfo.image],
      },
      twitter: {
        card: "summary_large_image",
        title: `${characterInfo.name} - SpongeBob Charaktertest | WelcherTypBistDu`,
        description: `Du bist ${
          characterInfo.name
        }! ${characterInfo.description.substring(0, 100)}...`,
        images: [characterInfo.image],
      },
    };
  }

  // Standard-Metadaten, wenn kein Charakter angegeben ist
  return {
    title: "Dein SpongeBob Charaktertest Ergebnis | WelcherTypBistDu",
    description:
      "Sieh dir an, welcher SpongeBob Schwammkopf Charakter am besten zu deiner Persönlichkeit passt!",
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

export default async function SpongebobResultPage({
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
      "@/components/tests/spongebob/test-data"
    );

    if (characterResults[characterParam as keyof typeof characterResults]) {
      const characterInfo =
        characterResults[characterParam as keyof typeof characterResults];

      structuredData = {
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "SpongeBob Schwammkopf Persönlichkeitstest",
        description:
          "Finde heraus, welcher SpongeBob Schwammkopf Charakter am besten zu deiner Persönlichkeit passt.",
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName: "Persönlichkeitstest",
        },
        about: {
          "@type": "Thing",
          name: "SpongeBob Schwammkopf",
          description: "Eine beliebte Zeichentrickserie",
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

      <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-blue-500 to-blue-700 relative">
        <BubbleBackground />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Spongebob Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-[512px] h-[256px] bg-[url('/images/spongebob-logo.png')] bg-contain bg-center bg-no-repeat z-20"></div>
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
