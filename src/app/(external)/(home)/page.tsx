import { ChevronRight } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

import Features from "./_components/features";
import { GridPattern } from "./_components/grid-pattern";
import SearchBar from "./_components/search-bar";
import Stats from "./_components/stats";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl">
        <div className="h-dvh border border-t-0 border-b-0 border-dotted">
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg">
            <GridPattern
              width={40}
              height={40}
              x={-1}
              y={-1}
              className={cn("mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,white_40%,transparent_100%)]")}
            />

            <div className="absolute inset-0 text-center">
              <div className="pt-44">
                <div className="z-10 flex items-center justify-center">
                  <div className="group text-foreground hover:bg-accent/50 focus:ring-ring mb-4 hidden h-8 cursor-pointer items-center rounded-full border bg-white px-3 py-0.5 text-xs font-medium shadow-xs transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:inline-flex sm:text-sm">
                    <div className="text-primary w-fit py-0.5 text-center text-xs sm:text-sm">New!</div>
                    <div className="bg-border mx-2 h-full w-px shrink-0"></div>
                    <AnimatedShinyText className="inline-flex items-center justify-center">
                      <span>Introducing NextGen Faculty review platform</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </AnimatedShinyText>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold">
                  Find a professor at <span className="underline">American International University - Bangladesh </span>
                </h1>

                <div className="mx-auto inline-flex w-full justify-center pt-14">
                  <SearchBar />
                </div>

                <div className="pt-20">
                  <Stats />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
}
