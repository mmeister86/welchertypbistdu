"use client"

import { useEffect, useRef } from "react"

interface DCBackgroundProps {
  density?: number
}

export function DCBackground({ density = 30 }: DCBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

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

    // DC elements
    const dcElements = [
      { type: "bat", color: "rgba(255, 255, 255, 0.05)" },
      { type: "lightning", color: "rgba(255, 255, 0, 0.05)" },
      { type: "shield", color: "rgba(0, 0, 255, 0.05)" },
      { type: "star", color: "rgba(255, 0, 0, 0.05)" },
    ]

    // Generate random elements
    const elements: { x: number; y: number; size: number; type: string; color: string; rotation: number }[] = []
    for (let i = 0; i < density; i++) {
      const element = dcElements[Math.floor(Math.random() * dcElements.length)]
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        type: element.type,
        color: element.color,
        rotation: Math.random() * Math.PI * 2,
      })
    }

    // Draw bat shape
    const drawBat = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw bat silhouette
      ctx.beginPath()
      ctx.moveTo(0, -size / 3)
      ctx.bezierCurveTo(size / 3, -size / 2, size / 2, -size / 4, size / 2, 0)
      ctx.bezierCurveTo(size / 2, size / 4, size / 3, size / 3, 0, size / 3)
      ctx.bezierCurveTo(-size / 3, size / 3, -size / 2, size / 4, -size / 2, 0)
      ctx.bezierCurveTo(-size / 2, -size / 4, -size / 3, -size / 2, 0, -size / 3)

      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Draw lightning shape
    const drawLightning = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(size / 6, -size / 6)
      ctx.lineTo(-size / 6, size / 6)
      ctx.lineTo(0, size / 2)
      ctx.lineTo(size / 6, size / 6)
      ctx.lineTo(-size / 6, -size / 6)
      ctx.closePath()

      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Draw shield shape
    const drawShield = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.bezierCurveTo(size / 2, -size / 3, size / 2, size / 3, 0, size / 2)
      ctx.bezierCurveTo(-size / 2, size / 3, -size / 2, -size / 3, 0, -size / 2)

      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Draw star shape
    const drawStar = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
        const outerX = Math.cos(angle) * size
        const outerY = Math.sin(angle) * size
        const innerAngle = angle + Math.PI / 5
        const innerX = Math.cos(innerAngle) * (size / 2.5)
        const innerY = Math.sin(innerAngle) * (size / 2.5)

        if (i === 0) {
          ctx.moveTo(outerX, outerY)
        } else {
          ctx.lineTo(outerX, outerY)
        }
        ctx.lineTo(innerX, innerY)
      }
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Draw all elements
    const drawElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      elements.forEach((element) => {
        switch (element.type) {
          case "bat":
            drawBat(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "lightning":
            drawLightning(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "shield":
            drawShield(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "star":
            drawStar(element.x, element.y, element.size, element.color, element.rotation)
            break
        }
      })
    }

    drawElements()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [density])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
