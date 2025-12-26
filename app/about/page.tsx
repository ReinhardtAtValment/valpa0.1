import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { SectionNav } from "@/components/layout/section-nav";
import {
  Network,
  Database,
  BarChart3,
  Sparkles,
  Shield,
  Brain,
  CheckCircle2,
  Globe2,
} from "lucide-react";

// Import about content from JSON
import aboutContent from "@/content/about.json";

const iconMap = {
  Network,
  Database,
  BarChart3,
  Sparkles,
  Shield,
  Brain,
};

export default function AboutPage() {
  const content = aboutContent;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "profile", label: "Who We Are" },
    { id: "certifications", label: "Credentials" },
    { id: "expertise", label: "Expertise" },
  ];

  return (
    <main>
      <SectionNav sections={sections} />

      {/* Hero/Overview Section */}
      <Section id="overview" background="default" spacing="default">
        <div className="container mx-auto px-6">
          <SectionHeader
            headline={content.hero.headline}
            subheadline={content.hero.subheadline}
            align="center"
            variant="standard"
          />
        </div>
      </Section>

      {/* Profile Section */}
      <Section id="profile" background="muted" spacing="default">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {content.profile.headline}
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">{content.profile.intro}</p>
              
              <p>{content.profile.mission}</p>
              
              <p>{content.profile.approach}</p>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <Globe2 className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Global Experience</h3>
                    <p className="text-gray-700">{content.profile.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" background="default" spacing="default">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              headline={content.certifications.headline}
              subheadline={content.certifications.intro}
              align="center"
              variant="standard"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {content.certifications.categories.map((cat, idx) => {
                const Icon = iconMap[cat.icon as keyof typeof iconMap];
                return (
                  <Card key={idx} className="relative overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-teal-700 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {cat.category}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Expertise Section */}
      <Section id="expertise" background="muted" spacing="default">
        <div className="container mx-auto px-6">
          <SectionHeader
            headline={content.expertise.headline}
            subheadline={content.expertise.intro}
            align="center"
            variant="standard"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {content.expertise.areas.map((area, idx) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap];
              const gradients = [
                "from-blue-600 to-teal-700",
                "from-teal-600 to-blue-700",
                "from-amber-500 to-orange-600",
                "from-purple-600 to-pink-600",
              ];
              const gradient = gradients[idx % gradients.length];

              return (
                <Card key={idx} className="relative overflow-hidden border-0 shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                        Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {area.capabilities.map((cap, capIdx) => (
                          <li key={capIdx} className="flex gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                        Tools & Platforms
                      </div>
                      <div className="text-sm text-gray-700">
                        {area.tools}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Differentiator Section */}
      <Section background="muted" spacing="default">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-blue-700/10"></div>
              <CardContent className="p-12 relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  {content.differentiator.headline}
                </h2>
                
                <p className="text-lg text-gray-700 mb-8 text-center">
                  {content.differentiator.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {content.differentiator.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}

