"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  px: number
  py: number
  size: number
  color: string
}

interface StarfieldBackgroundProps {
  starCount?: number
  speed?: number
  className?: string
}

export function StarfieldBackground({
  starCount = 400,
  speed = 0.5, // Reduced speed for a more subtle effect
  className = "",
}: StarfieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>(0)

  const initStars = (width: number, height: number) => {
    const stars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      const star: Star = {
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 1000,
        px: 0,
        py: 0,
        size: Math.random() * 1.5 + 0.5,
        color: `rgba(${180 + Math.floor(Math.random() * 75)}, ${180 + Math.floor(Math.random() * 75)}, ${220 + Math.floor(Math.random() * 35)}, ${0.6 + Math.random() * 0.4})`,
      }
      stars.push(star)
    }

    starsRef.current = stars
  }

  const drawStars = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    ctx.fillStyle = "rgba(0, 0, 0, 0.2)" // Semi-transparent to create trail effect
    ctx.fillRect(0, 0, width, height)

    starsRef.current.forEach((star) => {
      star.z -= speed

      if (star.z <= 0) {
        star.z = 1000
        star.x = Math.random() * width - centerX
        star.y = Math.random() * height - centerY
      }

      const factor = 200 / star.z
      star.px = star.x * factor + centerX
      star.py = star.y * factor + centerY

      const size = Math.min(star.size * (400 / star.z), 3) // Smaller max size for subtlety

      const tailLength = Math.min(20 * (speed / 2), 20) // Shorter tail for subtlety
      const prevFactor = 200 / (star.z + speed * 2)
      const prevX = star.x * prevFactor + centerX
      const prevY = star.y * prevFactor + centerY

      const gradient = ctx.createLinearGradient(prevX, prevY, star.px, star.py)
      gradient.addColorStop(0, "transparent")
      gradient.addColorStop(1, star.color)

      ctx.beginPath()
      ctx.moveTo(prevX, prevY)
      ctx.lineTo(star.px, star.py)
      ctx.strokeStyle = gradient
      ctx.lineWidth = size
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(star.px, star.py, size / 2, 0, Math.PI * 2)
      ctx.fillStyle = star.color
      ctx.fill()
    })
  }

  const animate = () => {
    if (canvasRef.current) {
      drawStars(canvasRef.current)
    }
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // Clear the canvas when resizing
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.fillStyle = "#000"
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        initStars(canvas.width, canvas.height)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 h-full w-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}

