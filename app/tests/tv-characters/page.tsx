import { TVCharactersTest } from "@/components/tests/tv-characters/tv-characters-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher TV-Serienfigur ähnelst du am meisten? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher TV-Serienfigur du am meisten ähnelst mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function TVCharactersTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-white">
      <TVCharactersTest />
    </div>
  )
}

