"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Compass, Home, MapPin, RefreshCw } from "lucide-react";

export default function NotFound() {
  const [character, setCharacter] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  // Random position for floating elements
  const randomPosition = () => ({
    x: Math.random() * 40 - 20,
    y: Math.random() * 40 - 20,
    rotate: Math.random() * 20 - 10,
  });

  const [positions] = useState([
    randomPosition(),
    randomPosition(),
    randomPosition(),
    randomPosition(),
    randomPosition(),
  ]);

  const lostCharacters = [
    {
      name: "Der Entdecker",
      description:
        "Du siehst Verirrungen als Chance, Neues zu entdecken. Jeder Fehler ist ein Abenteuer!",
      color: "from-purple-600 to-pink-600",
      icon: <Compass className="h-12 w-12 text-white" />,
    },
    {
      name: "Der Heimkehrer",
      description:
        "Du findest immer einen Weg zurück. Umwege machen dich stärker und weiser.",
      color: "from-blue-600 to-indigo-600",
      icon: <Home className="h-12 w-12 text-white" />,
    },
    {
      name: "Der Neuanfänger",
      description:
        "Du nimmst Fehler mit Humor und startest einfach neu. Flexibilität ist deine Stärke!",
      color: "from-green-500 to-teal-500",
      icon: <RefreshCw className="h-12 w-12 text-white" />,
    },
    {
      name: "Der Zielfinder",
      description:
        "Du behältst immer dein Ziel im Auge. Ein kleiner Umweg hält dich nicht auf!",
      color: "from-red-500 to-orange-500",
      icon: <MapPin className="h-12 w-12 text-white" />,
    },
  ];

  useEffect(() => {
    // Simulate a personality test result after a delay
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * lostCharacters.length);
      setIsRevealing(true);

      // Set the character after the reveal animation starts
      setTimeout(() => {
        setCharacter(lostCharacters[randomIndex].name);
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const selectedCharacter =
    lostCharacters.find((c) => c.name === character) || lostCharacters[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="relative z-10 max-w-3xl w-full">
        {/* 404 Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            404
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">
            Oops! Du hast dich verirrt.
          </p>
        </motion.div>

        {/* Personality Test Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-foreground">
              Welcher "Verirrt"-Typ bist du?
            </h2>
            <p className="text-gray-600 mb-6">
              Jeder verirrt sich mal. Deine Art, damit umzugehen, sagt viel über
              deine Persönlichkeit aus!
            </p>

            {/* Result Section */}
            <div className="mt-8">
              {!character ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Compass className="h-8 w-8 text-purple-600" />
                    </motion.div>
                  </div>
                  <p className="text-gray-700">
                    Analysiere deinen Verirrt-Typ...
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${selectedCharacter.color} flex items-center justify-center mb-4`}
                  >
                    {selectedCharacter.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {character}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedCharacter.description}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Navigation Options */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Home size={18} />
                Zurück zur Startseite
              </Link>
              <Link
                href="/tests"
                className="px-6 py-3 rounded-full bg-white border border-purple-200 text-purple-600 font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Entdecke unsere Tests <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Floating Question Marks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-300 opacity-20 font-bold text-2xl"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, "-100%"],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              ?
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
