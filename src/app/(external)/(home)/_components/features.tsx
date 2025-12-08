import React from "react";

import { Highlighter } from "@/components/ui/highlighter";

const features = [
  {
    title: "Identity",
    subtitle: "Sign in with your official university email — only real students get in.",
  },
  {
    title: "Anonymity",
    subtitle: "All reviews appear under a Shadow ID; your identity stays private.",
  },
  {
    title: "Reviews",
    subtitle: "Structured feedback with ratings, difficulty, attendance, grades, tags, and full text.",
  },
  {
    title: "Ratings",
    subtitle: "Weighted scoring ensures recent reviews count more, keeping results fair and accurate.",
  },
  {
    title: "Moderation",
    subtitle: "Automatic filters, human oversight, and reputation penalties keep content helpful, not harmful.",
  },
  {
    title: "Control",
    subtitle: "Easily manage your profile, review history, bookmarks, and account settings in one place.",
  },
];

export default function Features() {
  return (
    <div className="border border-r-0 border-l-0 border-dotted">
      <div className="container mx-auto max-w-7xl border border-t-0 border-b-0 border-dotted px-8 py-16">
        <div className="text-center">
          <p className="text-sm font-medium">
            <Highlighter action="underline" iterations={1} multiline={false} color="#000000">
              Features
            </Highlighter>
          </p>
          <div className="py-8">
            <h1 className="text-3xl font-semibold">All Insights at Your Fingertips</h1>
            <p className="text-muted-foreground mx-auto max-w-4xl pt-4">
              Discover everything you need to make informed academic decisions — verified reviews, detailed ratings,
              anonymous feedback, and intelligent moderation. Honest student voices, structured for clarity, all in one
              place.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 border border-t-0 border-b-0 border-dotted pb-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="border border-dotted px-8 py-12">
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
