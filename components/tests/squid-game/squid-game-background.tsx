"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Komponente für den Hintergrund mit Squid-Game-Symbolen (Kreis, Dreieck, Viereck)
export function SquidGameBackground() {
  const [shapes, setShapes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Erzeuge Formen basierend auf der Fenstergröße
    const generateShapes = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const numShapes = Math.floor((windowWidth * windowHeight) / 40000); // Anzahl der Formen basierend auf Bildschirmgröße

      const newShapes = [];

      for (let i = 0; i < numShapes; i++) {
        const type = Math.floor(Math.random() * 3); // 0: Kreis, 1: Dreieck, 2: Viereck
        const size = Math.random() * 40 + 20; // Zufällige Größe zwischen 20 und 60px
        const x = Math.random() * 100; // Zufällige x-Position (in %)
        const y = Math.random() * 100; // Zufällige y-Position (in %)
        const opacity = Math.random() * 0.15 + 0.05; // Zufällige Deckkraft zwischen 0.05 und 0.2
        const rotation = Math.random() * 360; // Zufällige Rotation

        let shape;
        const key = `shape-${i}`;

        if (type === 0) {
          // Kreis
          shape = (
            <motion.div
              key={key}
              className="absolute rounded-full border-2 border-white"
              style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
                opacity,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: 1,
                rotate: rotation,
                opacity: [opacity, opacity * 1.5, opacity],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        } else if (type === 1) {
          // Dreieck
          shape = (
            <motion.div
              key={key}
              className="absolute"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${size / 2}px solid transparent`,
                borderRight: `${size / 2}px solid transparent`,
                borderBottom: `${size}px solid white`,
                left: `${x}%`,
                top: `${y}%`,
                opacity,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: 1,
                rotate: rotation,
                opacity: [opacity, opacity * 1.5, opacity],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        } else {
          // Viereck
          shape = (
            <motion.div
              key={key}
              className="absolute border-2 border-white"
              style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
                opacity,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: 1,
                rotate: rotation,
                opacity: [opacity, opacity * 1.5, opacity],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        }

        newShapes.push(shape);
      }

      setShapes(newShapes);
    };

    generateShapes();

    const handleResize = () => {
      generateShapes();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes}
    </div>
  );
}
