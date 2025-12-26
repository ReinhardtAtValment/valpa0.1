import { Users, TrendingUp, Layers, Wrench } from "lucide-react";
import { CertificationCard } from "./certification-card";

const iconMap = {
  Users,
  TrendingUp,
  Layers,
  Wrench,
};

interface Differentiator {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface WhyValmentProps {
  headline: string;
  intro: string;
  differentiators: Differentiator[];
  closingLine: string;
  certifications: Array<{
    category: string;
    items: string[];
  }>;
}

export function WhyValment({ headline, intro, differentiators, closingLine, certifications }: WhyValmentProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {headline}
          </h2>
        </div>

        {/* Intro */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Four differentiator tiles in 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${diff.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {diff.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications & Credentials */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-8 text-center uppercase tracking-wider">
            Certifications & Credentials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl">
                <CertificationCard
                  category={cert.category}
                  items={cert.items}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional one-liner */}
        <div className="text-center">
          <p className="text-lg text-gray-600">
            {closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
