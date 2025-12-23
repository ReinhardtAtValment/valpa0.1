import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Container width variant */
  width?: "default" | "narrow" | "wide" | "full";
  /** Vertical padding size */
  spacing?: "none" | "sm" | "default" | "lg" | "xl";
  /** Background variant */
  background?: "default" | "muted" | "primary" | "secondary" | "accent";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      width = "default",
      spacing = "default",
      background = "default",
      children,
      ...props
    },
    ref
  ) => {
    const widthClasses = {
      default: "max-w-7xl",
      narrow: "max-w-4xl",
      wide: "max-w-[1600px]",
      full: "max-w-none",
    };

    const spacingClasses = {
      none: "py-0",
      sm: "py-8 md:py-12",
      default: "py-12 md:py-16 lg:py-20",
      lg: "py-16 md:py-20 lg:py-24",
      xl: "py-20 md:py-24 lg:py-32",
    };

    const backgroundClasses = {
      default: "bg-background",
      muted: "bg-muted/50",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
    };

    return (
      <section
        ref={ref}
        className={cn(backgroundClasses[background], className)}
        {...props}
      >
        <div
          className={cn(
            "mx-auto px-6 lg:px-8",
            widthClasses[width],
            spacingClasses[spacing]
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
