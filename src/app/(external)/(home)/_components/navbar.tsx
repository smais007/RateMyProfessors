import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-dotted py-3.5 backdrop-blur-md">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <p>Rate my Professor</p>
        </div>
        <div className="flex items-center justify-between gap-1.5">
          <Button variant="outline">Login</Button>
          <Button>Let&apos;s Start</Button>
        </div>
      </nav>
    </header>
  );
}
