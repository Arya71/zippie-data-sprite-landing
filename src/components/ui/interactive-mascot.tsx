import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InteractiveMascotProps {
  src: string;
  alt: string;
  className?: string;
}

export const InteractiveMascot: React.FC<InteractiveMascotProps> = ({
  src,
  alt,
  className
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTransform = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;
    
    const rotateX = deltaY * 10;
    const rotateY = deltaX * 10;
    const translateX = deltaX * 5;
    const translateY = deltaY * 5;
    
    const scrollBounce = Math.sin(scrollY * 0.01) * 3;
    
    return `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateX(${translateX}px) 
      translateY(${translateY + scrollBounce}px)
      scale(${isHovered ? 1.1 : 1})
    `;
  };

  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-all duration-300 ease-out cursor-pointer",
          "drop-shadow-2xl",
          className
        )}
        style={{
          transform: calculateTransform(),
          filter: isHovered ? "brightness(1.1) saturate(1.2)" : "brightness(1)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      {/* Magical glow effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-primary/20 rounded-full blur-xl",
          "transition-all duration-300",
          isHovered ? "scale-110 opacity-60" : "scale-100 opacity-30"
        )}
        style={{
          transform: calculateTransform(),
          animation: "glow-pulse 3s ease-in-out infinite"
        }}
      />
      
      {/* Sparkle effects */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-sparkle"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};