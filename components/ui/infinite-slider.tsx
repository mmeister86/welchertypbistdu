"use client";
import React, { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  HTMLMotionProps,
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const adjustedVelocity = (reverse ? -1 : 1) * baseVelocity;

  // Erfasse die Breite des Sliders (eine Gruppe von Elementen)
  useEffect(() => {
    if (sliderRef.current) {
      // Wir brauchen die Breite eines Satzes von Kindern
      const childrenElements = Array.from(sliderRef.current.children);
      const childrenCount = React.Children.count(children);

      // Berechne die Breite der ersten childrenCount Elemente
      let firstGroupWidth = 0;
      for (let i = 0; i < childrenCount && i < childrenElements.length; i++) {
        const child = childrenElements[i] as HTMLElement;
        firstGroupWidth += child.offsetWidth + gap;
      }

      // Ziehe den letzten Gap ab, da dieser am Ende nicht benötigt wird
      if (childrenCount > 0) {
        firstGroupWidth -= gap;
      }

      setSliderWidth(firstGroupWidth);
    }
  }, [children, gap]);

  useAnimationFrame((time, delta) => {
    let moveBy = adjustedVelocity * (delta / 1000);

    // Adjust based on duration - lower number means faster scroll
    moveBy = moveBy * (20 / duration);

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (value) => {
    if (sliderWidth <= 0) return 0;

    // Verwende die exakte Breite eines Satzes von Kindern für den Wrap
    // Das sorgt dafür, dass die Elemente nahtlos wiederholt werden
    return wrap(-sliderWidth, 0, value % sliderWidth);
  });

  return (
    <div
      className={cn("flex w-full overflow-hidden", className)}
      ref={containerRef}
    >
      <motion.div
        ref={sliderRef}
        style={{ x, gap }}
        className="flex"
        transition={{ type: "tween", ease: "linear" }}
        {...props}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
