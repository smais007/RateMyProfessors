import AnimatedBorder from "./_components/animated-border";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="">
        {/*
        <CrossBorder className="p-8">
          <p>Your content here</p>
        </CrossBorder> */}

        <Hero />
      </div>
    </div>
  );
}
