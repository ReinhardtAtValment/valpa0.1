"use client";

import { useState, useEffect } from "react";

interface SectionNavProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navigation after scrolling past hero
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);

      // Determine active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      // Find which section is currently in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Section is considered active if its top is in the upper half of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Section navigation"
    >
      <ul className="space-y-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center"
                aria-label={`Navigate to ${section.label}`}
              >
                {/* Dot */}
                <span
                  className={`block w-3 h-3 rounded-full border-2 transition-all ${
                    isActive
                      ? "bg-accent border-accent w-4 h-4"
                      : "bg-background border-muted-foreground/30 hover:border-accent hover:bg-accent/20"
                  }`}
                />
                
                {/* Label - shows on hover */}
                <span
                  className={`absolute right-6 px-3 py-1 rounded-md bg-background/95 backdrop-blur-sm border border-border text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"
                  }`}
                >
                  {section.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
