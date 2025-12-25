import Link from "next/link";
import { Eye, ListChecks, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroStatic() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 max-w-6xl">
        {/* Headline and Subheadline */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build lasting capabilities in process, data, and governance.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Make SAP modernization succeed and accelerate AI transformation and AI agent implementation. 
            Use process intelligence and portfolio management capability to prioritize the right work and 
            implement it with control.
          </p>
        </div>

        {/* Hero Tiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Tile 1: See what is real */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              See what is real
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Process analytics and mining to expose bottlenecks, variants, delays, and complexity drivers.
            </p>
          </div>

          {/* Tile 2: Decide what matters */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700">
                <ListChecks className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Decide what matters
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Portfolio management capability to rank initiatives by value, effort, risk, and dependencies.
            </p>
          </div>

          {/* Tile 3: Deliver with control */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Deliver with control
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Governance, cadence, and coaching so improvements land safely and create measurable value.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Start a conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/approach">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-full transition-all"
            >
              See how we work
            </Button>
          </Link>
        </div>

        {/* Micro-line under buttons */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Embedded initiative leadership or focused sprints, depending on what you need.
          </p>
        </div>
      </div>
    </section>
  );
}
