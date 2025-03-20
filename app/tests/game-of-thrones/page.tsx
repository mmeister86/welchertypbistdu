import { GameOfThronesTest } from "@/components/tests/game-of-thrones/game-of-thrones-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher Game of Thrones Charakter bist du? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher Game of Thrones Charakter am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function GameOfThronesTestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <GameOfThronesTest />
    </div>
  )
}

