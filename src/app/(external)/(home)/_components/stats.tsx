import React from "react";

import { BookUser, GraduationCap, MessageSquareText } from "lucide-react";

import { Highlighter } from "@/components/ui/highlighter";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  return (
    <div className="container mx-auto h-56 max-w-7xl border border-t-0 border-b-0 border-dotted py-16">
      <div className="text-center">
        <p className="text-sm font-medium">
          <Highlighter action="underline" iterations={1} multiline={false} color="#000000">
            Stats
          </Highlighter>
        </p>
        <div className="py-8">
          <h1 className="text-3xl font-semibold">Rate My Professor Impact</h1>
          <p className="text-muted-foreground mx-auto max-w-4xl pt-4">
            Celebrating the milestones achieved with Rate My Professor — empowering students and transforming education
            one review at a time.
          </p>
        </div>
      </div>
      <div className="border border-dotted">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-3 p-8">
            <div className="flex flex-col items-center justify-center">
              <BookUser className="text-muted-foreground" />
              <NumberTicker value={100} className="pt-4 text-5xl font-medium tracking-tighter whitespace-pre-wrap" />
              <p className="text-muted-foreground pt-4 font-medium">Faculty Listed</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-8">
            <div className="flex flex-col items-center justify-center">
              <GraduationCap className="text-muted-foreground" />
              <NumberTicker value={100} className="pt-4 text-5xl font-medium tracking-tighter whitespace-pre-wrap" />
              <p className="text-muted-foreground pt-4 font-medium">Verified Students</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-8">
            <div className="flex flex-col items-center justify-center">
              <MessageSquareText className="text-muted-foreground" />
              <NumberTicker value={100} className="pt-4 text-5xl font-medium tracking-tighter whitespace-pre-wrap" />
              <p className="text-muted-foreground pt-4 font-medium">Total Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
