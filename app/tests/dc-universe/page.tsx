import { DCUniverseTest } from "@/components/tests/dc-universe/dc-universe-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher DC-Charakter bist du? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher Superheld oder Schurke aus dem DC Extended Universe am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function DCUniverseTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      <DCUniverseTest />
    </div>
  )
}
