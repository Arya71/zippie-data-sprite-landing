import React from "react";
import { cn } from "@/lib/utils";
import { 
  Wifi, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Smartphone,
  Monitor,
  Cloud
} from "lucide-react";

interface TechStackProps {
  className?: string;
}

const techStack = [
  { name: "WebRTC", icon: Wifi, description: "Real-time peer connections" },
  { name: "WebCrypto", icon: Shield, description: "End-to-end encryption" },
  { name: "TypeScript", icon: Zap, description: "Type-safe development" },
  { name: "Progressive Web App", icon: Globe, description: "Works offline" },
  { name: "Zero-Knowledge", icon: Lock, description: "Privacy by design" },
  { name: "Cross-Platform", icon: Smartphone, description: "Any device" },
  { name: "Browser Native", icon: Monitor, description: "No installation" },
  { name: "Edge Computing", icon: Cloud, description: "Distributed network" }
];

export const TechStack: React.FC<TechStackProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className={cn(
            "group flex flex-col items-center text-center p-4 rounded-lg",
            "bg-muted/30 hover:bg-muted/50 transition-all duration-300",
            "hover:scale-105 hover:shadow-lg cursor-pointer"
          )}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: "both"
          }}
        >
          <div className="mb-3 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
            <tech.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
          <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            {tech.description}
          </p>
        </div>
      ))}
    </div>
  );
};