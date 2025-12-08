"use client";

import React from "react";

import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Review from "../../_components/review";

export default function FacultyDrtails() {
  return (
    <div className="container mx-auto h-screen max-w-7xl border border-t-0 border-b-0 border-dotted">
      <div className="pt-8">
        <div className="border border-t border-r-0 border-l-0 border-dotted">
          <p className="text-muted-foreground px-8 text-xs font-semibold uppercase">Overview</p>
        </div>
      </div>
      {/* Information section */}
      <div className="border border-t-0 border-r-0 border-b border-l-0 border-dotted">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="">
            <div className="px-8 pt-8 pb-4">
              <div className="flex flex-col items-center">
                <Avatar className="size-20">
                  <AvatarImage src="/src/assets/sir.jpg" alt="@shadcn" />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
                <h1 className="pt-2 text-2xl font-semibold">Faculty Name</h1>
                <p className="text-muted-foreground text-center text-xs">
                  Lecturer in the CSE department at <span>American International University - Bangladesh</span>
                </p>
                <div className="w-full pt-4">
                  <Button className="w-full">
                    Rate{" "}
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-4 border border-r-0 border-b-0 border-l-0 border-dotted">
              <div className="flex items-center justify-between">
                <div className="w-1/2 px-8 py-4 text-center">
                  <h1 className="pb-2 text-xl font-medium">87%</h1>
                  <p className="text-muted-foreground text-xs">Would take again</p>
                </div>

                <div className="h-20 border-l border-dotted" />

                <div className="w-1/2 px-8 py-4 text-center">
                  <h1 className="pb-2 text-xl font-medium">3.7</h1>
                  <p className="text-muted-foreground text-xs">Level of Difficulty</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full border border-t-0 border-b-0 border-dotted">
            <div className="">
              <div className="px-8 py-8 text-center">
                <p className="text-muted-foreground pt-8 text-sm">Overall Quality</p>
                <p className="text-6xl">
                  4.6<span className="text-muted-foreground text-2xl font-normal">/5</span>
                </p>
                <p className="text-muted-foreground">
                  Based on <span className="underline">120 reviews</span>
                </p>
              </div>
              <div className="mt-8 border border-t border-r-0 border-b-0 border-l-0 border-dotted p-4">
                <p className="text-muted-foreground text-[12px] font-medium">Professor Name&apos;s Top Tags</p>
                <div className="flex w-full flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Participation matters</Badge>
                  <Badge variant="secondary">Group projects</Badge>
                  <Badge variant="secondary">Caring</Badge>
                  <Badge variant="secondary">Get ready to read</Badge>
                  <Badge variant="secondary">Inspirational</Badge>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-8 pt-8">
              <p className="text-muted-foreground text-lg font-medium">Rating Distribution</p>
              <div className="mt-6 flex flex-col gap-2">
                {[
                  { rating: 5, count: "2.0k", percentage: 85, color: "bg-emerald-500" },
                  { rating: 4, count: "1.0k", percentage: 65, color: "bg-emerald-400" },
                  { rating: 3, count: "500", percentage: 40, color: "bg-amber-400" },
                  { rating: 2, count: "200", percentage: 20, color: "bg-sky-400" },
                  { rating: 1, count: "0k", percentage: 5, color: "bg-orange-400" },
                ].map((item, index) => (
                  <div key={item.rating} className="flex items-center gap-3">
                    <span className="text-muted-foreground w-4 text-sm"> {item.rating}</span>
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
                      <motion.div
                        className={`h-full ${item.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground w-10 text-right text-sm">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}
