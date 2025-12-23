import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Search, BarChart3, Shield } from "lucide-react";

interface ValuePropositionProps {
  challenge: {
    headline: string;
    content: string;
  };
  solution: {
    headline: string;
    content: string;
    points: Array<{
      label: string;
      description: string;
    }>;
    closing: string;
  };
}

const iconMap = {
  "Process intelligence": Search,
  "Portfolio management": BarChart3,
  "Value-Driven Governance": Shield,
};

export function ValueProposition({ challenge, solution }: ValuePropositionProps) {
  return (
    <Section spacing="xl" background="muted">
      <div className="max-w-7xl mx-auto">
        {/* Challenge */}
        <div className="mb-20">
          <SectionHeader
            headline={challenge.headline}
            variant="challenge"
            align="center"
          />
          <div className="text-xl text-muted-foreground leading-relaxed space-y-4 text-center max-w-4xl mx-auto">
            {challenge.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <SectionHeader
            headline={solution.headline}
            subheadline={solution.content}
            variant="standard"
            align="center"
          />
          
          {/* Three pillars as visual cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {solution.points.map((point, index) => {
              const Icon = iconMap[point.label as keyof typeof iconMap];
              const colors = ["primary", "secondary", "accent"];
              const color = colors[index];
              
              return (
                <div key={index} className="relative group h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${color}/10 to-${color}/5 rounded-2xl group-hover:from-${color}/15 group-hover:to-${color}/10 transition-all`}></div>
                  
                  {/* Card content */}
                  <div className="relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className={`inline-flex p-4 rounded-xl bg-${color}/10 text-${color} mb-6 self-start`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {point.label}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing statement */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl -z-10"></div>
              <p className="text-lg text-muted-foreground leading-relaxed p-8">
                {solution.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
