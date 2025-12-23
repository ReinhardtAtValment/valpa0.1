import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ServiceCards } from "@/components/sections/service-cards";
import { SectionNav } from "@/components/layout/section-nav";
import servicesData from "@/content/services.json";

export default function ServicesPage() {
  const { overview, services } = servicesData;

  // Define navigation sections
  const navSections = services.map(service => ({
    id: service.id,
    label: service.title,
  }));

  return (
    <main>
      {/* Floating Navigation */}
      <SectionNav sections={navSections} />

      {/* Overview */}
      <Section spacing="xl" background="default">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            headline={overview.headline}
            subheadline={overview.content}
            align="center"
            variant="standard"
            className="mb-24"
          />
          
          {/* Service Cards - same section, reduced gap */}
          <div className="mt-8">
            <ServiceCards services={services} />
          </div>
        </div>
      </Section>

      {/* Service 1: Process Analytics */}
      <Section spacing="none" background="muted">
        <ServiceDetail service={services[0]} />
      </Section>

      {/* Service 2: SAP Modernisation */}
      <Section spacing="none" background="default">
        <ServiceDetail service={services[1]} />
      </Section>

      {/* Service 3: Enterprise Architecture */}
      <Section spacing="none" background="muted">
        <ServiceDetail service={services[2]} />
      </Section>

      {/* Service 4: AI Governance */}
      <Section spacing="none" background="default">
        <ServiceDetail service={services[3]} />
      </Section>
    </main>
  );
}
