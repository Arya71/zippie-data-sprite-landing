import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstItem: React.ReactNode;
  secondItem: React.ReactNode;
  firstItemClassName?: string;
  secondItemClassName?: string;
  className?: string;
  slideMode?: "hover" | "click";
}

export const Compare: React.FC<CompareProps> = ({
  firstItem,
  secondItem,
  firstItemClassName,
  secondItemClassName,
  className,
  slideMode = "hover",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (slideMode === "hover" || isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    if (slideMode === "click") {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-96 overflow-hidden rounded-lg", className)}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* First item (left side, clipped) */}
      <div 
        className={cn("absolute inset-0", firstItemClassName)}
        style={{
          clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
        }}
      >
        {firstItem}
      </div>
      
      {/* Second item (right side, clipped) */}
      <div
        className={cn("absolute inset-0", secondItemClassName)}
        style={{
          clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      >
        {secondItem}
      </div>
      
      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
      </div>
    </div>
  );
};