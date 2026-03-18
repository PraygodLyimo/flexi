"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
  text: string;
  className?: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  intervalMs?: number;
  characters?: string;
}

export function EncryptedText({
  text,
  className,
  encryptedClassName,
  revealedClassName,
  revealDelayMs = 50,
  intervalMs = 50,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);

  const scramble = useCallback(
    (targetText: string, revealedCount: number) => {
      return targetText
        .split("")
        .map((char, index) => {
          if (index < revealedCount || char === " ") {
            return char;
          }
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");
    },
    [characters]
  );

  useEffect(() => {
    let revealedCount = 0;
    let interval: NodeJS.Timeout;

    const startAnimation = () => {
      interval = setInterval(() => {
        if (revealedCount < text.length) {
          setDisplayText(scramble(text, revealedCount));
          revealedCount++;
        } else {
          setDisplayText(text);
          setIsRevealed(true);
          clearInterval(interval);
        }
      }, revealDelayMs);
    };

    startAnimation();

    return () => clearInterval(interval);
  }, [text, revealDelayMs, scramble]);

  return (
    <span className={cn("font-mono", className, isRevealed ? revealedClassName : encryptedClassName)}>
      {displayText}
    </span>
  );
}
