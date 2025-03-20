"use client"

import { useEffect, useRef } from "react"

interface TVStaticBackgroundProps {
  intensity?: number
  speed?: number
}

export function TVStaticBackground({ intensity = 0.15, speed = 1 }: TVStaticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    let frameCounter = 0

    const drawStatic = () => {
      if (!ctx) return

      // Only update the static every few frames based on speed
      frameCounter++
      if (frameCounter % Math.floor(10 / speed) !== 0) {
        // Just request the next frame without redrawing
        animationRef.current = requestAnimationFrame(drawStatic)
        return
      }

      // Semi-transparent black background to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw TV static
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Only draw some pixels for a subtle effect
        if (Math.random() < intensity) {
          const value = Math.floor(Math.random() * 255)
          data[i] = value // red
          data[i + 1] = value // green
          data[i + 2] = value // blue
          data[i + 3] = Math.random() * 255 // alpha
        }
      }

      ctx.putImageData(imageData, 0, 0)
      animationRef.current = requestAnimationFrame(drawStatic)
    }

    drawStatic()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [intensity, speed])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

