import React from "react";

import { ChevronRight } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

import { GridPattern } from "./grid-pattern";
import SearchBar from "./search-bar";

export default function Hero() {
  return (
    <div className="border-left border-right mx-auto h-screen max-w-7xl">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className={cn("mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,white_40%,transparent_100%)]")}
        />

        <div className="absolute inset-0 text-center">
          <div className="px-4 pt-28 sm:px-6 sm:pt-36 md:pt-44">
            <div className="z-10 flex items-center justify-center">
              <div className="group text-foreground hover:bg-accent/50 focus:ring-ring mb-4 hidden h-8 cursor-pointer items-center rounded-full border bg-white px-3 py-0.5 text-xs font-medium shadow-xs transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:inline-flex sm:text-sm">
                <div className="text-primary w-fit py-0.5 text-center text-xs sm:text-sm">New!</div>
                <div className="bg-border mx-2 h-full w-px shrink-0"></div>
                <AnimatedShinyText className="inline-flex items-center justify-center">
                  <span className="hidden md:inline">Introducing NextGen Faculty review platform</span>
                  <span className="md:hidden">NextGen Faculty reviews</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </AnimatedShinyText>
              </div>
            </div>
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              Find a professor at{" "}
              <span className="underline decoration-2 underline-offset-4">
                American International University - Bangladesh
              </span>
            </h1>
            <div className="mx-auto inline-flex w-full max-w-md justify-center px-4 pt-8 sm:pt-10 md:pt-14">
              <SearchBar />
            </div>
            {/* <div className="pt-12 sm:pt-16 md:pt-20">
              <Stats />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
