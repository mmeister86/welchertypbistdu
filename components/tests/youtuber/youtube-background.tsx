"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface YouTubeBackgroundProps {
  intensity?: number
  speed?: number
}

export function YouTubeBackground({ intensity = 0.2, speed = 0.5 }: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [items, setItems] = useState<{ x: number; y: number; size: number; delay: number }[]>([])

  // Aktualisiere die Größe des Containers und generiere neue Items
  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (!containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })

      // Generiere zufällige YouTube-Icons/Elemente
      const newItems = []
      const itemCount = Math.floor((width * height) / 25000) // Anzahl der Elemente basierend auf der Bildschirmgröße

      for (let i = 0; i < itemCount; i++) {
        newItems.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 20 + 10, // Größe zwischen 10 und 30px
          delay: Math.random() * 5, // Zufällige Verzögerung für Animation
        })
      }

      setItems(newItems)
    }

    // Initialisiere und richte einen Resize-Listener ein
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ opacity: intensity }}
    >
      {/* YouTube-Farbverlauf im Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-800/30 via-black/70 to-black/90"></div>

      {/* Animierte YouTube-Icons und -Elemente */}
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-red-300 opacity-50"
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{
            y: [item.y, item.y + 100, item.y],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5 / speed,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: item.size, height: item.size }}
        />
      ))}

      {/* Stilisierte YouTube Play-Buttons */}
      {items.slice(0, items.length / 3).map((item, index) => (
        <motion.div
          key={`play-${index}`}
          className="absolute bg-red-600 rounded-lg opacity-40"
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{
            x: [item.x, item.x + 50 * Math.random() - 25, item.x],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 / speed,
            delay: item.delay + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: item.size * 1.5, height: item.size }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white transform translate-x-[2px]"></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
