"use client"

import { useEffect, useRef } from "react"

interface SnowflakeProps {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

interface SnowBackgroundProps {
  snowflakeCount?: number
  speed?: number
}

export function SnowBackground({ snowflakeCount = 100, speed = 1 }: SnowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const snowflakesRef = useRef<SnowflakeProps[]>([])
  const animationRef = useRef<number>(0)

  const initSnowflakes = (width: number, height: number) => {
    const snowflakes: SnowflakeProps[] = []

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speed: (Math.random() * 1 + 0.5) * speed,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    snowflakesRef.current = snowflakes
  }

  const drawSnowflakes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height)

    snowflakesRef.current.forEach((snowflake) => {
      ctx.beginPath()
      ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
      ctx.fill()

      // Update position
      snowflake.y += snowflake.speed

      // Add slight horizontal movement
      snowflake.x += Math.sin(snowflake.y * 0.01) * 0.5

      // Reset if snowflake goes off screen
      if (snowflake.y > height) {
        snowflake.y = 0
        snowflake.x = Math.random() * width
      }
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initSnowflakes(canvas.width, canvas.height)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const animate = () => {
      drawSnowflakes(ctx, canvas.width, canvas.height)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [snowflakeCount, speed])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

