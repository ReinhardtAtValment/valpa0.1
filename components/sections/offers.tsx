import { Zap, Target, RefreshCw } from "lucide-react";

const iconMap = {
  Zap,
  Target,
  RefreshCw,
};

interface OfferItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bestWhen: string;
  gradient: string;
}

interface OffersProps {
  headline: string;
  intro: string;
  items: OfferItem[];
}

export function Offers({ headline, intro, items }: OffersProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {headline}
          </h2>
        </div>

        {/* Intro line */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Three offer tiles */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.bestWhen}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
