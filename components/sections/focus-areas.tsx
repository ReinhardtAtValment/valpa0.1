import { Network, TrendingUp, Building2, Sparkles } from "lucide-react";

export function FocusAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Where we apply the approach
          </h2>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Choose the service area where you need support. We bring the same disciplined approach to each domain.
          </p>
        </div>

        {/* Four service area tiles in 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Tile 1: Process Analytics & Continuous Improvement */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Process Analytics & Continuous Improvement
            </h3>
            <p className="text-base font-medium text-gray-900 mb-4">
              Make process behavior visible. Build a repeatable improvement loop.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Establish data-driven improvement for business-critical SAP processes using process mining, event analytics, and BI tools. Move from intuition to evidence.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Outcomes
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Clear visibility into actual process execution</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Prioritized improvement backlog (including automation and AI candidates)</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Simple KPIs and monitoring for ongoing control</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong className="text-gray-900">Tools:</strong> SAP Signavio, SAP Business Data Cloud, Databricks, BI platforms
                </p>
              </div>
            </div>
          </div>

          {/* Tile 2: SAP Modernisation & Clean-Core Discovery */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              SAP Modernisation & Clean-Core Discovery
            </h3>
            <p className="text-base font-medium text-gray-900 mb-4">
              Reduce complexity. Safeguard your SAP investment. Enable innovation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Support SAP transformations by identifying and eliminating unnecessary customizations using the Plug and Gain approach. Create pragmatic clean-core roadmaps that enable faster upgrades and innovation.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Outcomes
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Clear view of custom code and process deviations using Plug and Gain analysis</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Process House view with Best-Run Scores and transaction analysis</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Pragmatic clean-core roadmap</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Lower long-term maintenance effort</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Faster upgrade and innovation cycles</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong className="text-gray-900">Tools:</strong> SAP S/4HANA, SAP BTP, Signavio Process Insights & Process Intelligence (Plug and Gain), LeanIX, Business Data Cloud
                </p>
              </div>
            </div>
          </div>

          {/* Tile 3: Enterprise Architecture & Transformation Governance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Enterprise Architecture & Transformation Governance
            </h3>
            <p className="text-base font-medium text-gray-900 mb-4">
              Structure for complex programs. Clarity without bureaucracy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Provide architecture governance that strengthens delivery rather than slowing it down. Clear principles, practical guidance, and integration into your transformation approach.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Outcomes
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Clear architecture principles and decision guardrails</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Coherent target architectures and roadmaps</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Reduced architectural drift and rework</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Strengthened internal EA capability</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong className="text-gray-900">Tools:</strong> LeanIX, TOGAF-based methods, architecture repositories
                </p>
              </div>
            </div>
          </div>

          {/* Tile 4: AI Governance & AI Agent Governance Foundations */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              AI Governance & AI Agent Governance Foundations
            </h3>
            <p className="text-base font-medium text-gray-900 mb-4">
              Enable AI adoption with accountability and control.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Establish governance for AI and GenAI use cases while maintaining oversight and trust. Prepare for autonomous and semi-autonomous AI agents with proper guardrails.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Outcomes
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Clear AI governance principles and decision criteria</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Integration of controls into ML and data platforms</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Reduced regulatory and reputational risk</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                    <span>Guardrails for increasing AI autonomy</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong className="text-gray-900">Tools:</strong> Databricks (MLflow, Unity Catalog), data platforms, existing compliance frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
