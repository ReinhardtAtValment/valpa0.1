"use client";

import { Network, TrendingUp, Shield, Target } from "lucide-react";

const iconMap = {
  Network,
  TrendingUp,
  Shield,
  Target,
};

interface Service {
  id: string;
  title: string;
  tagline: string;
  icon: string;
}

interface ServiceCardsProps {
  services: Service[];
}

export function ServiceCards({ services }: ServiceCardsProps) {
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const colors = ["primary", "secondary", "accent", "primary"];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {services.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] || iconMap.Network;
        const color = colors[index % colors.length];
        
        return (
          <button
            key={service.id}
            onClick={() => scrollToService(service.id)}
            className="relative group h-full text-left"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}/10 to-${color}/5 rounded-2xl group-hover:from-${color}/15 group-hover:to-${color}/10 transition-all`}></div>
            
            {/* Card content */}
            <div className="relative p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className={`inline-flex p-3 rounded-xl bg-${color}/10 text-${color} mb-4 self-start`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-${color} transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {service.tagline}
              </p>

              {/* Call to action - always visible */}
              <div className={`mt-4 flex items-center gap-2 text-sm font-medium text-${color} group-hover:gap-3 transition-all`}>
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
