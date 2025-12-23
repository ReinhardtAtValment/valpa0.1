import { HeroSplit } from "@/components/sections/heroes/hero-split";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SplitHeroPage() {
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

      <HeroSplit />

      {/* Info card */}
      <div className="fixed bottom-4 right-4 max-w-sm bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-xl">
        <h3 className="font-bold mb-2">Option 1: Split Hero</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Bold asymmetric layout with huge typography and abstract visual. Immediate impact.
        </p>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-accent/10 text-accent rounded">7-8xl type</span>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded">60/40 split</span>
          <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">Minimal</span>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Split Hero Option | Valment",
  description: "Full-width split layout hero section for Valment",
};
