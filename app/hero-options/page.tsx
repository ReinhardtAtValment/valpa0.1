import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeroOptions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-lg font-semibold">Hero Section Options</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Choose Your Hero Style</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Three professional, modern approaches to showcase Valment's value proposition. 
            Each option uses large typography, strategic white space, and elegant interactions.
          </p>
          <p className="text-lg text-muted-foreground">
            Click on any option below to see the full experience.
          </p>
        </div>
      </section>

      {/* Options Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Option 1: Split Hero */}
          <Link
            href="/hero-options/split"
            className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all hover:shadow-xl"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  60/40
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Split Layout
                </div>
              </div>
            </div>
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Option 1: Full-Width Split
              </h3>
              <p className="text-muted-foreground mb-4">
                Asymmetric layout with massive typography on the left, abstract visual on the right. 
                Bold, confident, modern.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Huge headline (7-8xl)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Elegant text-based CTAs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Animated gradient shapes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Trust indicators built-in
                </li>
              </ul>
              <div className="mt-6 text-sm font-medium text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                View full experience →
              </div>
            </div>
          </Link>

          {/* Option 2: Carousel */}
          <Link
            href="/hero-options/carousel"
            className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all hover:shadow-xl"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary/10 to-accent/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  4×
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Rotating Slides
                </div>
              </div>
            </div>
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Option 2: Carousel Hero
              </h3>
              <p className="text-muted-foreground mb-4">
                Auto-rotating slides, each highlighting one key value proposition. 
                Smooth transitions, engaging storytelling.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  4 focused messages
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Auto-play with controls
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Centered, impactful layout
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Icons + gradient backgrounds
                </li>
              </ul>
              <div className="mt-6 text-sm font-medium text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                View full experience →
              </div>
            </div>
          </Link>

          {/* Option 3: Parallax */}
          <Link
            href="/hero-options/parallax"
            className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all hover:shadow-xl"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  5↓
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Scroll Sections
                </div>
              </div>
            </div>
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Option 3: Parallax Scroll
              </h3>
              <p className="text-muted-foreground mb-4">
                Multi-section storytelling that reveals on scroll. Each section focuses on 
                one step of your methodology.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  5 full-screen sections
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Scroll-triggered reveals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Progressive storytelling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Visual data cards
                </li>
              </ul>
              <div className="mt-6 text-sm font-medium text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                View full experience →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <h3 className="text-2xl font-bold mb-8">Quick Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="text-left p-4 font-semibold">Split Hero</th>
                <th className="text-left p-4 font-semibold">Carousel</th>
                <th className="text-left p-4 font-semibold">Parallax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 text-muted-foreground">First impression</td>
                <td className="p-4">Bold, asymmetric</td>
                <td className="p-4">Dynamic, engaging</td>
                <td className="p-4">Immersive, story-driven</td>
              </tr>
              <tr>
                <td className="p-4 text-muted-foreground">Content depth</td>
                <td className="p-4">Single message</td>
                <td className="p-4">4 messages</td>
                <td className="p-4">5 sections (deep)</td>
              </tr>
              <tr>
                <td className="p-4 text-muted-foreground">User interaction</td>
                <td className="p-4">Minimal</td>
                <td className="p-4">Click/auto-rotate</td>
                <td className="p-4">Scroll</td>
              </tr>
              <tr>
                <td className="p-4 text-muted-foreground">Best for</td>
                <td className="p-4">Clear, immediate impact</td>
                <td className="p-4">Multiple messages</td>
                <td className="p-4">Full methodology</td>
              </tr>
              <tr>
                <td className="p-4 text-muted-foreground">Mobile experience</td>
                <td className="p-4">Clean, stacks well</td>
                <td className="p-4">Swipeable slides</td>
                <td className="p-4">Scroll story</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommendation */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">💡 Recommendation</h3>
          <p className="text-lg mb-4">
            All three options are professional and modern. Your choice depends on:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent">1</span>
              </div>
              <div>
                <strong className="text-foreground">Choose Split</strong> if you want maximum 
                impact with minimal distraction—one clear message, bold typography
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent">2</span>
              </div>
              <div>
                <strong className="text-foreground">Choose Carousel</strong> if you want to 
                highlight all 4 value propositions equally and create engagement
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent">3</span>
              </div>
              <div>
                <strong className="text-foreground">Choose Parallax</strong> if you want to 
                tell the complete story of your methodology through an immersive scroll experience
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Hero Options | Valment",
  description: "Compare three professional hero section designs for the Valment website",
};
