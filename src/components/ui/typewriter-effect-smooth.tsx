import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const fullText = words.map(word => word.text).join(" ");

  useEffect(() => {
    if (currentCharIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, fullText]);

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold", className)}>
      <span className="dark:text-white text-black">
        {displayedText}
      </span>
      <span 
        className={cn(
          "inline-block animate-pulse w-[4px] h-4 md:h-6 lg:h-10 bg-primary ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};