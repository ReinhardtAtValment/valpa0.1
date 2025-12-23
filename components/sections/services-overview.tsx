import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Network, TrendingUp, Shield, Target } from "lucide-react";

const iconMap = {
  Network,
  TrendingUp,
  Shield,
  Target,
};

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  outcomes: string[];
  tools: string;
  cta: {
    text: string;
    href: string;
  };
}

interface ServicesOverviewProps {
  headline: string;
  subheadline: string;
  items: ServiceItem[];
}

export function ServicesOverview({ headline, subheadline, items }: ServicesOverviewProps) {
  return (
    <Section spacing="xl" background="default">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          headline={headline}
          subheadline={subheadline}
          align="center"
          variant="standard"
        />

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || iconMap.Network;
            
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {service.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, index) => (
                        <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Tools:</strong> {service.tools}
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link
                    href={service.cta.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    {service.cta.text}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
