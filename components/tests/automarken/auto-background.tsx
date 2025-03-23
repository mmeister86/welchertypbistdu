"use client";

import { useEffect, useRef } from "react";

interface AutoBackgroundProps {
  density?: number;
}

// Define types for our elements
type ElementType =
  | "car"
  | "tire"
  | "steeringWheel"
  | "wrench"
  | "gasStation"
  | "trafficLight";

interface BackgroundElement {
  x: number;
  y: number;
  size: number;
  type: ElementType;
  color: string;
  rotation: number;
}

export function AutoBackground({ density = 40 }: AutoBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Define possible elements
    const autoElements: Array<{ type: ElementType; color: string }> = [
      { type: "car", color: "rgba(30, 64, 175, 0.05)" },
      { type: "tire", color: "rgba(30, 64, 175, 0.05)" },
      { type: "steeringWheel", color: "rgba(30, 64, 175, 0.05)" },
      { type: "wrench", color: "rgba(30, 64, 175, 0.05)" },
      { type: "gasStation", color: "rgba(30, 64, 175, 0.05)" },
      { type: "trafficLight", color: "rgba(30, 64, 175, 0.05)" },
    ];

    // Generate random elements
    const elements: BackgroundElement[] = [];
    for (let i = 0; i < density; i++) {
      const element =
        autoElements[Math.floor(Math.random() * autoElements.length)];
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 30,
        type: element.type,
        color: element.color,
        rotation: Math.random() * Math.PI * 2,
      });
    }

    // Draw car
    const drawCar = (
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw car body
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 4, size, size / 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw car top
      ctx.beginPath();
      ctx.moveTo(-size / 4, -size / 4);
      ctx.lineTo(-size / 3, -size / 2);
      ctx.lineTo(size / 3, -size / 2);
      ctx.lineTo(size / 4, -size / 4);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // Draw wheels
      ctx.beginPath();
      ctx.arc(-size / 3, size / 4, size / 6, 0, Math.PI * 2);
      ctx.arc(size / 3, size / 4, size / 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore();
    };

    // Draw tire
    const drawTire = (
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw outer tire
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw inner rim
      ctx.beginPath();
      ctx.arc(0, 0, size / 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fill();

      // Draw hub
      ctx.beginPath();
      ctx.arc(0, 0, size / 8, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw tire treads
      for (let i = 0; i < 8; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 4);
        ctx.beginPath();
        ctx.rect(-size / 40, -size / 2, size / 20, size / 6);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
    };

    // Draw steering wheel
    const drawSteeringWheel = (
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw outer wheel
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = size / 10;
      ctx.stroke();

      // Draw spokes
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 1.5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size / 2 + size / 10);
        ctx.strokeStyle = color;
        ctx.lineWidth = size / 15;
        ctx.stroke();
        ctx.restore();
      }

      // Draw center
      ctx.beginPath();
      ctx.arc(0, 0, size / 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore();
    };

    // Draw wrench
    const drawWrench = (
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw handle
      ctx.beginPath();
      ctx.rect(-size / 8, -size / 2, size / 4, size);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw head
      ctx.beginPath();
      ctx.arc(-size / 4, -size / 2, size / 4, 0, Math.PI * 2);
      ctx.arc(size / 4, -size / 2, size / 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore();
    };

    // Draw gas station
    const drawGasStation = (
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw station building
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 3, size / 1.5, size / 1.5);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw roof
      ctx.beginPath();
      ctx.moveTo(-size / 2, -size / 3);
      ctx.lineTo(-size / 1.8, -size / 2);
      ctx.lineTo(size / 6, -size / 2);
      ctx.lineTo(size / 3, -size / 3);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // Draw pump
      ctx.beginPath();
      ctx.rect(size / 4, -size / 4, size / 5, size / 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw nozzle
      ctx.beginPath();
      ctx.moveTo(size / 4 + size / 10, -size / 6);
      ctx.lineTo(size / 2 + size / 10, -size / 6);
      ctx.strokeStyle = color;
      ctx.lineWidth = size / 20;
      ctx.stroke();

      ctx.restore();
    };

    // Draw traffic light
    const drawTrafficLight = (
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw light housing
      ctx.beginPath();
      ctx.rect(-size / 4, -size / 2, size / 2, size);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw lights
      const lightRadius = size / 10;
      const lightSpacing = size / 4;

      // Red light
      ctx.beginPath();
      ctx.arc(0, -size / 3, lightRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 60, 60, 0.1)";
      ctx.fill();

      // Yellow light
      ctx.beginPath();
      ctx.arc(0, 0, lightRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 60, 0.1)";
      ctx.fill();

      // Green light
      ctx.beginPath();
      ctx.arc(0, size / 3, lightRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(60, 255, 60, 0.1)";
      ctx.fill();

      ctx.restore();
    };

    // Draw all elements
    const drawElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        switch (element.type) {
          case "car":
            drawCar(
              element.x,
              element.y,
              element.size,
              element.color,
              element.rotation
            );
            break;
          case "tire":
            drawTire(
              element.x,
              element.y,
              element.size,
              element.color,
              element.rotation
            );
            break;
          case "steeringWheel":
            drawSteeringWheel(
              element.x,
              element.y,
              element.size,
              element.color,
              element.rotation
            );
            break;
          case "wrench":
            drawWrench(
              element.x,
              element.y,
              element.size,
              element.color,
              element.rotation
            );
            break;
          case "gasStation":
            drawGasStation(
              element.x,
              element.y,
              element.size,
              element.color,
              element.rotation
            );
            break;
          case "trafficLight":
            drawTrafficLight(
              element.x,
              element.y,
              element.size,
              element.color,
              element.rotation
            );
            break;
        }
      });
    };

    drawElements();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
