'use client';

import { MapPin, Mountain, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/marquee';
import { motion } from 'framer-motion';

export default function Destinations() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const destinations = [
    {
      id: 1,
      name: 'Serengeti',
      description: 'The Great Migration and endless wildlife',
      highlights: 'Big Five, Great Migration',
      visitors: '100,000+/year',
      color: 'from-amber-600 to-amber-700',
    },
    {
      id: 2,
      name: 'Ngorongoro',
      description: 'Africa\'s largest intact crater ecosystem',
      highlights: 'Crater Views, Rhinos',
      visitors: '80,000+/year',
      color: 'from-green-600 to-green-700',
    },
    {
      id: 3,
      name: 'Tarangire',
      description: 'Elephant herds and ancient baobabs',
      highlights: 'Elephant Herds, Scenic Views',
      visitors: '60,000+/year',
      color: 'from-yellow-600 to-yellow-700',
    },
    {
      id: 4,
      name: 'Lake Manyara',
      description: 'Tree-climbing lions and birdwatching paradise',
      highlights: 'Tree Lions, Flamingos',
      visitors: '40,000+/year',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 5,
      name: 'Kilimanjaro',
      description: 'Africa\'s highest peak and ultimate challenge',
      highlights: 'Summit Trek, 5 Ecological Zones',
      visitors: '45,000+/year',
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      id: 6,
      name: 'Zanzibar',
      description: 'Spice islands and tropical beaches',
      highlights: 'Beaches, Stone Town, Spices',
      visitors: '120,000+/year',
      color: 'from-cyan-600 to-cyan-700',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Tanzania's most iconic safari and adventure locations
          </p>
        </motion.div>

        {/* Destinations Marquee */}
        <Marquee pauseOnHover speed={25} className="mb-8">
          <MarqueeContent>
            {destinations.map((destination) => (
              <MarqueeItem key={destination.id} className="w-[380px]">
                <div
                  id={destination.name.toLowerCase()}
                  className={`bg-linear-to-br ${destination.color} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-white group cursor-pointer h-full`}
                >
                  {/* Top Section */}
                  <div className="p-8">
                    <div className="text-3xl mb-4">{destination.name}</div>
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
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>

        {/* Additional Info */}
        <motion.div
          className="mt-16 rounded-xl p-8 md:p-12"
          style={{ background: 'linear-gradient(to right, #f8ecdc, #f7e6cc)' }}
          {...fadeInUp}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div className="flex space-x-4" variants={staggerItem}>
              <MapPin className="h-8 w-8 shrink-0" style={{ color: '#947846' }} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">6 Major Destinations</h4>
                <p className="text-gray-600">
                  Carefully selected locations for optimal wildlife viewing and experiences
                </p>
              </div>
            </motion.div>
            <motion.div className="flex space-x-4" variants={staggerItem}>
              <Mountain className="h-8 w-8 shrink-0" style={{ color: '#947846' }} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Diverse Terrain</h4>
                <p className="text-gray-600">
                  From crater rims to river valleys, mountains to beaches
                </p>
              </div>
            </motion.div>
            <motion.div className="flex space-x-4" variants={staggerItem}>
              <Users className="h-8 w-8 shrink-0" style={{ color: '#947846' }} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Tailored Experiences</h4>
                <p className="text-gray-600">
                  Custom itineraries designed for your interests and pace
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
