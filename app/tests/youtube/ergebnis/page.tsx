import { Metadata } from "next"
import { AdBanner } from "@/components/tests/youtuber/adbanner"
import { YouTubeBackground } from "@/components/tests/youtuber/youtube-background"
import { ResultContent } from "./result-content"
import { youtuberResults } from "@/components/tests/youtuber/test-data"
import type { Youtuber } from "@/components/tests/youtuber/types"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  // youtuber Parameter aus der URL extrahieren
  const youtuber = (searchParams.youtuber as string) || "pewDiePie"

  // Ergebnis-Daten abrufen
  const result = youtuberResults[youtuber as Youtuber]

  // Standard-Metadaten für den Fall, dass kein gültiges Ergebnis gefunden wurde
  if (!result) {
    return {
      title: "Welcher YouTuber bist du? | Testergebnis",
      description: "Finde heraus, welchem berühmten YouTuber deine Persönlichkeit am ähnlichsten ist!",
    }
  }

  // Dynamische Metadaten basierend auf dem Testergebnis
  return {
    title: `Du bist wie ${result.name} | YouTuber Persönlichkeitstest`,
    description: `Laut unserem Test ähnelt deine Persönlichkeit ${result.name}! ${result.description.substring(0, 100)}...`,
    openGraph: {
      title: `Du bist wie ${result.name} | YouTuber Persönlichkeitstest`,
      description: `Laut unserem Test ähnelt deine Persönlichkeit ${result.name}! ${result.description.substring(0, 100)}...`,
      images: [result.image],
    }
  }
}

export default function YouTubeTestResultPage({ searchParams }: Props) {
  const youtuber = (searchParams.youtuber as string) || "pewDiePie"

  // Strukturierte Daten für SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Du bist wie ${youtuberResults[youtuber as Youtuber]?.name || "PewDiePie"} | YouTuber Persönlichkeitstest`,
    "description": "Finde heraus, welchem berühmten YouTuber deine Persönlichkeit am ähnlichsten ist!"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 px-4 relative">
      {/* Hintergrund mit YouTube-Elementen */}
      <YouTubeBackground intensity={0.3} speed={0.2} />

      {/* Strukturierte Daten für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* AdBanner am Anfang */}
        <div className="mb-8">
          <AdBanner />
        </div>

        {/* Hauptinhalt - ResultContent ist eine Client-Komponente */}
        <ResultContent youtuber={youtuber} />

        {/* AdBanner am Ende */}
        <div className="mt-12">
          <AdBanner />
        </div>
      </div>
    </div>
  )
}
