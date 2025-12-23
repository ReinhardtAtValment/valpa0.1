import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon component from lucide-react */
  icon?: LucideIcon;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Optional link/action */
  href?: string;
  /** Variant style */
  variant?: "default" | "primary" | "secondary" | "accent";
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      icon: Icon,
      title,
      description,
      href,
      variant = "default",
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default: "border-border hover:border-primary/50",
      primary: "border-primary/20 bg-primary-50/50 hover:border-primary",
      secondary: "border-secondary/20 bg-secondary-50/50 hover:border-secondary",
      accent: "border-accent/20 bg-accent-50/50 hover:border-accent",
    };

    const iconColorClasses = {
      default: "text-primary",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };

    const content = (
      <Card
        ref={ref}
        className={cn(
          "transition-all hover:shadow-md",
          variantClasses[variant],
          href && "cursor-pointer",
          className
        )}
        {...props}
      >
        <CardHeader>
          {Icon && (
            <div className={cn("mb-2", iconColorClasses[variant])}>
              <Icon className="h-8 w-8" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {children && <CardContent>{children}</CardContent>}
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block">
          {content}
        </a>
      );
    }

    return content;
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
