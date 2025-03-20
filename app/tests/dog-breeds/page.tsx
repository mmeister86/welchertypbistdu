import { DogBreedTest } from "@/components/tests/dog-breeds/dog-breed-test";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welche Hunderasse passt zu dir? | WelcherTypBistDu",
  description:
    "Finde heraus, welche Hunderasse am besten zu deinem Lebensstil und deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
};

export default function DogBreedTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <DogBreedTest />
    </div>
  );
}
