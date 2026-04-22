"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0a0a]" />,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]" />

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#d4af37] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium">
          D1 Athletics · Cinematic Sports Media
        </p>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-6">
          <span className="block text-white">Aaron</span>
          <span className="block shimmer-gold">Cantu</span>
        </h1>

        {/* Role */}
        <p className="text-white/60 text-base md:text-xl uppercase tracking-[0.3em] mb-10 font-light">
          Director of Football Video
        </p>

        <div className="cinema-divider w-24 mx-auto mb-10" />

        {/* Subtext */}
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Crafting cinematic stories that fuel recruiting, ignite fans, and define
          the identity of championship programs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-3 bg-[#d4af37] text-black text-sm font-bold uppercase tracking-widest hover:bg-[#e8c84a] transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/30 text-white/80 text-sm font-medium uppercase tracking-widest hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </div>
    </section>
  );
}
