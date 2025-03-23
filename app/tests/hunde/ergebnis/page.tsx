import { Suspense } from "react";
import { ResultContent } from "./result-content";
import { PawBackground } from "@/components/tests/dog-breed/paw-background";
import { AdBanner } from "@/components/tests/dog-breed/ad-banner";
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
  const breedParam =
    typeof searchParamsData.breed === "string"
      ? searchParamsData.breed
      : undefined;

  // Dynamische Imports, um das Bündeln mit dem Client zu vermeiden
  const { dogBreedResults } = await import(
    "@/components/tests/dog-breed/test-data"
  );

  if (
    breedParam &&
    dogBreedResults[breedParam as keyof typeof dogBreedResults]
  ) {
    const breedInfo =
      dogBreedResults[breedParam as keyof typeof dogBreedResults];

    return {
      title: `${breedInfo.name} ist deine passende Hunderasse | WelcherTypBistDu`,
      description: `Der ${
        breedInfo.name
      } passt am besten zu deiner Persönlichkeit! ${breedInfo.description.substring(
        0,
        150
      )}...`,
      openGraph: {
        title: `${breedInfo.name} ist deine passende Hunderasse | WelcherTypBistDu`,
        description: `Der ${
          breedInfo.name
        } passt am besten zu deiner Persönlichkeit! ${breedInfo.description.substring(
          0,
          150
        )}...`,
        images: [breedInfo.image],
      },
      twitter: {
        card: "summary_large_image",
        title: `${breedInfo.name} - Hunderassen-Test | WelcherTypBistDu`,
        description: `Der ${
          breedInfo.name
        } passt zu dir! ${breedInfo.description.substring(0, 100)}...`,
        images: [breedInfo.image],
      },
    };
  }

  // Standard-Metadaten, wenn keine Hunderasse angegeben ist
  return {
    title: "Dein Hunderassen-Test Ergebnis | WelcherTypBistDu",
    description:
      "Finde heraus, welche Hunderasse am besten zu deiner Persönlichkeit und deinem Lebensstil passt!",
  };
}

// Erstelle eine Client-Komponente für JSON-LD-Skript
function JsonLdScript({ breedData }: { breedData: any }) {
  if (!breedData) return null;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breedData) }}
    />
  );
}

export default async function DogBreedResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extrahiere den Breed-Parameter sicher
  const searchParamsData = await searchParams;
  const breedParam =
    typeof searchParamsData.breed === "string"
      ? searchParamsData.breed
      : undefined;

  let structuredData = null;

  // Verarbeite nur, wenn wir einen Breed-Parameter haben
  if (breedParam) {
    // Erstelle strukturierte Daten für die Ergebnisseite
    const { dogBreedResults } = await import(
      "@/components/tests/dog-breed/test-data"
    );

    if (dogBreedResults[breedParam as keyof typeof dogBreedResults]) {
      const breedInfo =
        dogBreedResults[breedParam as keyof typeof dogBreedResults];

      structuredData = {
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "Hunderassen-Test",
        description:
          "Finde heraus, welche Hunderasse am besten zu deiner Persönlichkeit und deinem Lebensstil passt.",
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName: "Persönlichkeitstest",
        },
        about: {
          "@type": "Thing",
          name: "Hunderassen",
          description: "Verschiedene Hunderassen und ihre Eigenschaften",
        },
        result: {
          "@type": "Thing",
          name: breedInfo.name,
          description: breedInfo.description,
        },
      };
    }
  }

  return (
    <>
      {structuredData && <JsonLdScript breedData={structuredData} />}

      <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-amber-100 to-amber-200 relative">
        <PawBackground />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Dog Breed Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-32 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-amber-800">
                  HUNDERASSEN-TEST
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
                <div className="text-amber-800 text-xl text-center p-12">
                  Lade Ergebnis...
                </div>
              }
            >
              <ResultContent breed={breedParam} />
            </Suspense>
          </div>

          {/* Ad Banner at the bottom */}
          <AdBanner />
        </div>
      </div>
    </>
  );
}
