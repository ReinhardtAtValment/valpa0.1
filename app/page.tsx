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

      {/* Hero - Static hero with 3 capability tiles */}
      <div id="hero">
        <HeroStatic
          headline={homepageContent.heroStatic.headline}
          subheadline={homepageContent.heroStatic.subheadline}
          tiles={homepageContent.heroStatic.tiles}
          cta={homepageContent.heroStatic.cta}
          microLine={homepageContent.heroStatic.microLine}
        />
      </div>

      {/* Built For - Target personas and tools */}
      <div id="built-for">
        <BuiltFor
          headline={homepageContent.builtFor.headline}
          intro={homepageContent.builtFor.intro}
          challenges={homepageContent.builtFor.challenges}
          personas={homepageContent.builtFor.personas}
          tools={homepageContent.builtFor.tools}
        />
      </div>

      {/* How We Work - 3-step methodology */}
      <div id="how-we-work">
        <HowWeWork
          headline={homepageContent.howWeWork.headline}
          intro={homepageContent.howWeWork.intro}
          steps={homepageContent.howWeWork.steps}
          closingLine={homepageContent.howWeWork.closingLine}
        />
      </div>

      {/* Focus Areas - 4 service areas */}
      <div id="focus-areas">
        <FocusAreas
          headline={homepageContent.focusAreas.headline}
          intro={homepageContent.focusAreas.intro}
          areas={homepageContent.focusAreas.areas}
        />
      </div>

      {/* Offers - Three engagement formats */}
      <div id="offers">
        <Offers
          headline={homepageContent.offers.headline}
          intro={homepageContent.offers.intro}
          items={homepageContent.offers.items}
        />
      </div>

      {/* Why Valment - 4 differentiators + certifications */}
      <div id="why-valment">
        <WhyValment
          headline={homepageContent.whyValment.headline}
          intro={homepageContent.whyValment.intro}
          differentiators={homepageContent.whyValment.differentiators}
          closingLine={homepageContent.whyValment.closingLine}
          certifications={homepageContent.credentials.certifications}
        />
      </div>

      {/* Final CTA */}
      <div id="contact-cta">
        <FinalCtaNew
          headline={homepageContent.finalCta.headline}
          description={homepageContent.finalCta.description}
          cta={homepageContent.finalCta.cta}
        />
      </div>
    </>
  );
}
