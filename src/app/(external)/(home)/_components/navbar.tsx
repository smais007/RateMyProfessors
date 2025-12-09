import React from "react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="border border-t-0 border-r-0 border-b border-l-0 border-dotted">
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
