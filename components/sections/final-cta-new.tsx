import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCtaNewProps {
  headline: string;
  description: string;
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
}

export function FinalCtaNew({ headline, description, cta }: FinalCtaNewProps) {
  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {headline}
        </h2>

        {/* Text */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>

        {/* Buttons - Same style as hero */}
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
      </div>
    </section>
  );
}
