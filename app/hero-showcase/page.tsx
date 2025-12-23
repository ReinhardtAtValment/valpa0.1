import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";

export default function HeroShowcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Demo */}
      <Hero />

      {/* Documentation Section */}
      <Section spacing="lg">
        <div className="max-w-4xl mx-auto">
          <Heading level={2} className="mb-6">
            Hero Section - Component Showcase
          </Heading>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Design Features</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Background:</strong> Gradient from primary (navy) to secondary (teal)</li>
                <li><strong>Pattern:</strong> Subtle 60px grid overlay at 2% opacity</li>
                <li><strong>Typography:</strong> Display-2xl heading with responsive sizing</li>
                <li><strong>CTAs:</strong> Accent primary button + outline secondary button</li>
                <li><strong>Trust Indicators:</strong> Three key value propositions below CTAs</li>
                <li><strong>Responsive:</strong> Mobile-first with stacked layout on small screens</li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Component Usage</h3>
              <pre className="bg-background p-4 rounded border overflow-x-auto">
                <code>{`import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Other sections... */}
    </>
  );
}`}</code>
              </pre>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Accessibility Notes</h3>
              <ul className="space-y-2 text-sm">
                <li>Semantic HTML with proper heading hierarchy (h1)</li>
                <li>High contrast text (white on dark gradient)</li>
                <li>Descriptive button text and link labels</li>
                <li>Keyboard navigable with proper focus states</li>
                <li>Icons include proper sizing for clickability</li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Files</h3>
              <ul className="space-y-1 text-sm font-mono">
                <li>📄 components/sections/hero.tsx</li>
                <li>📄 components/sections/index.ts</li>
                <li>📄 app/page.tsx (updated)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export const metadata = {
  title: "Hero Section Showcase | Valment",
  description: "Component showcase for the Valment hero section",
};
