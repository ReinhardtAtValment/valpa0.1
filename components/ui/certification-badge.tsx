import * as React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { Award, CheckCircle2 } from "lucide-react";

interface CertificationBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Certification name */
  name: string;
  /** Certification provider/organization */
  provider?: string;
  /** Whether certification is in progress */
  inProgress?: boolean;
  /** Show icon */
  showIcon?: boolean;
  /** Variant style */
  variant?: "default" | "primary" | "secondary" | "outline";
  /** Size variant */
  size?: "default" | "lg";
}

const CertificationBadge = React.forwardRef<HTMLSpanElement, CertificationBadgeProps>(
  (
    {
      className,
      name,
      provider,
      inProgress = false,
      showIcon = true,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "",
      primary: "border-primary/30 bg-primary/10 text-primary",
      secondary: "border-secondary/30 bg-secondary/10 text-secondary",
      outline: "border-border/50 bg-transparent",
    };

    const sizeStyles = {
      default: "px-3 py-1 text-xs",
      lg: "px-4 py-2 text-sm",
    };

    const iconSize = size === "lg" ? "h-4 w-4" : "h-3 w-3";

    return (
      <Badge
        ref={ref}
        variant="outline"
        className={cn(
          "gap-1.5 font-medium",
          variantStyles[variant],
          sizeStyles[size],
          inProgress && "border-dashed opacity-80",
          className
        )}
        {...props}
      >
        {showIcon && (
          inProgress ? (
            <Award className={iconSize} />
          ) : (
            <CheckCircle2 className={iconSize} />
          )
        )}
        <span>
          {provider && <span className="opacity-70">{provider} </span>}
          {name}
        </span>
        {inProgress && (
          <span className="opacity-60 text-[10px]">(In Progress)</span>
        )}
      </Badge>
    );
  }
);

CertificationBadge.displayName = "CertificationBadge";

export { CertificationBadge };
export type { CertificationBadgeProps };
