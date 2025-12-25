import { Users, Network, Database } from "lucide-react";

export function BuiltFor() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            For teams that want results that last
          </h2>
        </div>

        {/* Intro line */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Valment works with leaders who need measurable progress in operations while building 
            internal capability, not external dependency.
          </p>
        </div>

        {/* Three persona tiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Tile 1: Operations and transformation leaders */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Operations and transformation leaders
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When execution is slow, priorities drift, and outcomes are hard to sustain.
            </p>
          </div>

          {/* Tile 2: Enterprise architects and capability owners */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700">
                <Network className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Enterprise architects and capability owners
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When capability-based planning exists on paper but lacks portfolio management capability 
              and a delivery cadence.
            </p>
          </div>

          {/* Tile 3: Process, data, and platform teams */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <Database className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Process, data, and platform teams
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When process insight is available, but it does not translate into decisions, sequencing, 
              and controlled implementation.
            </p>
          </div>
        </div>

        {/* Tools line - Prominent */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
            Modern Transformation Tool Portfolio
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">
            SAP Signavio · SAP LeanIX · SAP Business Data Cloud · SAP BTP · Databricks
          </p>
        </div>
      </div>
    </section>
  );
}
