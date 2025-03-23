"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Test {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  path?: string;
}

interface RandomTestButtonProps {
  className?: string;
  children?: React.ReactNode;
}

// Verfügbare Tests als statische Liste
const availableTests: Test[] = [
  {
    id: "star-wars",
    title: "Welcher Star Wars Charakter bist du?",
    description:
      "Finde heraus, ob du mehr wie Luke Skywalker, Darth Vader oder Yoda bist.",
    image: "/images/landscape/star-wars-landscape.jpeg",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "marvel",
    title: "Welcher Marvel Charakter bist du?",
    description:
      "Entdecke, ob du mehr wie Iron Man, Captain America oder Spider-Man bist.",
    image: "/images/landscape/marvel-landscape.jpeg",
    color: "from-red-500 to-blue-500",
  },
  {
    id: "spongebob",
    title: "Welcher Spongebob Charakter bist du?",
    description:
      "Entdecke, ob du mehr wie Spongebob, Patrick oder Thaddäus bist.",
    image: "/images/landscape/spongebob-landscape.jpeg",
    color: "from-blue-400 to-yellow-400",
  },
  {
    id: "game-of-thrones",
    title: "Welcher Game of Thrones Charakter bist du?",
    description:
      "Finde heraus, ob du mehr wie Jon Snow, Daenerys Targaryen oder Tyrion Lannister bist.",
    image: "/images/landscape/got-landscape.jpeg",
    color: "from-gray-700 to-gray-900",
  },
  {
    id: "pokemon",
    title: "Welches Pokémon bist du?",
    description:
      "Finde heraus, welches Pokémon am besten zu deiner Persönlichkeit passt.",
    image: "/images/landscape/pokemon-landscape.jpeg",
    color: "from-blue-500 to-green-500",
  },
  {
    id: "automarken",
    title: "Welche Automarke passt zu dir?",
    description:
      "Finde heraus, welche Automarke am besten zu deiner Persönlichkeit und deinem Fahrstil passt.",
    image: "/images/landscape/automarken-landscape.jpeg",
    color: "from-gray-500 to-blue-500",
  },
];

// Funktion, um einen zufälligen Test zu öffnen
const openRandomTest = (router: any, setIsLoading: any) => {
  setIsLoading(true);

  try {
    if (availableTests.length > 0) {
      // Zufälligen Test aus der Liste auswählen
      const randomTest =
        availableTests[Math.floor(Math.random() * availableTests.length)];

      // Überprüfen, ob ein spezifischer Pfad definiert ist, sonst Standard-Pfad verwenden
      const testPath = randomTest.path || `/tests/${randomTest.id}`;

      // Zur Testseite navigieren
      router.push(testPath);
    }
  } catch (error) {
    console.error("Failed to select random test:", error);
    // Hier könntest du eine Fehlerbehandlung hinzufügen
  } finally {
    setIsLoading(false);
  }
};

export default function RandomTestButton({
  className = "inline-flex items-center px-8 py-3 rounded-full bg-white text-purple-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200",
  children = "Zufälliger Test",
}: RandomTestButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRandomTest = () => {
    openRandomTest(router, setIsLoading);
  };

  return (
    <button
      onClick={handleRandomTest}
      disabled={isLoading}
      className={`${className} ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-5 w-5 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Wird geladen...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
