import { Users, TrendingUp, Layers, Wrench } from "lucide-react";
import { CertificationCard } from "./certification-card";

interface WhyValmentProps {
  certifications: Array<{
    category: string;
    items: string[];
  }>;
}

export function WhyValment({ certifications }: WhyValmentProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Valment
          </h2>
        </div>

        {/* Intro line */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Valment is designed for organizations that want senior support inside the team, with a 
            capability-first mindset and a focus on outcomes that can be sustained.
          </p>
        </div>

        {/* Four tiles in 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Tile 1: Embedded, accountable leadership */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Embedded, accountable leadership
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Works alongside your team, drives cadence, and takes responsibility for execution, not just recommendations.
            </p>
          </div>

          {/* Tile 2: Capability-first, not dependency-first */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Capability-first, not dependency-first
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Builds the routines, skills, and ownership so your organization can continue improving without permanent external support.
            </p>
          </div>

          {/* Tile 3: Business and technical depth */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <Layers className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Business and technical depth
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Bridges operations, process, data, architecture, and governance so decisions translate into delivery.
            </p>
          </div>

          {/* Tile 4: Modern tool fluency */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                <Wrench className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Modern tool fluency
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Hands-on with SAP Signavio, SAP LeanIX, SAP Business Data Cloud, SAP BTP, and Databricks to connect 
              insight, planning, and implementation.
            </p>
          </div>
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
            Engage for a sprint, embed for delivery, or build the operating system for continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
