import React from "react";
import { cn } from "@/lib/utils";

interface SparklesCoreProps {
  className?: string;
  size?: number;
  minSize?: number;
  density?: number;
  speed?: number;
  color?: string;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  className,
  size = 1.2,
  minSize = 0.6,
  density = 80,
  speed = 1,
  color = "hsl(var(--primary))",
}) => {
  const sparkles = Array.from({ length: density }).map((_, i) => {
    const sparkleSize = minSize + Math.random() * (size - minSize);
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sparkleSize,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    };
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${color}`,
          }}
        />
      ))}
    </div>
  );
};