"use client";
import { cn } from "@/lib/utils";
import {
  HTMLMotionProps,
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { ReactNode, useRef } from "react";

type InfiniteSliderProps = {
  children: ReactNode;
  duration?: number;
  baseVelocity?: number;
  gap?: number;
  reverse?: boolean;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

export function InfiniteSlider({
  children,
  duration = 20,
  baseVelocity = 100,
  gap = 16,
  reverse = false,
  className,
  ...props
}: InfiniteSliderProps) {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const adjustedVelocity = (reverse ? -1 : 1) * baseVelocity;

  useAnimationFrame((time, delta) => {
    let moveBy = adjustedVelocity * (delta / 1000);

    // Adjust based on duration - lower number means faster scroll
    moveBy = moveBy * (20 / duration);

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (value) => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    return wrap(-containerWidth, 0, value);
  });

  return (
    <div
      className={cn("flex w-full overflow-hidden", className)}
      ref={containerRef}
    >
      <motion.div style={{ x, gap }} className="flex" {...props}>
        {children}
        {children}
      </motion.div>
    </div>
  );
}
