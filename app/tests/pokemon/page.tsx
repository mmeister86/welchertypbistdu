import { PokemonTest } from "@/components/tests/pokemon/pokemon-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welches Pokémon bin ich? | WelcherTypBistDu",
  description:
    "Finde heraus, welches Pokémon am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function PokemonTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-500 text-white">
      <PokemonTest />
    </div>
  )
}

