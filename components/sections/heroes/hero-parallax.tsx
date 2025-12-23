"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

export function HeroParallax() {
  return (
    <div className="relative">
      {/* Section 1: Main Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 text-center">
          {/* Main headline */}
          <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter mb-12">
            Turning Process,
            <br />
            Data, & Architecture
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Into Continuous Value
            </span>
          </h1>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
            We help organizations optimize processes, modernize SAP landscapes, 
            and govern AI adoption through data-driven insight and disciplined execution.
          </p>

          {/* Single elegant CTA */}
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-xl font-medium text-foreground hover:text-primary transition-colors group"
          >
            Discover how we work
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-current rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Discovery */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center py-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Step 01
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discovery That
              <br />
              Reveals Reality
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We use process mining, event analytics, and data intelligence to uncover 
              what's actually happening—not what you think is happening. Identify bottlenecks, 
              custom code complexity, architecture gaps, and AI governance risks hidden in your operations.
            </p>
            <Link
              href="/services#discovery"
              className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:gap-4 transition-all"
            >
              Explore discovery sprints
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-12">
                <TrendingUp className="w-24 h-24 text-primary mb-6" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Process Variants Identified</span>
                    <span className="font-bold text-2xl">247</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Automation Opportunities</span>
                    <span className="font-bold text-2xl">34</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Potential Time Savings</span>
                    <span className="font-bold text-2xl">40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Portfolio */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center py-24">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-12">
                <Shield className="w-24 h-24 text-secondary mb-6" />
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-sm text-muted-foreground mb-1">High Value</div>
                    <div className="font-bold text-xl">12 Initiatives Ready</div>
                  </div>
                  <div className="border-l-4 border-primary/50 pl-4">
                    <div className="text-sm text-muted-foreground mb-1">In Progress</div>
                    <div className="font-bold text-xl">8 Active Projects</div>
                  </div>
                  <div className="border-l-4 border-muted pl-4">
                    <div className="text-sm text-muted-foreground mb-1">Backlog</div>
                    <div className="font-bold text-xl">23 Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Step 02
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Portfolios That
              <br />
              Prioritize Value
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Whether it's process improvements, SAP clean-core initiatives, architecture 
              decisions, or AI use cases—every opportunity becomes a transparent initiative 
              with clear business value, effort estimates, and ownership. You see exactly what's delivering results.
            </p>
            <Link
              href="/services#portfolio"
              className="inline-flex items-center gap-2 text-lg font-medium text-secondary hover:gap-4 transition-all"
            >
              See portfolio approach
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Governance */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center py-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Step 03
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Governance That
              <br />
              Ensures Delivery
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Fractional leadership keeps your initiatives moving—whether process analytics, 
              SAP modernization, EA alignment, or AI governance. We maintain oversight, 
              track KPIs, manage risks, and ensure improvements actually ship—not just get discussed.
            </p>
            <Link
              href="/services#governance"
              className="inline-flex items-center gap-2 text-lg font-medium text-accent hover:gap-4 transition-all"
            >
              Learn about fractional roles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-12">
                <Zap className="w-24 h-24 text-accent mb-6" />
                <div className="space-y-4 text-center">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Continuous Value</div>
                  <div className="font-bold text-6xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    0.5-2
                  </div>
                  <div className="text-lg text-muted-foreground">Days per week</div>
                  <div className="text-sm text-muted-foreground pt-4">
                    Strategic guidance without full-time overhead
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to turn complexity into value?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's discuss your process, SAP, architecture, or AI governance challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-xl font-medium px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors"
          >
            Start a conversation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
