export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-display-lg font-bold text-foreground">
            Valment Design System
          </h1>
          <p className="text-xl text-muted-foreground">
            Brand colors, typography, and design tokens
          </p>
        </div>

        {/* Color Palette */}
        <section className="space-y-8">
          <h2 className="text-display-sm font-semibold">Color Palette</h2>
          
          {/* Primary - Navy Blue */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Primary - Navy Blue</h3>
            <p className="text-muted-foreground">Trust, professionalism, data</p>
            <div className="grid grid-cols-11 gap-2">
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-50 border border-border"></div>
                <p className="text-xs text-center">50</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-100 border border-border"></div>
                <p className="text-xs text-center">100</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-200"></div>
                <p className="text-xs text-center">200</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-300"></div>
                <p className="text-xs text-center">300</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-400"></div>
                <p className="text-xs text-center">400</p>
              </div>
              <div className="space-y-2 ring-2 ring-accent">
                <div className="h-20 rounded-md bg-primary-500"></div>
                <p className="text-xs text-center font-semibold">500 ★</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-600"></div>
                <p className="text-xs text-center">600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-700"></div>
                <p className="text-xs text-center">700</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-800"></div>
                <p className="text-xs text-center text-white">800</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-900"></div>
                <p className="text-xs text-center text-white">900</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-950"></div>
                <p className="text-xs text-center text-white">950</p>
              </div>
            </div>
          </div>

          {/* Secondary - Teal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Secondary - Deep Teal</h3>
            <p className="text-muted-foreground">Innovation, growth, clarity</p>
            <div className="grid grid-cols-11 gap-2">
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-50 border border-border"></div>
                <p className="text-xs text-center">50</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-100 border border-border"></div>
                <p className="text-xs text-center">100</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-200"></div>
                <p className="text-xs text-center">200</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-300"></div>
                <p className="text-xs text-center">300</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-400"></div>
                <p className="text-xs text-center">400</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-500"></div>
                <p className="text-xs text-center">500</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-600"></div>
                <p className="text-xs text-center text-white">600</p>
              </div>
              <div className="space-y-2 ring-2 ring-accent">
                <div className="h-20 rounded-md bg-secondary-700"></div>
                <p className="text-xs text-center text-white font-semibold">700 ★</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-800"></div>
                <p className="text-xs text-center text-white">800</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-900"></div>
                <p className="text-xs text-center text-white">900</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-950"></div>
                <p className="text-xs text-center text-white">950</p>
              </div>
            </div>
          </div>

          {/* Accent - Amber */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Accent - Amber</h3>
            <p className="text-muted-foreground">Energy, action, value</p>
            <div className="grid grid-cols-11 gap-2">
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-50 border border-border"></div>
                <p className="text-xs text-center">50</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-100 border border-border"></div>
                <p className="text-xs text-center">100</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-200"></div>
                <p className="text-xs text-center">200</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-300"></div>
                <p className="text-xs text-center">300</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-400"></div>
                <p className="text-xs text-center">400</p>
              </div>
              <div className="space-y-2 ring-2 ring-primary">
                <div className="h-20 rounded-md bg-accent-500"></div>
                <p className="text-xs text-center font-semibold">500 ★</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-600"></div>
                <p className="text-xs text-center">600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-700"></div>
                <p className="text-xs text-center text-white">700</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-800"></div>
                <p className="text-xs text-center text-white">800</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-900"></div>
                <p className="text-xs text-center text-white">900</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-950"></div>
                <p className="text-xs text-center text-white">950</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Usage Examples */}
        <section className="space-y-8">
          <h2 className="text-display-sm font-semibold">Color Usage Examples</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Primary Button */}
            <div className="space-y-4">
              <h3 className="font-semibold">Primary Actions</h3>
              <button className="w-full rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary-600 transition-colors">
                Primary Button
              </button>
              <button className="w-full rounded-md border-2 border-primary px-6 py-3 text-primary font-medium hover:bg-primary-50 transition-colors">
                Primary Outline
              </button>
            </div>

            {/* Secondary Button */}
            <div className="space-y-4">
              <h3 className="font-semibold">Secondary Actions</h3>
              <button className="w-full rounded-md bg-secondary px-6 py-3 text-secondary-foreground font-medium hover:bg-secondary-800 transition-colors">
                Secondary Button
              </button>
              <button className="w-full rounded-md border-2 border-secondary px-6 py-3 text-secondary font-medium hover:bg-secondary-50 transition-colors">
                Secondary Outline
              </button>
            </div>

            {/* Accent Button */}
            <div className="space-y-4">
              <h3 className="font-semibold">Accent / CTA</h3>
              <button className="w-full rounded-md bg-accent px-6 py-3 text-accent-foreground font-medium hover:bg-accent-600 transition-colors">
                Call to Action
              </button>
              <button className="w-full rounded-md border-2 border-accent px-6 py-3 text-accent font-medium hover:bg-accent-50 transition-colors">
                Accent Outline
              </button>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <h2 className="text-display-sm font-semibold">Typography</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Display 2XL</p>
              <h1 className="text-display-2xl font-bold">
                Optimize Your Processes
              </h1>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display XL</p>
              <h1 className="text-display-xl font-bold">
                Process Intelligence & AI Governance
              </h1>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display LG (H1)</p>
              <h1 className="text-display-lg font-bold">
                Evidence-Based Process Improvement
              </h1>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display MD (H2)</p>
              <h2 className="text-display-md font-semibold">
                From Process Discovery to Portfolio Governance
              </h2>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Display SM (H3)</p>
              <h3 className="text-display-sm font-semibold">
                Core Competencies
              </h3>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Text XL</p>
              <p className="text-xl">
                We help organizations discover improvement opportunities, prioritize automation and AI initiatives, and govern the portfolio so value stays transparent.
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Text Base</p>
              <p className="text-base">
                Through process discovery, we identify a portfolio of improvements, corrections, and AI agent opportunities—then help you govern and control that portfolio to deliver measurable business value.
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Text SM</p>
              <p className="text-sm text-muted-foreground">
                4-6 weeks to build an evidence-based improvement portfolio
              </p>
            </div>
          </div>
        </section>

        {/* Cards and Surfaces */}
        <section className="space-y-8">
          <h2 className="text-display-sm font-semibold">Cards & Surfaces</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 space-y-3">
              <h3 className="text-xl font-semibold">Default Card</h3>
              <p className="text-muted-foreground">
                This is a standard card with border and background.
              </p>
            </div>

            <div className="rounded-lg border-2 border-primary bg-primary-50 p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Primary Card</h3>
              <p className="text-primary-700">
                Highlighted with primary brand color.
              </p>
            </div>

            <div className="rounded-lg bg-secondary text-secondary-foreground p-6 space-y-3">
              <h3 className="text-xl font-semibold">Secondary Card</h3>
              <p className="text-secondary-100">
                Full background in deep teal color.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-8 pb-16">
          <h2 className="text-display-sm font-semibold">Spacing Scale</h2>
          <p className="text-muted-foreground">Extended spacing utilities for larger layouts</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-muted-foreground">18 (4.5rem)</div>
              <div className="h-4 bg-muted" style={{ width: '4.5rem' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-muted-foreground">88 (22rem)</div>
              <div className="h-4 bg-muted" style={{ width: '22rem' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm text-muted-foreground">100 (25rem)</div>
              <div className="h-4 bg-muted" style={{ width: '25rem' }}></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
