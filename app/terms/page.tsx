import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import termsContent from "@/content/terms.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Valment Partners Inc.",
  description: "Terms and conditions for using the Valment Partners Inc. website and services. Please review these terms before engaging with our consulting services.",
};

export default function TermsPage() {
  const content = termsContent;

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <Section spacing="default" background="default">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.hero.headline}
            </h1>
            <p className="text-gray-600">
              Last Updated: {content.hero.lastUpdated}
            </p>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section spacing="lg" background="muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {content.introduction.text}
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                    {content.introduction.agreement}
                  </p>
                </div>

                {/* Sections */}
                {content.sections.map((section, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      {idx + 1}. {section.title}
                    </h2>

                    {/* Simple content */}
                    {section.content && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}

                    {/* Intro text */}
                    {section.intro && (
                      <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                        {section.intro}
                      </p>
                    )}

                    {/* Simple items list */}
                    {section.items && !section.subsections && (
                      <ul className="space-y-3 ml-6">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-gray-700 leading-relaxed list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((subsection, subIdx) => (
                          <div key={subIdx}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {subsection.subtitle}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              {subsection.content}
                            </p>
                            {subsection.items && (
                              <ul className="space-y-2 ml-6">
                                {subsection.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="text-gray-700 leading-relaxed list-disc">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contact Info Block */}
                    {section.contactInfo && (
                      <div className="mt-4 bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="space-y-1">
                          <p className="font-semibold text-gray-900">
                            {section.contactInfo.company}
                          </p>
                          <p className="text-gray-700">
                            {section.contactInfo.address}
                          </p>
                          <p className="text-gray-700">
                            Email:{" "}
                            <a
                              href={`mailto:${section.contactInfo.email}`}
                              className="text-teal-600 hover:text-teal-700 underline"
                            >
                              {section.contactInfo.email}
                            </a>
                          </p>
                          <p className="text-gray-700">
                            Website:{" "}
                            <a
                              href={`https://${section.contactInfo.website}`}
                              className="text-teal-600 hover:text-teal-700 underline"
                            >
                              {section.contactInfo.website}
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Footer Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4 justify-center text-sm">
                    <Link
                      href="/privacy"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      Privacy Policy
                    </Link>
                    <span className="text-gray-400">•</span>
                    <Link
                      href="/cookies"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      Cookie Policy
                    </Link>
                    <span className="text-gray-400">•</span>
                    <Link
                      href="/contact"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
