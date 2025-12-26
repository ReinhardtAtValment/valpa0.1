import { Network, TrendingUp, Building2, Sparkles } from "lucide-react";

const iconMap = {
  Network,
  TrendingUp,
  Building2,
  Sparkles,
};

interface FocusArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  outcomes: string[];
  tools: string;
}

interface FocusAreasProps {
  headline: string;
  intro: string;
  areas: FocusArea[];
}

export function FocusAreas({ headline, intro, areas }: FocusAreasProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {headline}
          </h2>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Four service area tiles in 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {areas.map((area) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap];
            return (
              <div key={area.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-base font-medium text-gray-900 mb-4">
                  {area.tagline}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {area.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-700">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      <strong className="text-gray-900">Tools:</strong> {area.tools}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
