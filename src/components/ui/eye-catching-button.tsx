import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface EyeCatchingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const EyeCatchingButton_v1: React.FC<EyeCatchingButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const baseClasses = cn(
    "relative overflow-hidden transition-all duration-300 ease-out",
    "hover:scale-105 hover:shadow-lg active:scale-95",
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md", 
      "px-8 py-4 text-lg": size === "lg",
    }
  );

  const variantClasses = cn({
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]": variant === "primary",
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-primary/20": variant === "secondary",
  });

  return (
    <Button
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
      )}
    </Button>
  );
};