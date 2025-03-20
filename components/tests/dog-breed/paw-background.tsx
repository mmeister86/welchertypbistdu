"use client";

import { useEffect, useRef } from "react";

export function PawBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pawsRef = useRef<
    { x: number; y: number; size: number; rotation: number; opacity: number }[]
  >([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load paw image
    const pawImage = new Image();
    pawImage.src = "/images/dogs/paw-print.png";
    pawImage.crossOrigin = "anonymous";

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPaws();
    };

    const initPaws = () => {
      const paws: {
        x: number;
        y: number;
        size: number;
        rotation: number;
        opacity: number;
      }[] = [];
      const count = Math.min(
        30,
        Math.floor((canvas.width * canvas.height) / 30000)
      );

      for (let i = 0; i < count; i++) {
        paws.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 15,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }

      pawsRef.current = paws;
    };

    const drawPaws = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pawsRef.current.forEach((paw) => {
        if (pawImage.complete) {
          ctx.save();
          ctx.translate(paw.x, paw.y);
          ctx.rotate((paw.rotation * Math.PI) / 180);
          ctx.globalAlpha = paw.opacity;
          ctx.drawImage(
            pawImage,
            -paw.size / 2,
            -paw.size / 2,
            paw.size,
            paw.size
          );
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(drawPaws);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Start animation when image is loaded
    pawImage.onload = () => {
      drawPaws();
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
