"use client"

import { useEffect, useRef } from "react"

interface ComicBackgroundProps {
  density?: number
}

export function ComicBackground({ density = 30 }: ComicBackgroundProps) {
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

    // Comic elements
    const comicElements = [
      { type: "circle", color: "rgba(255, 0, 0, 0.1)" },
      { type: "star", color: "rgba(255, 255, 0, 0.1)" },
      { type: "pow", color: "rgba(0, 0, 255, 0.1)" },
      { type: "boom", color: "rgba(255, 0, 255, 0.1)" },
    ]

    // Generate random elements
    const elements = []
    for (let i = 0; i < density; i++) {
      const element = comicElements[Math.floor(Math.random() * comicElements.length)]
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        type: element.type,
        color: element.color,
        rotation: Math.random() * Math.PI * 2,
      })
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

    // Draw pow shape
    const drawPow = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4
        const outerX = Math.cos(angle) * size
        const outerY = Math.sin(angle) * size
        const innerAngle = angle + Math.PI / 8
        const innerX = Math.cos(innerAngle) * (size / 2)
        const innerY = Math.sin(innerAngle) * (size / 2)

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

    // Draw boom shape
    const drawBoom = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6
        const outerX = Math.cos(angle) * size
        const outerY = Math.sin(angle) * size
        const innerAngle = angle + Math.PI / 12
        const innerX = Math.cos(innerAngle) * (size / 3)
        const innerY = Math.sin(innerAngle) * (size / 3)

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
          case "circle":
            ctx.beginPath()
            ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2)
            ctx.fillStyle = element.color
            ctx.fill()
            break
          case "star":
            drawStar(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "pow":
            drawPow(element.x, element.y, element.size, element.color, element.rotation)
            break
          case "boom":
            drawBoom(element.x, element.y, element.size, element.color, element.rotation)
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

