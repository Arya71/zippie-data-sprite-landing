import React from "react";
import { cn } from "@/lib/utils";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
}

export const HoverBorderGradient: React.FC<HoverBorderGradientProps> = ({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 1,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "relative p-[1px] overflow-hidden rounded-lg",
        containerClassName
      )}
      {...props}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-sm animate-glow-pulse"
        style={{
          background: `conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))`,
          animationDuration: `${duration}s`,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent)`,
          animationDuration: `${duration * 2}s`,
        }}
      />
      <div className={cn("relative bg-background rounded-lg", className)}>
        {children}
      </div>
    </Component>
  );
};