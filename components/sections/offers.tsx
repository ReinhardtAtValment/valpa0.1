import { Zap, Target, RefreshCw } from "lucide-react";

export function Offers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ways to work together
          </h2>
        </div>

        {/* Intro line */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Choose the engagement format that matches your urgency and capacity. Each format applies across all service areas 
            and is designed to create measurable progress and strengthen internal capability.
          </p>
        </div>

        {/* Three offer tiles */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Offer 1: Discovery Sprint */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Discovery Sprint
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Best when you need clarity fast.</span> You get a 
              fact-based view of what limits performance, a value-ranked initiative portfolio, clear owners and 
              KPIs, and a realistic roadmap.
            </p>
          </div>

          {/* Offer 2: Embedded Initiative Leadership */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Embedded Initiative Leadership
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Best when you need delivery support inside the team.</span> You get 
              hands-on leadership to run cadence, align stakeholders, manage dependencies and risks, and drive one 
              initiative through implementation and adoption.
            </p>
          </div>

          {/* Offer 3: Continuous Improvement Operating System */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Continuous Improvement Operating System
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Best when you want improvement to become repeatable.</span> You get 
              portfolio routines, KPI cadence, decision forums, roles, and guardrails so SAP modernization, process 
              initiatives, and AI agent implementation stay controlled, measurable, and sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
