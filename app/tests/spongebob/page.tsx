import { SpongebobTest } from "@/components/tests/spongebob/spongebob-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher Spongebob Schwammkopf Charakter bist du? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher Spongebob Schwammkopf Charakter am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function SpongebobTestPage() {
  return (
    <div className="min-h-screen bg-blue-500">
      <SpongebobTest />
    </div>
  )
}

