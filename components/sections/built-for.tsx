import { Users, Network, Database } from "lucide-react";

const iconMap = {
  Users,
  Network,
  Database,
};

interface Persona {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface BuiltForProps {
  headline: string;
  intro: string;
  personas: Persona[];
  tools: {
    headline: string;
    items: string[];
  };
}

export function BuiltFor({ headline, intro, personas, tools }: BuiltForProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Title */}
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

        {/* Three persona tiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, index) => {
            const Icon = iconMap[persona.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${persona.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {persona.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {persona.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tools box */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
            {tools.headline}
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">
            {tools.items.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
