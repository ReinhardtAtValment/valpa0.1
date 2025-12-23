import { HeroCarousel } from "@/components/sections/heroes/hero-carousel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CarouselHeroPage() {
  return (
    <>
      {/* Back navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/hero-options"
          className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg text-sm hover:bg-background transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to options
        </Link>
      </div>

      <HeroCarousel />

      {/* Info card */}
      <div className="fixed bottom-4 right-4 max-w-sm bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-xl">
        <h3 className="font-bold mb-2">Option 2: Carousel Hero</h3>
        <p className="text-sm text-muted-foreground mb-3">
          4 auto-rotating slides highlighting each value proposition. Engaging and dynamic.
        </p>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-accent/10 text-accent rounded">Auto-play</span>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded">4 slides</span>
          <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">Centered</span>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Carousel Hero Option | Valment",
  description: "Rotating carousel hero section for Valment",
};
