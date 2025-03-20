"use client"

import { useEffect, useRef } from "react"

export function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Bubble class
    class Bubble {
      x: number
      y: number
      radius: number
      speed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.radius = Math.random() * 20 + 5
        this.speed = Math.random() * 3 + 1
      }

      update() {
        this.y -= this.speed

        // Reset bubble when it goes off screen
        if (this.y < -this.radius * 2) {
          this.x = Math.random() * canvas.width
          this.y = canvas.height + this.radius
        }
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
        ctx.fill()
      }
    }

    // Create bubbles
    const bubbles: Bubble[] = []
    const bubbleCount = Math.floor(canvas.width / 30) // Adjust bubble density

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((bubble) => {
        bubble.update()
        bubble.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

