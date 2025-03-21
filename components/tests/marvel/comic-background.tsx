"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ComicBackgroundProps {
  density?: number;
}

interface ComicElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: string;
  src: string;
  rotation: number;
  opacity: number;
  zIndex: number;
}

export function ComicBackground({ density = 30 }: ComicBackgroundProps) {
  const [elements, setElements] = useState<ComicElement[]>([]);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Comic elements using SVG files
    const comicElements = [
      { type: "marvel", src: "/images/svg/marvel.svg" },
      { type: "marvel1", src: "/images/svg/marvel(1).svg" },
      { type: "thanos", src: "/images/svg/thanos-hand.svg" },
      { type: "avatar", src: "/images/svg/avatar.svg" },
      { type: "people", src: "/images/svg/people.svg" },
      { type: "people1", src: "/images/svg/people(1).svg" },
      { type: "people2", src: "/images/svg/people(2).svg" },
      { type: "people3", src: "/images/svg/people(3).svg" },
      { type: "people4", src: "/images/svg/people(4).svg" },
      { type: "people5", src: "/images/svg/people(5).svg" },
      { type: "cinema", src: "/images/svg/cinema.svg" },
    ];

    // Generate initial elements
    const initialElements: ComicElement[] = [];
    for (let i = 0; i < density; i++) {
      const element =
        comicElements[Math.floor(Math.random() * comicElements.length)];
      initialElements.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 + 50,
        type: element.type,
        src: element.src,
        rotation: Math.random() * 360, // Use degrees for framer-motion
        opacity: 0.1 + Math.random() * 0.2,
        zIndex: Math.floor(Math.random() * 10), // Random z-index between 0-9
      });
    }

    setElements(initialElements);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [density]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => {
        // Generate random animation parameters for each element
        const xOffset = Math.random() * 30 - 15; // -15 to 15px
        const yOffset = Math.random() * 30 - 15; // -15 to 15px
        const duration = 10 + Math.random() * 20; // 10-30s
        const delay = Math.random() * 5; // 0-5s delay

        return (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              top: element.y,
              left: element.x,
              width: element.size,
              height: element.size,
              opacity: element.opacity,
              zIndex: element.zIndex,
            }}
            initial={{ rotate: element.rotation }}
            animate={{
              x: [0, xOffset, 0, -xOffset, 0],
              y: [0, yOffset, -yOffset, 0, yOffset],
              rotate: [
                element.rotation,
                element.rotation + 5,
                element.rotation - 5,
                element.rotation,
              ],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src={element.src}
              alt={element.type}
              width={element.size}
              height={element.size}
              className="w-full h-full"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
