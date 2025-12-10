import React from "react";

import { BookUser, GraduationCap, MessageSquareText } from "lucide-react";

import { Highlighter } from "@/components/ui/highlighter";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-sm font-medium">
          <Highlighter action="underline" iterations={1} multiline={false} color="#000000">
            Stats
          </Highlighter>
        </p>
        <div className="py-4 sm:py-6 md:py-8">
          <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">Rate My Professor Impact</h1>
          <p className="text-muted-foreground mx-auto max-w-4xl px-2 pt-2 text-sm sm:pt-4 sm:text-base">
            Celebrating the milestones achieved with Rate My Professor — empowering students and transforming education
            one review at a time.
          </p>
        </div>
      </div>
      <div className="border border-dotted">
        <div className="grid grid-cols-1 divide-y divide-dotted sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex flex-col items-center justify-center gap-2 p-4 sm:gap-3 sm:p-6 md:p-8">
            <div className="flex flex-col items-center justify-center">
              <BookUser className="text-muted-foreground h-5 w-5 sm:h-6 sm:w-6" />
              <NumberTicker
                value={100}
                className="pt-2 text-3xl font-medium tracking-tighter whitespace-pre-wrap sm:pt-4 sm:text-4xl md:text-5xl"
              />
              <p className="text-muted-foreground pt-2 text-sm font-medium sm:pt-4 sm:text-base">Faculty Listed</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-4 sm:gap-3 sm:p-6 md:p-8">
            <div className="flex flex-col items-center justify-center">
              <GraduationCap className="text-muted-foreground h-5 w-5 sm:h-6 sm:w-6" />
              <NumberTicker
                value={100}
                className="pt-2 text-3xl font-medium tracking-tighter whitespace-pre-wrap sm:pt-4 sm:text-4xl md:text-5xl"
              />
              <p className="text-muted-foreground pt-2 text-sm font-medium sm:pt-4 sm:text-base">Verified Students</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-4 sm:gap-3 sm:p-6 md:p-8">
            <div className="flex flex-col items-center justify-center">
              <MessageSquareText className="text-muted-foreground h-5 w-5 sm:h-6 sm:w-6" />
              <NumberTicker
                value={100}
                className="pt-2 text-3xl font-medium tracking-tighter whitespace-pre-wrap sm:pt-4 sm:text-4xl md:text-5xl"
              />
              <p className="text-muted-foreground pt-2 text-sm font-medium sm:pt-4 sm:text-base">Total Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
