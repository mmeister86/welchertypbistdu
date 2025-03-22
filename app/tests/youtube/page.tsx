import { YouTuberTest } from "@/components/tests/youtuber/youtuber-test"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher YouTuber bist du? | Persönlichkeitstest",
  description:
    "Finde heraus, welchem berühmten YouTuber deine Persönlichkeit am ähnlichsten ist! Mache jetzt unseren kostenlosen Persönlichkeitstest.",
  openGraph: {
    title: "Welcher YouTuber bist du? | Persönlichkeitstest",
    description:
      "Finde heraus, welchem berühmten YouTuber deine Persönlichkeit am ähnlichsten ist! Mache jetzt unseren kostenlosen Persönlichkeitstest.",
    images: ["/images/youtube-test-og.jpg"],
  },
}

export default function YouTubeTestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <YouTuberTest />
    </main>
  )
}
