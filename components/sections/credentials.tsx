import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CertificationCard } from "./certification-card";
import { Award, Users, Globe2, TrendingUp } from "lucide-react";

interface CredentialsProps {
  headline: string;
  intro: string;
  certifications: Array<{
    category: string;
    items: string[];
  }>;
  background: string[];
  differentiator: string;
}

export function Credentials({ headline, intro, certifications, background, differentiator }: CredentialsProps) {
  return (
    <Section spacing="xl" background="muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          headline={headline}
          subheadline={intro}
          align="center"
          variant="standard"
        />

        {/* Stats Overview - Visual cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:from-primary/15 group-hover:to-primary/10 transition-all"></div>
            <div className="relative p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">4</div>
              <div className="text-sm text-muted-foreground">Service Areas</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl group-hover:from-secondary/15 group-hover:to-secondary/10 transition-all"></div>
            <div className="relative p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl text-center">
              <div className="inline-flex p-3 rounded-xl bg-secondary/10 text-secondary mb-4">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">3</div>
              <div className="text-sm text-muted-foreground">Continents</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl group-hover:from-accent/15 group-hover:to-accent/10 transition-all"></div>
            <div className="relative p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl text-center">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl group-hover:from-primary/15 group-hover:to-secondary/10 transition-all"></div>
            <div className="relative p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">Global</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
          </div>
        </div>

        {/* Certifications - Using reusable CertificationCard component */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-8 text-center uppercase tracking-wider">
            Certifications & Credentials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                category={cert.category}
                items={cert.items}
              />
            ))}
          </div>
        </div>

        {/* Background & Differentiator - Two columns with icons */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -z-10"></div>
            <div className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                Background
              </h3>
              <ul className="space-y-4">
                {background.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Differentiator */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl -z-10"></div>
            <div className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                What Sets Us Apart
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {differentiator}
              </p>
              
              {/* Visual accent */}
              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-secondary to-accent rounded-full opacity-60"></div>
                <div className="h-1 w-4 bg-accent rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
