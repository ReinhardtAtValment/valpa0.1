import Link from "next/link";
import { Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Approach", href: "/approach" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/reinhardtm/",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-teal-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-semibold text-foreground">
                Valment
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Process optimization and AI governance consulting for organizations seeking measurable business value.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul role="list" className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul role="list" className="space-y-3 text-sm text-muted-foreground">
              <li>Oakville, Ontario, Canada</li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  Get in Touch →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground md:order-1 md:mt-0">
            &copy; {currentYear} Valment Partners Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
