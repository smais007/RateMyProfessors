"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface BorderLineProps {
  isTop: boolean;
  shouldAnimate: boolean;
  glowColor: string;
  duration: number;
}

function BorderLine({ isTop, shouldAnimate, glowColor, duration }: BorderLineProps) {
  return (
    <div className={cn("absolute right-0 left-0 h-px overflow-hidden", isTop ? "top-0" : "bottom-0")}>
      {/* Base dotted border */}
      <div className="absolute inset-0 border-t border-dotted" />

      {/* Animated glow that moves from center to edges */}
      {shouldAnimate && (
        <>
          {/* Left glow - small dot moving from center to left edge */}
          <motion.div
            className="absolute top-0 h-px"
            style={{
              width: 40,
              background: `linear-gradient(to left, ${glowColor}, ${glowColor}, transparent)`,
              boxShadow: `0 0 10px 3px ${glowColor}`,
            }}
            initial={{ left: "50%", x: "-50%", opacity: 1 }}
            animate={{ left: "0%", x: "-100%", opacity: 0 }}
            transition={{
              duration: duration,
              ease: "easeOut",
            }}
          />

          {/* Right glow - small dot moving from center to right edge */}
          <motion.div
            className="absolute top-0 h-px"
            style={{
              width: 40,
              background: `linear-gradient(to right, ${glowColor}, ${glowColor}, transparent)`,
              boxShadow: `0 0 10px 3px ${glowColor}`,
            }}
            initial={{ right: "50%", x: "50%", opacity: 1 }}
            animate={{ right: "0%", x: "100%", opacity: 0 }}
            transition={{
              duration: duration,
              ease: "easeOut",
            }}
          />

          {/* Center burst effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: glowColor,
              boxShadow: `0 0 15px 5px ${glowColor}`,
            }}
            initial={{ width: 10, height: 10, opacity: 1 }}
            animate={{ width: 0, height: 0, opacity: 0 }}
            transition={{
              duration: duration * 0.3,
              ease: "easeOut",
            }}
          />
        </>
      )}
    </div>
  );
}

interface AnimatedBorderProps {
  children?: React.ReactNode;
  className?: string;
  /** Color of the glow effect */
  glowColor?: string;
  /** Duration of the animation in seconds */
  duration?: number;
  /** Position of the border: top, bottom, or both */
  position?: "top" | "bottom" | "both";
}

export default function AnimatedBorder({
  children,
  className,
  glowColor = "var(--foreground)",
  duration = 1,
  position = "top",
}: AnimatedBorderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasTriggeredRef.current) return;

    let hasScrolled = false;

    const checkAndAnimate = () => {
      if (hasTriggeredRef.current) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (isVisible && hasScrolled) {
        hasTriggeredRef.current = true;
        setShouldAnimate(true);
      }
    };

    const handleScroll = () => {
      hasScrolled = true;
      checkAndAnimate();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {(position === "top" || position === "both") && (
        <BorderLine isTop={true} shouldAnimate={shouldAnimate} glowColor={glowColor} duration={duration} />
      )}
      {(position === "bottom" || position === "both") && (
        <BorderLine isTop={false} shouldAnimate={shouldAnimate} glowColor={glowColor} duration={duration} />
      )}
      {children}
    </div>
  );
}
