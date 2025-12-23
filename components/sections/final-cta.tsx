import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

interface FinalCtaProps {
  headline: string;
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export function FinalCta({ headline, description, cta }: FinalCtaProps) {
  return (
    <Section spacing="xl" background="default">
      <div className="max-w-6xl mx-auto relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl -z-10">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative py-20 px-8 lg:px-16 text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex">
            <div className="p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
              <MessageCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          <Heading level={2} size="display-lg" className="mb-6">
            {headline}
          </Heading>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild variant="accent" size="lg" className="min-w-[220px]">
              <Link href={cta.primary.href}>
                <Calendar className="mr-2 w-5 h-5" />
                {cta.primary.text}
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="min-w-[220px]">
              <Link href={cta.secondary.href}>
                {cta.secondary.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground pt-8 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>No long-term commitments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Part-time & advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Focused on your capability</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
