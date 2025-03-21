"use client"

import { useEffect, useRef } from "react"

interface Pokeball {
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
}

export function PokeballBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pokeballsRef = useRef<Pokeball[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Load pokeball image
    const pokeballImage = new Image()
    pokeballImage.src = "/images/pokeball.png"
    pokeballImage.crossOrigin = "anonymous"

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPokeballs()
    }

    const initPokeballs = () => {
      const pokeballs: Pokeball[] = []
      const count = Math.min(20, Math.floor((canvas.width * canvas.height) / 40000))

      for (let i = 0; i < count; i++) {
        pokeballs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 20,
          speed: Math.random() * 1 + 0.5,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
        })
      }

      pokeballsRef.current = pokeballs
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pokeballsRef.current.forEach((pokeball) => {
        // Update position
        pokeball.y += pokeball.speed
        pokeball.rotation += pokeball.rotationSpeed

        // Reset if off screen
        if (pokeball.y > canvas.height + pokeball.size) {
          pokeball.y = -pokeball.size
          pokeball.x = Math.random() * canvas.width
        }

        // Draw pokeball
        if (pokeballImage.complete) {
          ctx.save()
          ctx.translate(pokeball.x, pokeball.y)
          ctx.rotate((pokeball.rotation * Math.PI) / 180)
          ctx.globalAlpha = 0.7
          ctx.drawImage(pokeballImage, -pokeball.size / 2, -pokeball.size / 2, pokeball.size, pokeball.size)
          ctx.restore()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Start animation when image is loaded
    pokeballImage.onload = () => {
      animate()
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
