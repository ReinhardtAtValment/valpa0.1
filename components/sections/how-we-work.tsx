import { Eye, ListChecks, Shield } from "lucide-react";

export function HowWeWork() {
  return (
    <section className="py-24">
      {/* Section Header */}
      <div className="text-center mb-16 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
      How we deliver results
      </h2>
      </div>

      {/* Step 1: Discover reality - Left aligned */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step 1
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Discover reality
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Use process analytics and mining, operational KPIs, and stakeholder input to identify 
                the few constraints that truly limit performance.
              </p>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12">
                <Eye className="w-20 h-20 text-blue-600 mb-6" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Process variants analyzed</span>
                    <span className="font-bold text-2xl text-gray-900">127</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Bottlenecks identified</span>
                    <span className="font-bold text-2xl text-gray-900">8</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Value at stake</span>
                    <span className="font-bold text-2xl text-gray-900">$2.4M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Build portfolio management capability - Right aligned */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Card - comes first on desktop */}
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12">
                <ListChecks className="w-20 h-20 text-teal-600 mb-6" />
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="text-sm text-gray-600 mb-1">High value, low effort</div>
                    <div className="font-bold text-xl text-gray-900">Quick wins (3)</div>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <div className="text-sm text-gray-600 mb-1">Strategic investments</div>
                    <div className="font-bold text-xl text-gray-900">Major initiatives (5)</div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <div className="text-sm text-gray-600 mb-1">Deferred or removed</div>
                    <div className="font-bold text-xl text-gray-900">Low priority (12)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - comes second on desktop */}
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step 2
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build portfolio management capability
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Translate insights into a value-ranked initiative portfolio with clear owners, success measures, 
                dependencies, and sequencing. This is where SAP modernization decisions and AI agent initiatives 
                get shaped into controlled, executable work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Implement with governance and coaching - Left aligned */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step 3
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Implement with governance and coaching
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Establish cadence, decision forums, KPI tracking, and practical guardrails so delivery stays 
                controlled and teams strengthen their capability over time.
              </p>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12">
                <Shield className="w-20 h-20 text-amber-600 mb-6" />
                <div className="space-y-4 text-center">
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Governance Model
                  </div>
                  <div className="font-bold text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Continuous
                  </div>
                  <div className="text-lg text-gray-700">
                    Monitoring + Weekly Reviews
                  </div>
                  <div className="text-sm text-gray-600 pt-4">
                    Decision rights clear, progress visible, capability building
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional closing line */}
      <div className="text-center mt-12 px-4 md:px-6">
        <p className="text-lg text-gray-600">
          Delivered as a focused sprint, embedded initiative leadership, or a combination of both.
        </p>
      </div>
    </section>
  );
}
