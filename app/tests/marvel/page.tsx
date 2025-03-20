import { MarvelTest } from "@/components/tests/marvel/marvel-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher Marvel-Held bist du? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher Superheld oder Schurke aus dem Marvel Cinematic Universe am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function MarvelTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-blue-900 text-white">
      <MarvelTest />
    </div>
  )
}

