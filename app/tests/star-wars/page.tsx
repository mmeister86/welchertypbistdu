import { StarWarsTest } from "@/components/tests/star-wars/star-wars-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher Star Wars Charakter bist du? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher Star Wars Charakter am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function StarWarsTestPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StarWarsTest />
    </div>
  )
}

