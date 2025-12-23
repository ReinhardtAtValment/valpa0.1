import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureCard } from "@/components/ui/feature-card";
import { ArrowRight, Search, Settings, Zap, Shield, TrendingUp } from "lucide-react";

export default function ComponentsShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Section spacing="lg" background="muted">
        <div className="text-center space-y-4">
          <Heading level={1} size="display-xl">
            Component Library
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reusable UI components for the Valment Partners website
          </p>
        </div>
      </Section>

      {/* Buttons */}
      <Section>
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Buttons
            </Heading>
            <p className="text-muted-foreground mb-6">
              Various button styles and sizes for different use cases
            </p>
          </div>

          {/* Button Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="accent">Accent / CTA</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="outline-primary">Outline Primary</Button>
              <Button variant="outline-secondary">Outline Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* Buttons with Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent">
                Get Started <ArrowRight />
              </Button>
              <Button variant="secondary">
                <Search /> Search
              </Button>
              <Button variant="outline-primary">
                <Settings /> Settings
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Headings */}
      <Section background="muted">
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Typography - Headings
            </Heading>
            <p className="text-muted-foreground mb-6">
              Semantic heading components with flexible sizing
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Display 2XL</p>
              <Heading level={1} size="display-2xl">
                Optimize Your Processes
              </Heading>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display XL</p>
              <Heading level={1} size="display-xl">
                Process Intelligence & AI Governance
              </Heading>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display LG (Default H1)</p>
              <Heading level={1}>
                Evidence-Based Process Improvement
              </Heading>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display MD (Default H2)</p>
              <Heading level={2}>
                From Process Discovery to Portfolio Governance
              </Heading>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display SM (Default H3)</p>
              <Heading level={3}>
                Core Competencies
              </Heading>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Gradient Heading</p>
              <Heading level={2} gradient>
                Gradient from Primary to Secondary
              </Heading>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section>
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Cards
            </Heading>
            <p className="text-muted-foreground mb-6">
              Standard card components for content organization
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  A standard card with title and description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This is the content area of the card. You can put any content here.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary-50/50">
              <CardHeader>
                <CardTitle className="text-primary">Primary Styled</CardTitle>
                <CardDescription>
                  Card with primary color accent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Custom styling with primary brand color for emphasis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-secondary-50/50">
              <CardHeader>
                <CardTitle className="text-secondary">Secondary Styled</CardTitle>
                <CardDescription>
                  Card with secondary color accent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Custom styling with secondary brand color.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Feature Cards */}
      <Section background="muted">
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Feature Cards
            </Heading>
            <p className="text-muted-foreground mb-6">
              Specialized cards for features and services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Search}
              title="Process Discovery"
              description="Identify improvement opportunities through data-driven process analysis"
              variant="default"
            />

            <FeatureCard
              icon={Shield}
              title="AI Governance"
              description="Safe deployment and control of AI agents with proper oversight"
              variant="primary"
            />

            <FeatureCard
              icon={TrendingUp}
              title="Value Transparency"
              description="Track ROI and business value across all initiatives"
              variant="secondary"
            />

            <FeatureCard
              icon={Zap}
              title="Automation"
              description="Identify and implement automation opportunities"
              variant="accent"
            />

            <FeatureCard
              icon={Settings}
              title="Portfolio Management"
              description="Prioritize and manage improvement initiatives"
              variant="default"
            >
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </FeatureCard>

            <FeatureCard
              icon={Shield}
              title="With Link"
              description="This card is clickable and navigates to a page"
              href="/services"
              variant="primary"
            />
          </div>
        </div>
      </Section>

      {/* Sections */}
      <Section>
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Section Component
            </Heading>
            <p className="text-muted-foreground mb-6">
              Layout container with consistent spacing and backgrounds
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="border rounded-lg p-4">
              <p className="font-semibold mb-2">Width Variants:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code>narrow</code> - max-w-4xl (1024px)</li>
                <li><code>default</code> - max-w-7xl (1280px)</li>
                <li><code>wide</code> - max-w-[1600px]</li>
                <li><code>full</code> - no max width</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold mb-2">Spacing Variants:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code>none</code> - No vertical padding</li>
                <li><code>sm</code> - Small padding (8-12)</li>
                <li><code>default</code> - Standard padding (12-20)</li>
                <li><code>lg</code> - Large padding (16-24)</li>
                <li><code>xl</code> - Extra large padding (20-32)</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold mb-2">Background Variants:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code>default</code> - White background</li>
                <li><code>muted</code> - Light gray background</li>
                <li><code>primary</code> - Primary color background</li>
                <li><code>secondary</code> - Secondary color background</li>
                <li><code>accent</code> - Accent color background</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Background Examples */}
      <Section background="primary" spacing="lg">
        <div className="text-center space-y-4">
          <Heading level={2} className="text-primary-foreground">
            Primary Background Section
          </Heading>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            This section demonstrates the primary background variant with white text.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="accent">Call to Action</Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      <Section background="secondary" spacing="lg">
        <div className="text-center space-y-4">
          <Heading level={2} className="text-secondary-foreground">
            Secondary Background Section
          </Heading>
          <p className="text-secondary-foreground/90 max-w-2xl mx-auto">
            This section demonstrates the secondary background variant with the deeper teal color.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="accent">Get Started</Button>
            <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
