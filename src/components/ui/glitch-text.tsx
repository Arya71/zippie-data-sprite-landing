import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  trigger?: "hover" | "auto" | "scroll";
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className,
  intensity = "medium",
  trigger = "hover"
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (trigger === "auto") {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 500);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [trigger]);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsGlitching(false);
    }
  };

  const glitchIntensity = {
    low: "animate-pulse",
    medium: isGlitching ? "animate-glitch" : "",
    high: isGlitching ? "animate-glitch-intense" : ""
  };

  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        glitchIntensity[intensity],
        isGlitching && "text-primary",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        textShadow: isGlitching 
          ? "0.05em 0 0 #00ffff, -0.05em -0.025em 0 #ff00ff, 0.025em 0.05em 0 #ffff00"
          : "none"
      }}
    >
      {children}
    </span>
  );
};