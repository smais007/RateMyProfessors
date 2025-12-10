"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 border border-t-0 border-r-0 border-b border-l-0 border-dotted transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div>Rate my Professor</div>
        <div className="flex gap-2">
          <Button size="sm" className="sm:size-default">
            Login
          </Button>
          <Button size="sm" className="sm:size-default">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
