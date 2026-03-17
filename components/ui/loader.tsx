"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderFiveProps {
  text?: string;
  className?: string;
}

export function LoaderFive({ text = "Loading...", className }: LoaderFiveProps) {
  return (
    <span
      className={cn("relative inline-block", className)}
      style={{ animation: "text-slide 4s ease-in-out infinite" }}
    >
      <span
        style={{
          backgroundImage:
            "linear-gradient(90deg, #947846 0%, #947846 35%, #f5d89a 50%, #947846 65%, #947846 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer-loader 2.5s linear infinite",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {text}
      </span>
      <style>{`
        @keyframes shimmer-loader {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes text-slide {
          0%   { transform: translateX(0px); }
          30%  { transform: translateX(18px); }
          70%  { transform: translateX(-18px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
    </span>
  );
}
