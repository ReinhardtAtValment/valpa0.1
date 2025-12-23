"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSplit() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-full lg:w-3/5 px-8 lg:px-16 xl:px-24 py-24">
        <div className="max-w-3xl">
          {/* Small eyebrow text */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Process Intelligence & AI Governance
            </span>
          </div>

          {/* Massive headline */}
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Turning
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Complexity
            </span>
            <br />
            Into Value
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            We help organizations optimize processes, modernize SAP landscapes, 
            and govern AI adoption through data-driven insight and disciplined execution.
          </p>

          {/* Elegant CTAs */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Explore our approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Book a conversation →
            </Link>
          </div>

          {/* Trust indicators - subtle */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground text-2xl mb-1">15+</div>
                <div>Years Experience</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-2xl mb-1">SAP & Databricks</div>
                <div>Certified Expertise</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-2xl mb-1">TOGAF & GRCP</div>
                <div>Governance Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block lg:w-2/5 h-screen relative">
        {/* Gradient shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          {/* Animated shapes */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Overlay pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
    </section>
  );
}
