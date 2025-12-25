import { HeroStatic } from "@/components/sections/heroes/hero-static";
import { BuiltFor } from "@/components/sections/built-for";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Offers } from "@/components/sections/offers";
import { FocusAreas } from "@/components/sections/focus-areas";
import { WhyValment } from "@/components/sections/why-valment";
import { FinalCtaNew } from "@/components/sections/final-cta-new";
import { SectionNav } from "@/components/layout/section-nav";

import homepageContent from "@/content/homepage.json";

// Define sections for navigation
const sections = [
  { id: "hero", label: "Home" },
  { id: "built-for", label: "Who We Help" },
  { id: "how-we-work", label: "How We Work" },
  { id: "focus-areas", label: "Service Areas" },
  { id: "offers", label: "Ways to Work" },
  { id: "why-valment", label: "Why Valment" },
  { id: "contact-cta", label: "Contact" },
];

export default function Home() {
  return (
    <>
      {/* Floating section navigation */}
      <SectionNav sections={sections} />

      {/* Hero - New static hero with 3 capability tiles */}
      <div id="hero">
        <HeroStatic />
      </div>

      {/* Built For - Target personas and tools */}
      <div id="built-for">
        <BuiltFor />
      </div>

      {/* How We Work - 3-step methodology */}
      <div id="how-we-work">
        <HowWeWork />
      </div>

      {/* Focus Areas - 4 service areas */}
      <div id="focus-areas">
        <FocusAreas />
      </div>

      {/* Offers - Three engagement formats */}
      <div id="offers">
        <Offers />
      </div>

      {/* Why Valment - 4 differentiators */}
      <div id="why-valment">
        <WhyValment certifications={homepageContent.credentials.certifications} />
      </div>

      {/* Final CTA */}
      <div id="contact-cta">
        <FinalCtaNew />
      </div>
    </>
  );
}
