import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed multiplier for parallax effect
  direction?: "up" | "down" | "left" | "right";
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className,
  speed = 0.5,
  direction = "up"
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransform = () => {
    const movement = scrollY * speed;
    
    switch (direction) {
      case "up":
        return `translateY(-${movement}px)`;
      case "down":
        return `translateY(${movement}px)`;
      case "left":
        return `translateX(-${movement}px)`;
      case "right":
        return `translateX(${movement}px)`;
      default:
        return `translateY(-${movement}px)`;
    }
  };

  return (
    <div
      className={cn("transition-transform duration-75", className)}
      style={{
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
};