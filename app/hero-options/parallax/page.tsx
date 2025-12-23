import { HeroParallax } from "@/components/sections/heroes/hero-parallax";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ParallaxHeroPage() {
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

      <HeroParallax />

      {/* Info card */}
      <div className="fixed bottom-4 right-4 max-w-sm bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-xl">
        <h3 className="font-bold mb-2">Option 3: Parallax Scroll</h3>
        <p className="text-sm text-muted-foreground mb-3">
          5 full-screen sections revealing your complete methodology through scroll. Immersive storytelling.
        </p>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-accent/10 text-accent rounded">5 sections</span>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded">Scroll</span>
          <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">Deep</span>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Parallax Hero Option | Valment",
  description: "Scroll-based parallax hero sections for Valment",
};
