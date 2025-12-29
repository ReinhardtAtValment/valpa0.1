import { Network, TrendingUp, Shield, Target, CheckCircle2 } from "lucide-react";

const iconMap = {
  Network,
  TrendingUp,
  Shield,
  Target,
};

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    tagline: string;
    icon: string;
    purpose: string;
    context: {
      headline: string;
      points: string[];
    };
    delivers: {
      headline: string;
      points: string[];
    };
    deliverables: {
      headline: string;
      items: string[];
    };
    howItWorks: {
      headline: string;
      description: string;
      steps: string[];
    };
    value: {
      headline: string;
      points: string[];
    };
    tooling: {
      headline: string;
      tools: string;
    };
  };
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || iconMap.Network;
  
  return (
    <div id={service.id} className="scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {service.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Purpose
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.purpose}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Context */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {service.context.headline}
            </h3>
            <ul className="space-y-3">
              {service.context.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivers */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {service.delivers.headline}
            </h3>
            <ul className="space-y-3">
              {service.delivers.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables - Full Width */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            {service.deliverables.headline}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.items.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10">
                <div className="flex gap-3">
                  <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-foreground font-medium leading-relaxed">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl -z-10"></div>
          <div className="p-8">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {service.howItWorks.headline}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.howItWorks.description}
            </p>
            <ul className="space-y-4">
              {service.howItWorks.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Value and Tooling */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Value */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {service.value.headline}
            </h3>
            <ul className="space-y-3">
              {service.value.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tooling */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {service.tooling.headline}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.tooling.tools}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
