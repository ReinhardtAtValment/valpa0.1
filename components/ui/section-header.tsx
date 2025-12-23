import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Main headline text */
  headline: string;
  /** Optional subheadline or description */
  subheadline?: string;
  /** Alignment of the header */
  align?: "left" | "center";
  /** Visual variant for different contexts */
  variant?: "standard" | "challenge";
  /** Additional className for custom styling */
  className?: string;
}

export function SectionHeader({
  headline,
  subheadline,
  align = "center",
  variant = "standard",
  className,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "",
    center: "text-center mx-auto",
  };

  const variantClasses = {
    // Standard section header - most common
    standard: "max-w-4xl",
    // Challenge/problem statement - slightly different emphasis
    challenge: "max-w-4xl",
  };

  const spacingClasses = {
    standard: "mb-12",
    challenge: "mb-16",
  };

  return (
    <div
      className={cn(
        alignmentClasses[align],
        variantClasses[variant],
        spacingClasses[variant],
        className
      )}
    >
      <Heading level={2} size="display-lg" className="mb-6">
        {headline}
      </Heading>
      
      {subheadline && (
        <p className="text-xl text-muted-foreground leading-relaxed">
          {subheadline}
        </p>
      )}
    </div>
  );
}
