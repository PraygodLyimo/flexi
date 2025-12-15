export default function AdventureHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
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
        <h1 className="mb-6 tracking-tight text-white sm:text-6xl md:text-7xl lg:text-9xl" style={{ fontFamily: 'Niconne, serif' }}>
          Find Your Next Adventure
        </h1>
        
        <p className="mb-8 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
          Curated nature-inspired journeys for the modern explorer.
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