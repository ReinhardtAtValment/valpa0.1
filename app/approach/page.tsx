import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { SectionNav } from "@/components/layout/section-nav";
import {
  Search,
  BarChart3,
  Shield,
  CheckCircle2,
  Target,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

// Import approach content from JSON
import approachContent from "@/content/approach.json";

export default function ApproachPage() {
  const content = approachContent;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "discovery", label: "Discovery & Baseline" },
    { id: "portfolio", label: "Value-Based Portfolio" },
    { id: "governance", label: "Governance & Enablement" },
    { id: "value", label: "Value" },
  ];

  return (
    <main>
      <SectionNav sections={sections} />

      {/* Overview Section */}
      <Section id="overview" background="default" spacing="default">
        <div className="container mx-auto px-6">
          <SectionHeader
            headline={content.overview.headline}
            subheadline={content.overview.subheadline}
            align="center"
            variant="standard"
          />
          
          {/* How to Start Guide */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-semibold text-teal-900 uppercase tracking-wider">
                  How to Start
                </span>
              </div>
              <p className="text-lg text-gray-800 font-medium">
                {content.overview.howToStart}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 1: Discovery Sprints */}
      <Section id="discovery" background="muted" spacing="default">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step {content.discovery.number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {content.discovery.headline}
                </h2>
              </div>

              <p className="text-sm text-teal-700 font-medium mb-6">
                {content.discovery.tagline} • {content.discovery.duration}
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {content.discovery.purpose}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    What Happens
                  </h3>
                  <ul className="space-y-2">
                    {content.discovery.whatHappens.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {content.discovery.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Best For
                  </h3>
                  <ul className="space-y-2">
                    {content.discovery.bestFor.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <Target className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual Card - Right */}
            <div className="lg:sticky lg:top-24">
              <Card className="relative overflow-hidden border-0 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-700/10"></div>
                <CardContent className="p-8 relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Example Discovery Outcomes
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Stat 1 */}
                    <div className="border-l-4 border-blue-600 pl-4">
                      <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                        Process Variants Identified
                      </div>
                      <div className="text-4xl font-bold text-gray-900">247</div>
                    </div>

                    {/* Stat 2 */}
                    <div className="border-l-4 border-teal-600 pl-4">
                      <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                        Automation Opportunities
                      </div>
                      <div className="text-4xl font-bold text-gray-900">34</div>
                    </div>

                    {/* Stat 3 */}
                    <div className="border-l-4 border-amber-500 pl-4">
                      <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                        Potential Time Savings
                      </div>
                      <div className="text-4xl font-bold text-gray-900">40%</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Typical Engagement
                    </div>
                    <div className="text-sm text-gray-600">
                      {content.discovery.engagement.duration} • Illustrative example—actual outcomes vary by scope and data availability
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 2: Portfolio Management */}
      <Section id="portfolio" background="default" spacing="default">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step {content.portfolio.number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {content.portfolio.headline}
                </h2>
              </div>

              <p className="text-sm text-teal-700 font-medium mb-6">
                {content.portfolio.tagline}
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {content.portfolio.purpose}
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                {content.portfolio.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    What This Includes
                  </h3>
                  <ul className="space-y-2">
                    {content.portfolio.features.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {content.portfolio.outcomes.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <Target className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual Card - Right */}
            <div className="lg:sticky lg:top-24">
              <Card className="relative overflow-hidden border-0 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-amber-500/10"></div>
                <CardContent className="p-8 relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Portfolio View
                  </h3>
                  
                  <div className="space-y-4">
                    {/* High Value */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">
                          High Value
                        </span>
                        <span className="text-2xl font-bold text-green-900">12</span>
                      </div>
                      <div className="text-xs text-green-700">Initiatives Ready</div>
                    </div>

                    {/* In Progress */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                          In Progress
                        </span>
                        <span className="text-2xl font-bold text-blue-900">8</span>
                      </div>
                      <div className="text-xs text-blue-700">Active Projects</div>
                    </div>

                    {/* Backlog */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Backlog
                        </span>
                        <span className="text-2xl font-bold text-gray-900">23</span>
                      </div>
                      <div className="text-xs text-gray-600">Opportunities</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-600 italic">
                      Example portfolio at a glance
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 3: Fractional Leadership / Governance */}
      <Section id="governance" background="muted" spacing="default">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content - Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <span className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                  Step {content.governance.number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {content.governance.headline}
                </h2>
              </div>

              <p className="text-sm text-amber-700 font-medium mb-6">
                {content.governance.tagline} • {content.governance.duration}
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {content.governance.purpose}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    What Happens
                  </h3>
                  <ul className="space-y-2">
                    {content.governance.whatHappens.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Best For
                  </h3>
                  <ul className="space-y-2">
                    {content.governance.bestFor.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700 text-sm">
                        <Target className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual Card - Right */}
            <div className="lg:sticky lg:top-24">
              <Card className="relative overflow-hidden border-0 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10"></div>
                <CardContent className="p-8 relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                    Fractional Commitment
                  </h3>
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mb-4">
                      <div className="text-white">
                        <div className="text-4xl font-bold">0.5-2</div>
                        <div className="text-xs uppercase tracking-wider">Days / Week</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                        Duration
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {content.governance.commitment.duration}
                      </div>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                        Approach
                      </div>
                      <div className="text-sm text-gray-700">
                        Strategic guidance without full-time overhead
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Business Value Transparency Section */}
      <Section id="value" background="default" spacing="default">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-blue-700/10"></div>
              <CardContent className="p-12 relative">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">
                    {content.valueTransparency.tagline}
                  </p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {content.valueTransparency.headline}
                  </h2>
                  <p className="text-xl text-gray-700">
                    {content.valueTransparency.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {content.valueTransparency.how.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Why It Matters
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {content.valueTransparency.why}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
