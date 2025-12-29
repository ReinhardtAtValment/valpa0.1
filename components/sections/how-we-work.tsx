import { Eye, ListChecks, Shield, CheckCircle2 } from "lucide-react";
import { StatsVisual } from "./approach/stats-visual";
import { PortfolioVisual } from "./approach/portfolio-visual";
import { CommitmentVisual } from "./approach/commitment-visual";

const iconMap = {
  Eye,
  ListChecks,
  Shield,
};

// More flexible interfaces to match JSON structure
interface VisualData {
  type: string;
  title?: string;
  stats?: Array<{ label: string; value: string; color: string }>;
  items?: Array<{ label: string; count: string; description: string; color: string }>;
  footer?: string | { label: string; value: string };
  mainValue?: string;
  mainLabel?: string;
  details?: Array<{ label: string; value: string }>;
}

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
  youGet: string[];
  visual: VisualData;
  gradient: string;
}

interface HowWeWorkProps {
  headline: string;
  intro?: string;
  steps: Step[];
  closingLine: string;
}

export function HowWeWork({ headline, intro, steps, closingLine }: HowWeWorkProps) {
  const renderVisual = (visual: VisualData) => {
    if (visual.type === "stats" && visual.stats && visual.title) {
      return (
        <StatsVisual
          title={visual.title}
          stats={visual.stats as Array<{ label: string; value: string; color: "blue" | "teal" | "amber" }>}
          footer={typeof visual.footer === "object" ? visual.footer : undefined}
        />
      );
    }
    if (visual.type === "portfolio" && visual.items && visual.title) {
      return (
        <PortfolioVisual
          title={visual.title}
          items={visual.items as Array<{ label: string; count: string; description: string; color: "green" | "blue" | "gray" }>}
          footer={typeof visual.footer === "string" ? visual.footer : undefined}
        />
      );
    }
    if (visual.type === "commitment" && visual.title && visual.mainValue && visual.mainLabel && visual.details) {
      return (
        <CommitmentVisual
          title={visual.title}
          mainValue={visual.mainValue}
          mainLabel={visual.mainLabel}
          details={visual.details}
        />
      );
    }
    return null;
  };

  return (
    <section className="py-24">
      {/* Section Header */}
      <div className="text-center mb-16 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {headline}
        </h2>
        {intro && (
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {intro}
          </p>
        )}
      </div>

      {/* Step 1: Discovery - Content Left, Visual Right */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step {steps[0].number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${steps[0].gradient} flex items-center justify-center`}>
                  {(() => {
                    const Icon = iconMap[steps[0].icon as keyof typeof iconMap];
                    return Icon ? <Icon className="h-5 w-5 text-white" /> : null;
                  })()}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {steps[0].title}
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {steps[0].description}
              </p>

              {/* You Get */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  You get
                </h3>
                <ul className="space-y-2">
                  {steps[0].youGet.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Card - Right */}
            <div className="lg:sticky lg:top-24">
              {renderVisual(steps[0].visual)}
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Portfolio - Content Left, Visual Right */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step {steps[1].number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${steps[1].gradient} flex items-center justify-center`}>
                  {(() => {
                    const Icon = iconMap[steps[1].icon as keyof typeof iconMap];
                    return Icon ? <Icon className="h-5 w-5 text-white" /> : null;
                  })()}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {steps[1].title}
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {steps[1].description}
              </p>

              {/* You Get */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  You get
                </h3>
                <ul className="space-y-2">
                  {steps[1].youGet.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Card - Right */}
            <div className="lg:sticky lg:top-24">
              {renderVisual(steps[1].visual)}
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Governance - Content Left, Visual Right */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step {steps[2].number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${steps[2].gradient} flex items-center justify-center`}>
                  {(() => {
                    const Icon = iconMap[steps[2].icon as keyof typeof iconMap];
                    return Icon ? <Icon className="h-5 w-5 text-white" /> : null;
                  })()}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {steps[2].title}
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {steps[2].description}
              </p>

              {/* You Get */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  You get
                </h3>
                <ul className="space-y-2">
                  {steps[2].youGet.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Card - Right */}
            <div className="lg:sticky lg:top-24">
              {renderVisual(steps[2].visual)}
            </div>
          </div>
        </div>
      </div>

      {/* Closing line */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-center text-lg text-gray-600 leading-relaxed">
            {closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
