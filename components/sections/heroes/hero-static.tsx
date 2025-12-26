import Link from "next/link";
import { Eye, ListChecks, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  Eye,
  ListChecks,
  Shield,
};

interface HeroTile {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface HeroStaticProps {
  headline: string;
  subheadline: string;
  tiles: HeroTile[];
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  microLine: string;
}

export function HeroStatic({ headline, subheadline, tiles, cta, microLine }: HeroStaticProps) {
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
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Hero Tiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiles.map((tile, index) => {
            const Icon = iconMap[tile.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tile.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tile.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tile.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={cta.primary.href}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {cta.primary.text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href={cta.secondary.href}>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-full transition-all"
            >
              {cta.secondary.text}
            </Button>
          </Link>
        </div>

        {/* Micro-line under buttons */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {microLine}
          </p>
        </div>
      </div>
    </section>
  );
}
