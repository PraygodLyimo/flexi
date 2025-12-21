'use client';

import { MapPin, Mountain, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: 'Serengeti',
      description: 'The Great Migration and endless wildlife',
      icon: '🦁',
      highlights: 'Big Five, Great Migration',
      visitors: '100,000+/year',
      color: 'from-amber-600 to-amber-700',
    },
    {
      id: 2,
      name: 'Ngorongoro',
      description: 'Africa\'s largest intact crater ecosystem',
      icon: '🦓',
      highlights: 'Crater Views, Rhinos',
      visitors: '80,000+/year',
      color: 'from-green-600 to-green-700',
    },
    {
      id: 3,
      name: 'Tarangire',
      description: 'Elephant herds and ancient baobabs',
      icon: '🐘',
      highlights: 'Elephant Herds, Scenic Views',
      visitors: '60,000+/year',
      color: 'from-yellow-600 to-yellow-700',
    },
    {
      id: 4,
      name: 'Lake Manyara',
      description: 'Tree-climbing lions and birdwatching paradise',
      icon: '🦅',
      highlights: 'Tree Lions, Flamingos',
      visitors: '40,000+/year',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 5,
      name: 'Kilimanjaro',
      description: 'Africa\'s highest peak and ultimate challenge',
      icon: '⛰️',
      highlights: 'Summit Trek, 5 Ecological Zones',
      visitors: '45,000+/year',
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      id: 6,
      name: 'Zanzibar',
      description: 'Spice islands and tropical beaches',
      icon: '🏝️',
      highlights: 'Beaches, Stone Town, Spices',
      visitors: '120,000+/year',
      color: 'from-cyan-600 to-cyan-700',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Tanzania's most iconic safari and adventure locations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}              id={destination.name.toLowerCase()}              className={`bg-linear-to-br ${destination.color} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-white group cursor-pointer`}
            >
              {/* Top Section */}
              <div className="p-8">
                <div className="text-5xl mb-4">{destination.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{destination.name}</h3>
                <p className="text-white/90 mb-6">{destination.description}</p>

                {/* Highlights */}
                <div className="bg-white/20 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-white/70 mb-1">HIGHLIGHTS</p>
                  <p className="text-white font-medium">{destination.highlights}</p>
                </div>

                {/* Visitors */}
                <div className="flex items-center text-white/90">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span className="text-sm">{destination.visitors} visitors</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/destinations">
                <div className="bg-black/20 px-8 py-4 flex justify-between items-center group-hover:bg-black/40 transition-colors">
                  <span className="font-semibold">Explore</span>
                  <span className="text-lg">→</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex space-x-4">
              <MapPin className="h-8 w-8 text-orange-600 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">6 Major Destinations</h4>
                <p className="text-gray-600">
                  Carefully selected locations for optimal wildlife viewing and experiences
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Mountain className="h-8 w-8 text-orange-600 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Diverse Terrain</h4>
                <p className="text-gray-600">
                  From crater rims to river valleys, mountains to beaches
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Users className="h-8 w-8 text-orange-600 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Tailored Experiences</h4>
                <p className="text-gray-600">
                  Custom itineraries designed for your interests and pace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
