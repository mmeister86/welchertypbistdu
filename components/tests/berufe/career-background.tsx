"use client"

import { useEffect, useRef } from "react"

interface CareerBackgroundProps {
  density?: number
}

export function CareerBackground({ density = 40 }: CareerBackgroundProps) {
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

    // Career elements
    const careerElements = [
      { type: "briefcase", color: "rgba(30, 64, 175, 0.05)" },
      { type: "computer", color: "rgba(30, 64, 175, 0.05)" },
      { type: "stethoscope", color: "rgba(30, 64, 175, 0.05)" },
      { type: "wrench", color: "rgba(30, 64, 175, 0.05)" },
      { type: "book", color: "rgba(30, 64, 175, 0.05)" },
      { type: "calculator", color: "rgba(30, 64, 175, 0.05)" },
    ]

    // Generate random elements
    const elements = []
    for (let i = 0; i < density; i++) {
      const element = careerElements[Math.floor(Math.random() * careerElements.length)]
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 30,
        type: element.type,
        color: element.color,
        rotation: Math.random() * Math.PI * 2,
      })
    }

    // Draw briefcase
    const drawBriefcase = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw briefcase body
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 3, size, size / 1.5)
      ctx.fillStyle = color
      ctx.fill()

      // Draw handle
      ctx.beginPath()
      ctx.rect(-size / 6, -size / 2, size / 3, size / 6)
      ctx.fillStyle = color
      ctx.fill()

      ctx.restore()
    }

    // Draw computer
    const drawComputer = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw monitor
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 2, size, size / 1.5)
      ctx.fillStyle = color
      ctx.fill()

      // Draw stand
      ctx.beginPath()
      ctx.rect(-size / 6, 0, size / 3, size / 4)
      ctx.fillStyle = color
      ctx.fill()

      ctx.restore()
    }

    // Draw stethoscope
    const drawStethoscope = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw circle part
      ctx.beginPath()
      ctx.arc(0, size / 3, size / 4, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      // Draw tube
      ctx.beginPath()
      ctx.moveTo(0, size / 3 - size / 4)
      ctx.lineTo(0, -size / 2)
      ctx.lineTo(size / 3, -size / 2)
      ctx.strokeStyle = color
      ctx.lineWidth = size / 10
      ctx.stroke()

      ctx.restore()
    }

    // Draw wrench
    const drawWrench = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw handle
      ctx.beginPath()
      ctx.rect(-size / 8, -size / 2, size / 4, size)
      ctx.fillStyle = color
      ctx.fill()

      // Draw head
      ctx.beginPath()
      ctx.arc(-size / 4, -size / 2, size / 4, 0, Math.PI * 2)
      ctx.arc(size / 4, -size / 2, size / 4, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      ctx.restore()
    }

    // Draw book
    const drawBook = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw book
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 3, size, size / 1.5)
      ctx.fillStyle = color
      ctx.fill()

      // Draw pages
      ctx.beginPath()
      ctx.moveTo(-size / 2 + size / 20, -size / 3 + size / 20)
      ctx.lineTo(size / 2 - size / 20, -size / 3 + size / 20)
      ctx.lineTo(size / 2 - size / 20, size / 3 - size / 20)
      ctx.lineTo(-size / 2 + size / 20, size / 3 - size / 20)
      ctx.closePath()
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      ctx.fill()

      ctx.restore()
    }

    // Draw calculator
    const drawCalculator = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw calculator body
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 2, size, size)
      ctx.fillStyle = color
      ctx.fill()

      // Draw screen
      ctx.beginPath()
      ctx.rect(-size / 2 + size / 10, -size / 2 + size / 10, size - size / 5, size / 4)
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      ctx.fill()

      // Draw buttons
      const buttonSize = size / 8
      const startX = -size / 2 + size / 5
      const startY = -size / 2 + size / 2

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath()
          ctx.rect(startX + j * buttonSize * 1.5, startY + i * buttonSize * 1.5, buttonSize, buttonSize)
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.fill()
        }
      }

      ctx.restore()
    }

    // Draw all elements
    const drawElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      elements.forEach((element) => {
        switch (element.type) {
          case "briefcase":
            drawBriefcase(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "computer":
            drawComputer(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "stethoscope":
            drawStethoscope(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "wrench":
            drawWrench(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "book":
            drawBook(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "calculator":
            drawCalculator(element.x, element.y, element.size, element.color, element.rotation)
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

