import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic level for accessibility */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual size (can differ from semantic level) */
  size?: "display-2xl" | "display-xl" | "display-lg" | "display-md" | "display-sm" | "xl" | "lg" | "base";
  /** Font weight */
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Make text gradient (primary to secondary) */
  gradient?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level = 2,
      size,
      weight = "bold",
      align = "left",
      gradient = false,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    // If no size is specified, use semantic defaults
    const defaultSizes: Record<number, HeadingProps['size']> = {
      1: "display-lg",
      2: "display-md",
      3: "display-sm",
      4: "xl",
      5: "lg",
      6: "base",
    };

    const displaySize = size || defaultSizes[level] || "display-md";

    const sizeClasses: Record<NonNullable<HeadingProps['size']>, string> = {
      "display-2xl": "text-display-2xl",
      "display-xl": "text-display-xl",
      "display-lg": "text-display-lg",
      "display-md": "text-display-md",
      "display-sm": "text-display-sm",
      "xl": "text-xl",
      "lg": "text-lg",
      "base": "text-base",
    };

    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    };

    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    return React.createElement(
      Tag,
      {
        ref,
        className: cn(
          sizeClasses[displaySize],
          weightClasses[weight],
          alignClasses[align],
          gradient &&
            "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
          "tracking-tight",
          className
        ),
        ...props,
      },
      children
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
