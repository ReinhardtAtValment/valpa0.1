import { HeroCarousel } from "@/components/sections/heroes/hero-carousel";
import { 
  ValueProposition,
  Approach,
  ServicesOverview,
  Credentials,
  FinalCta 
} from "@/components/sections";
import { SectionNav } from "@/components/layout/section-nav";

// Import homepage content from JSON
import homepageContent from "@/content/homepage.json";

// Define sections for navigation
const sections = [
  { id: "hero", label: "Home" },
  { id: "value-proposition", label: "Our Difference" },
  { id: "approach", label: "How We Work" },
  { id: "services", label: "Services" },
  { id: "credentials", label: "Experience" },
  { id: "contact-cta", label: "Contact" },
];

export default function Home() {
  return (
    <>
      {/* Floating section navigation */}
      <SectionNav sections={sections} />

      {/* Hero Carousel - 4 rotating slides showing the 4 services */}
      <div id="hero">
        <HeroCarousel />
      </div>

      {/* Value Proposition - Challenge + Solution */}
      <div id="value-proposition">
        <ValueProposition
          challenge={homepageContent.valueProposition.challenge}
          solution={homepageContent.valueProposition.solution}
        />
      </div>

      {/* Our Approach - 3-step methodology with visual cards */}
      <div id="approach">
        <Approach
          headline={homepageContent.approach.headline}
          subheadline={homepageContent.approach.subheadline}
          steps={homepageContent.approach.steps}
        />
      </div>

      {/* Services Overview - 4 service cards */}
      <div id="services">
        <ServicesOverview
          headline={homepageContent.services.headline}
          subheadline={homepageContent.services.subheadline}
          items={homepageContent.services.items}
        />
      </div>

      {/* Credentials - Experience & certifications */}
      <div id="credentials">
        <Credentials
          headline={homepageContent.credentials.headline}
          intro={homepageContent.credentials.intro}
          certifications={homepageContent.credentials.certifications}
          background={homepageContent.credentials.background}
          differentiator={homepageContent.credentials.differentiator}
        />
      </div>

      {/* Final CTA */}
      <div id="contact-cta">
        <FinalCta
          headline={homepageContent.finalCta.headline}
          description={homepageContent.finalCta.description}
          cta={homepageContent.finalCta.cta}
        />
      </div>
    </>
  );
}
