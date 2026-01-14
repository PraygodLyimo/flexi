'use client';

import { MapPin, Mountain, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DestinationsPage() {
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
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const destinations = [
    {
      id: 1,
      name: 'Serengeti',
      description: 'Experience the world\'s greatest wildlife spectacle - the Serengeti ecosystem spans 14,750 square kilometers of pristine African wilderness.',
      fullDescription: 'The Serengeti is home to the largest terrestrial mammal migration on Earth. Witness the Great Migration as over 2 million wildebeest and zebras traverse the plains. The park is famous for its exceptional concentration of predators and the Big Five.',
      icon: '🦁',
      highlights: ['Big Five', 'Great Migration', 'Wildebeest Herds', 'Lion Prides', 'Scenic Drives'],
      bestTime: 'June - September (Migration)',
      visitors: '100,000+/year',
      color: 'from-amber-600 to-amber-700',
      activities: ['Game Drives', 'Hot Air Balloon Safari', 'Walking Safaris', 'Photography Tours'],
    },
    {
      id: 2,
      name: 'Ngorongoro',
      description: 'Africa\'s largest intact caldera, this UNESCO World Heritage Site is a nature reserve of unparalleled beauty and biodiversity.',
      fullDescription: 'The Ngorongoro Conservation Area features the famous volcanic crater, one of the most densely concentrated wildlife populations in Africa. The crater floor hosts a remarkable ecosystem with predators and prey in close proximity.',
      icon: '🦓',
      highlights: ['Crater Views', 'Black Rhinos', 'Flamingos', 'Leopards', 'Scenic Overlooks'],
      bestTime: 'Year-round',
      visitors: '80,000+/year',
      color: 'from-green-600 to-green-700',
      activities: ['Crater Tours', 'Cultural Visits', 'Nature Walks', 'Photography'],
    },
    {
      id: 3,
      name: 'Tarangire',
      description: 'Known as "Land of Elephants," Tarangire National Park is home to some of Africa\'s largest elephant herds.',
      fullDescription: 'Tarangire is famous for its iconic baobab trees and the Tarangire River, which attracts massive elephant herds during the dry season. The park offers exceptional wildlife viewing opportunities with fewer tourists than other parks.',
      icon: '🐘',
      highlights: ['Elephant Herds', 'Baobab Trees', 'Lion Prides', 'Giraffes', 'Bird Paradise'],
      bestTime: 'June - October (Dry Season)',
      visitors: '60,000+/year',
      color: 'from-yellow-600 to-yellow-700',
      activities: ['Game Drives', 'Bush Walks', 'Bird Watching', 'Photography'],
    },
    {
      id: 4,
      name: 'Lake Manyara',
      description: 'Famous for tree-climbing lions and stunning landscapes, Lake Manyara is a compact park with great wildlife diversity.',
      fullDescription: 'Lake Manyara National Park is a rift valley lake surrounded by steep cliffs and riverine forests. The park is famous for its tree-climbing lions and massive flocks of flamingos that can number in the millions.',
      icon: '🦅',
      highlights: ['Tree Lions', 'Flamingos', 'Hippos', 'Giraffes', 'Scenic Views'],
      bestTime: 'Year-round',
      visitors: '40,000+/year',
      color: 'from-blue-600 to-blue-700',
      activities: ['Game Drives', 'Bird Watching', 'Nature Walks', 'Photography'],
    },
    {
      id: 5,
      name: 'Kilimanjaro',
      description: 'Africa\'s highest peak at 5,895 meters, Mount Kilimanjaro is the world\'s highest free-standing mountain.',
      fullDescription: 'Climbing Kilimanjaro is the ultimate African adventure. The trek passes through five distinct ecological zones from rainforest to alpine desert, offering trekkers an incredible journey with stunning views and the challenge of summiting Africa\'s tallest peak.',
      icon: '⛰️',
      highlights: ['Summit Trek', '5 Ecological Zones', 'Alpine Meadows', 'Snow Peak', 'Uhuru Peak'],
      bestTime: 'January - March, July - September',
      visitors: '45,000+/year',
      color: 'from-indigo-600 to-indigo-700',
      activities: ['Mountain Trekking', 'Guided Climbs', 'Acclimatization Hikes'],
    },
    {
      id: 6,
      name: 'Zanzibar',
      description: 'The spice islands offer pristine beaches, historical Stone Town, and world-class diving.',
      fullDescription: 'Zanzibar is a tropical paradise with white sand beaches, turquoise waters, and a rich cultural heritage. Explore the historic Stone Town with its narrow streets and Arab architecture, or relax on pristine beaches and enjoy water sports.',
      icon: '🏝️',
      highlights: ['Beaches', 'Stone Town', 'Spice Tours', 'Diving', 'Snorkeling'],
      bestTime: 'June - October',
      visitors: '120,000+/year',
      color: 'from-cyan-600 to-cyan-700',
      activities: ['Beach Relaxation', 'Snorkeling', 'Diving', 'Spice Tours', 'Cultural Tours'],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        {/* Page Header */}
        <section className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-16">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Explore Our Destinations</h1>
            <p className="text-xl text-gray-300">
              Discover Tanzania's most iconic safari and adventure locations
            </p>
          </motion.div>
        </section>

        {/* Destinations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {destinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  className={`bg-linear-to-br ${destination.color} rounded-xl overflow-hidden shadow-lg transition-all duration-300 text-white`}
                  variants={staggerItem}
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                >

                  {/* Top Section */}
                  <div className="p-8">
                    <div className="text-6xl mb-4">{destination.icon}</div>
                    <h3 className="text-4xl font-bold mb-3">{destination.name}</h3>
                    <p className="text-white/90 mb-6 text-lg">{destination.description}</p>
                    <p className="text-white/80 mb-6 leading-relaxed">{destination.fullDescription}</p>

                    {/* Details Grid */}
                    <div className="bg-white/20 rounded-lg p-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-white/70 mb-1">BEST TIME TO VISIT</p>
                          <p className="text-white font-medium">{destination.bestTime}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white/70 mb-1">ANNUAL VISITORS</p>
                          <p className="text-white font-medium">{destination.visitors}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-white/70 mb-3">HIGHLIGHTS</p>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <p className="text-sm font-semibold text-white/70 mb-3">ACTIVITIES</p>
                      <ul className="space-y-2">
                        {destination.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-white">
                            <span className="mr-2" style={{ color: '#947846' }}>✓</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <motion.div
                    className="bg-black/20 px-8 py-4 flex justify-between items-center transition-colors cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                  >
                    <span className="font-semibold">Plan Your Trip</span>
                    <span className="text-lg">→</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
}
