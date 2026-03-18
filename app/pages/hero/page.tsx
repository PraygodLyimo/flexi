'use client';

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AdventureHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-video.mp4"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback text for very old browsers */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="text-7xl md:text-9xl mb-8 text-white drop-shadow-2xl font-great-vibes"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Find your next Adventure
        </motion.h1>

        <p className="mb-8 max-w-2xl text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg font-medium mx-auto">
          Discover the wonders of Tanzania&apos;s wildlife with expert-led safaris across the Serengeti, Ngorongoro Crater, and beyond.
        </p>

      </div>

      {/* Optional: Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}