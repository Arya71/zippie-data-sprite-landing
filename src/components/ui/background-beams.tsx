import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        {/* Animated beams */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent",
              "animate-beam opacity-20"
            )}
            style={{
              top: `${20 + i * 15}%`,
              left: "-100px",
              width: "200px",
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.2}s`,
            }}
          />
        ))}
        
        {/* Vertical beams */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className={cn(
              "absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent",
              "animate-beam opacity-10"
            )}
            style={{
              left: `${25 + i * 20}%`,
              top: "-100px",
              height: "200px",
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";