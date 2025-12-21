'use client';

import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23475235" width="1200" height="600"/><path fill="%23E67E22" opacity="0.1" d="M0 300 Q300 200 600 300 T1200 300 L1200 600 L0 600 Z"/></svg>')`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Your African Safari Awaits
        </h1>
        <p className="text-xl sm:text-2xl text-gray-100 mb-12 drop-shadow-md max-w-2xl">
          Experience the majesty of Tanzania's wildlife and landscapes with Flexi Safaris
        </p>

        {/* Search Box */}
        <div className="w-full max-w-4xl">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-full bg-white rounded-lg shadow-2xl p-4 hover:shadow-3xl transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-500 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Where do you want to go?
              </span>
              <span className="text-orange-500">→</span>
            </div>
          </button>

          {/* Expanded Search Form */}
          {searchOpen && (
            <div className="mt-4 bg-white rounded-lg shadow-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
              <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold">DESTINATION</p>
                  <select className="text-gray-700 font-medium focus:outline-none bg-transparent">
                    <option>Serengeti</option>
                    <option>Ngorongoro</option>
                    <option>Tarangire</option>
                    <option>Lake Manyara</option>
                    <option>Kilimanjaro</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold">WHEN</p>
                  <input type="date" className="text-gray-700 font-medium focus:outline-none bg-transparent" />
                </div>
              </div>

              <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                <Users className="h-5 w-5 text-orange-500 mr-2" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold">TRAVELERS</p>
                  <select className="text-gray-700 font-medium focus:outline-none bg-transparent">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3-4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">4.8★</span>
            <span className="text-sm">Based on 1000+ Reviews</span>
          </div>
          <div className="h-6 border-l border-white/30" />
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">15+</span>
            <span className="text-sm">Years Experience</span>
          </div>
          <div className="h-6 border-l border-white/30" />
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">5000+</span>
            <span className="text-sm">Happy Travelers</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
