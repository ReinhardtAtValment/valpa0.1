import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import cookiesContent from "@/content/cookies.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Valment Partners Inc.",
  description: "Learn about how Valment Partners Inc. uses cookies and similar tracking technologies on our website. Manage your cookie preferences and understand your privacy options.",
};

export default function CookiesPage() {
  const content = cookiesContent;

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
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">What are cookies?</strong>{" "}
                      {content.introduction.whatAreCookies}
                    </p>
                  </div>
                </div>

                {/* Cookie Summary Table */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {content.summary.title}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                            Cookie Name
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                            Purpose
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                            Type
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                            Duration
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900">
                            Can Disable?
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {content.summary.cookies.map((cookie, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900 font-medium">
                              {cookie.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                              {cookie.purpose}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                              {cookie.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                              {cookie.duration}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              {cookie.canDisable === "Yes" ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600 mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sections */}
                {content.sections.map((section, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      {section.title}
                    </h2>

                    {/* Simple content */}
                    {(section as any).content && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {(section as any).content}
                      </p>
                    )}

                    {/* Intro text */}
                    {(section as any).intro && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {(section as any).intro}
                      </p>
                    )}

                    {/* Note */}
                    {(section as any).note && (
                      <p className="text-sm text-gray-600 italic mt-4 pl-4 border-l-2 border-gray-300">
                        {(section as any).note}
                      </p>
                    )}

                    {/* Subsections with cookie types */}
                    {(section as any).subsections && (
                      <div className="space-y-6">
                        {(section as any).subsections.map((subsection: any, subIdx: number) => (
                          <div key={subIdx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {subsection.subtitle}
                              </h3>
                              {(subsection as any).canDisable !== undefined && (
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                  (subsection as any).canDisable 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-red-100 text-red-800"
                                }`}>
                                  {(subsection as any).canDisable ? "Can Disable" : "Required"}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              {subsection.content}
                            </p>
                            {(subsection as any).examples && (
                              <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-900 mb-2">Examples:</p>
                                <ul className="space-y-2">
                                  {(subsection as any).examples.map((example: string, exIdx: number) => (
                                    <li key={exIdx} className="text-sm text-gray-600 flex gap-2">
                                      <span className="text-teal-600">•</span>
                                      <span>{example}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {(subsection as any).provider && (
                              <p className="text-sm text-gray-600 mt-3">
                                <strong>Provider:</strong> {(subsection as any).provider}
                              </p>
                            )}
                            {(subsection as any).items && (
                              <ul className="space-y-2 ml-6 mt-3">
                                {(subsection as any).items.map((item: string, itemIdx: number) => (
                                  <li key={itemIdx} className="text-gray-700 leading-relaxed list-disc">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {(subsection as any).browsers && (
                              <div className="mt-4 space-y-2">
                                {(subsection as any).browsers.map((browser: any, brIdx: number) => (
                                  <div key={brIdx} className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-900 min-w-[140px]">
                                      {browser.name}:
                                    </span>
                                    <a
                                      href={browser.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-teal-600 hover:text-teal-700 underline break-all"
                                    >
                                      {browser.link}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            )}
                            {(subsection as any).link && (
                              <div className="mt-4">
                                <a
                                  href={(subsection as any).link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-teal-600 hover:text-teal-700 underline font-medium"
                                >
                                  {(subsection as any).link}
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Third-party services */}
                    {(section as any).services && (
                      <div className="space-y-4">
                        {(section as any).services.map((service: any, servIdx: number) => (
                          <div key={servIdx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {service.name}
                            </h3>
                            <p className="text-gray-700 mb-3">
                              <strong>Purpose:</strong> {service.purpose}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 text-sm">
                              <a
                                href={service.privacy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:text-teal-700 underline"
                              >
                                Privacy Policy
                              </a>
                              <span className="hidden sm:inline text-gray-400">•</span>
                              <a
                                href={service.optOut}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:text-teal-700 underline"
                              >
                                Opt-Out Instructions
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Types (for retention) */}
                    {(section as any).types && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {(section as any).types.map((type: any, typeIdx: number) => (
                          <div key={typeIdx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <p className="font-semibold text-gray-900 mb-1">
                              {type.type}
                            </p>
                            <p className="text-sm text-gray-700">
                              {type.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contact Info Block */}
                    {(section as any).contactInfo && (
                      <div className="mt-4 bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="space-y-1">
                          <p className="font-semibold text-gray-900">
                            {(section as any).contactInfo.company}
                          </p>
                          <p className="text-gray-700">
                            {(section as any).contactInfo.address}
                          </p>
                          <p className="text-gray-700">
                            Email:{" "}
                            <a
                              href={`mailto:${(section as any).contactInfo.email}`}
                              className="text-teal-600 hover:text-teal-700 underline"
                            >
                              {(section as any).contactInfo.email}
                            </a>
                          </p>
                          <p className="text-gray-700">
                            Website:{" "}
                            <a
                              href={`https://${(section as any).contactInfo.website}`}
                              className="text-teal-600 hover:text-teal-700 underline"
                            >
                              {(section as any).contactInfo.website}
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
                      href="/terms"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      Terms of Service
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
