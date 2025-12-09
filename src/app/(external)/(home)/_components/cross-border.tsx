"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface CrossBorderProps {
  children?: React.ReactNode;
  className?: string;
  /** Size of the dot at intersections */
  dotSize?: number;
  /** How far the lines extend beyond the border */
  lineExtend?: number;
  /** Color of the intersection dots */
  dotColor?: string;
}

export default function CrossBorder({
  children,
  className,
  dotSize = 6,
  lineExtend = 20,
  dotColor = "currentColor",
}: CrossBorderProps) {
  // Faded mask patterns
  const fadedH = `linear-gradient(to right, transparent, white 15%, white 85%, transparent)`;
  const fadedV = `linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)`;

  return (
    <div className={cn("relative", className)}>
      {/* Top border with fade */}
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 border-t border-dotted"
        style={{
          maskImage: fadedH,
          WebkitMaskImage: fadedH,
        }}
      />

      {/* Bottom border with fade */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 border-b border-dotted"
        style={{
          maskImage: fadedH,
          WebkitMaskImage: fadedH,
        }}
      />

      {/* Left border with fade */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-0 border-l border-dotted"
        style={{
          maskImage: fadedV,
          WebkitMaskImage: fadedV,
        }}
      />

      {/* Right border with fade */}
      <div
        className="pointer-events-none absolute top-0 right-0 bottom-0 border-r border-dotted"
        style={{
          maskImage: fadedV,
          WebkitMaskImage: fadedV,
        }}
      />

      {/* Top-left corner */}
      <div className="pointer-events-none absolute" style={{ top: 0, left: 0 }}>
        {/* Vertical line extending up */}
        <div
          className="absolute w-px border-l border-dotted"
          style={{
            height: lineExtend,
            bottom: 0,
            left: 0,
            transform: "translateY(-100%)",
            maskImage: `linear-gradient(to bottom, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent, white)`,
          }}
        />
        {/* Horizontal line extending left */}
        <div
          className="absolute h-px border-t border-dotted"
          style={{
            width: lineExtend,
            top: 0,
            right: 0,
            transform: "translateX(-100%)",
            maskImage: `linear-gradient(to right, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to right, transparent, white)`,
          }}
        />
        {/* Dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
            top: -dotSize / 2,
            left: -dotSize / 2,
          }}
        />
      </div>

      {/* Top-right corner */}
      <div className="pointer-events-none absolute" style={{ top: 0, right: 0 }}>
        {/* Vertical line extending up */}
        <div
          className="absolute w-px border-l border-dotted"
          style={{
            height: lineExtend,
            bottom: 0,
            right: 0,
            transform: "translateY(-100%)",
            maskImage: `linear-gradient(to bottom, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent, white)`,
          }}
        />
        {/* Horizontal line extending right */}
        <div
          className="absolute h-px border-t border-dotted"
          style={{
            width: lineExtend,
            top: 0,
            left: 0,
            transform: "translateX(100%)",
            maskImage: `linear-gradient(to left, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to left, transparent, white)`,
          }}
        />
        {/* Dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
            top: -dotSize / 2,
            right: -dotSize / 2,
          }}
        />
      </div>

      {/* Bottom-left corner */}
      <div className="pointer-events-none absolute" style={{ bottom: 0, left: 0 }}>
        {/* Vertical line extending down */}
        <div
          className="absolute w-px border-l border-dotted"
          style={{
            height: lineExtend,
            top: 0,
            left: 0,
            transform: "translateY(100%)",
            maskImage: `linear-gradient(to top, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to top, transparent, white)`,
          }}
        />
        {/* Horizontal line extending left */}
        <div
          className="absolute h-px border-t border-dotted"
          style={{
            width: lineExtend,
            bottom: 0,
            right: 0,
            transform: "translateX(-100%)",
            maskImage: `linear-gradient(to right, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to right, transparent, white)`,
          }}
        />
        {/* Dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
            bottom: -dotSize / 2,
            left: -dotSize / 2,
          }}
        />
      </div>

      {/* Bottom-right corner */}
      <div className="pointer-events-none absolute" style={{ bottom: 0, right: 0 }}>
        {/* Vertical line extending down */}
        <div
          className="absolute w-px border-l border-dotted"
          style={{
            height: lineExtend,
            top: 0,
            right: 0,
            transform: "translateY(100%)",
            maskImage: `linear-gradient(to top, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to top, transparent, white)`,
          }}
        />
        {/* Horizontal line extending right */}
        <div
          className="absolute h-px border-t border-dotted"
          style={{
            width: lineExtend,
            bottom: 0,
            left: 0,
            transform: "translateX(100%)",
            maskImage: `linear-gradient(to left, transparent, white)`,
            WebkitMaskImage: `linear-gradient(to left, transparent, white)`,
          }}
        />
        {/* Dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
            bottom: -dotSize / 2,
            right: -dotSize / 2,
          }}
        />
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
