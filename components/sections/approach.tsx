import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Heading } from "@/components/ui/heading";
import { TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";

const iconMap = {
  TrendingUp,
  Shield,
  Zap,
};

interface ApproachStep {
  number: string;
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  icon: string;
  stats: Array<{
    label: string;
    value: string;
    unit?: string;
  }>;
  statDescription?: string;
  cta: {
    text: string;
    href: string;
  };
}

interface ApproachProps {
  headline: string;
  subheadline: string;
  steps: ApproachStep[];
}

export function Approach({ headline, subheadline, steps }: ApproachProps) {
  return (
    <div className="relative">
      {/* Introduction - no Section wrapper here, just the header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-24">
        <SectionHeader
          headline={headline}
          subheadline={subheadline}
          align="center"
          variant="standard"
        />
      </div>

      {/* Step 1 */}
      <Section spacing="xl" background={steps[0] && "default"}>
        {steps[0] && <ApproachStep step={steps[0]} alignment="left" index={0} />}
      </Section>

      {/* Step 2 */}
      <Section spacing="xl" background="muted">
        {steps[1] && <ApproachStep step={steps[1]} alignment="right" index={1} />}
      </Section>

      {/* Step 3 */}
      <Section spacing="xl" background="default">
        {steps[2] && <ApproachStep step={steps[2]} alignment="left" index={2} />}
      </Section>
    </div>
  );
}

interface ApproachStepProps {
  step: ApproachStep;
  alignment: "left" | "right";
  index: number;
}

function ApproachStep({ step, alignment, index }: ApproachStepProps) {
  const Icon = iconMap[step.icon as keyof typeof iconMap] || iconMap.TrendingUp;
  const colors = ["primary", "secondary", "accent"];
  const color = colors[index % 3];

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-16">
      <div className={`grid lg:grid-cols-2 gap-16 items-center ${alignment === "right" ? "lg:grid-flow-dense" : ""}`}>
        {/* Content */}
        <div className={alignment === "right" ? "lg:col-start-2" : ""}>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Step {step.number}
            </span>
          </div>
          <Heading level={3} size="display-md" className="mb-6">
            {step.title.line1}
            <br />
            {step.title.line2}
          </Heading>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {step.description}
          </p>
          <Link
            href={step.cta.href}
            className={`inline-flex items-center gap-2 text-lg font-medium text-${color} hover:gap-4 transition-all`}
          >
            {step.cta.text}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Visual Card */}
        <div className={alignment === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}/20 to-${color === "primary" ? "secondary" : color === "secondary" ? "accent" : "primary"}/20 rounded-3xl blur-3xl`}></div>
            <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-12">
              <Icon className={`w-24 h-24 text-${color} mb-6`} />
              
              {step.statDescription ? (
                // Governance step - centered layout
                <div className="space-y-4 text-center">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {step.stats[0].label}
                  </div>
                  <div className={`font-bold text-6xl bg-gradient-to-r from-${color} to-${color === "primary" ? "secondary" : "primary"} bg-clip-text text-transparent`}>
                    {step.stats[0].value}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {step.stats[0].unit}
                  </div>
                  <div className="text-sm text-muted-foreground pt-4">
                    {step.statDescription}
                  </div>
                </div>
              ) : (
                // Discovery & Portfolio steps - list layout
                <div className="space-y-4">
                  {step.stats.map((stat, idx) => {
                    const isPortfolio = step.number === "02";
                    
                    if (isPortfolio) {
                      // Portfolio step - colored borders
                      const borderColors = ["accent", "primary/50", "muted"];
                      return (
                        <div key={idx} className={`border-l-4 border-${borderColors[idx]} pl-4`}>
                          <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                          <div className="font-bold text-xl">{stat.value}</div>
                        </div>
                      );
                    } else {
                      // Discovery step - standard layout
                      return (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{stat.label}</span>
                          <span className="font-bold text-2xl">{stat.value}</span>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
