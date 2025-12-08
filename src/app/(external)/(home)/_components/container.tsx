import React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  className?: string;
}

// Responsive Container with fixed max-width but full-width dotted border
// maxWidth can be: 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'

export default function Container({ children, maxWidth = "7xl", className }: ContainerProps) {
  return (
    <div className="relative flex w-full justify-center px-4">
      {/* Border layer spanning entire screen */}
      <div className="pointer-events-none absolute inset-0 w-full border border-dotted" />

      {/* Actual content container with fixed max-width */}
      <div className={cn(`relative w-full max-w-${maxWidth} bg-background`, className)}>{children}</div>
    </div>
  );
}
