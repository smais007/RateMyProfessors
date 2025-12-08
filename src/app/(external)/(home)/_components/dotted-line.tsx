import React from "react";

import { cn } from "@/lib/utils";

interface DottedLineProps {
  orientation?: "horizontal" | "vertical";
  /** Size of each dot */
  dotSize?: number;
  /** Spacing between dots */
  spacing?: number;
  /** Color of the dots - uses CSS color value or Tailwind CSS variable */
  color?: string;
  className?: string;
}

const DottedLine: React.FC<DottedLineProps> = ({
  orientation = "horizontal",
  dotSize = 1,
  spacing = 6,
  color = "var(--border)",
  className = "",
}) => {
  const gradientDirection = orientation === "horizontal" ? "to right" : "to bottom";
  const sizeClass = orientation === "horizontal" ? "h-px w-full" : "w-px h-full";

  return (
    <div
      className={cn(sizeClass, className)}
      style={{
        backgroundImage: `linear-gradient(${gradientDirection}, ${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: orientation === "horizontal" ? `${spacing}px ${dotSize}px` : `${dotSize}px ${spacing}px`,
        backgroundRepeat: orientation === "horizontal" ? "repeat-x" : "repeat-y",
      }}
    />
  );
};

export default DottedLine;
