import { BerufeTest } from "@/components/tests/berufe/berufe-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcher Beruf passt wirklich zu dir? | WelcherTypBistDu",
  description:
    "Finde heraus, welcher der beliebtesten Berufe in Deutschland wirklich zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
}

export default function BerufeTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 text-gray-800">
      <BerufeTest />
    </div>
  )
}

