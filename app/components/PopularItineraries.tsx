'use client';

import { Star, MapPin, Calendar, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PopularItineraries() {
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

  const itineraries = [
    {
      id: 1,
      title: '7 Days Safari',
      description: 'Visit two of Africa\'s Seven Natural Wonders',
      destination: 'Serengeti & Ngorongoro',
      duration: '7 Days',
      price: 1588,
      image: 'bg-linear-to-br from-amber-600 to-amber-800',
      highlights: ['Big Five', 'Great Migration', 'Crater Views'],
      rating: 4.9,
      reviews: 342,
    },
    {
      id: 2,
      title: '9 Days Safari',
      description: 'Wildebeest Migration and Mara River crossing',
      destination: 'Serengeti Circuit',
      duration: '9 Days',
      price: 2289,
      image: 'bg-linear-to-br from-green-700 to-green-900',
      highlights: ['Migration', 'River Crossing', 'Game Drives'],
      rating: 4.9,
      reviews: 512,
    },
    {
      id: 3,
      title: '11 Days Safari & Zanzibar',
      description: 'Best of both worlds: Wildlife and tropical beaches',
      destination: 'Safari + Beach',
      duration: '11 Days',
      price: 2126,
      image: 'bg-linear-to-br from-blue-600 to-blue-800',
      highlights: ['Safari Tour', 'Beach Escape', 'Cultural Tour'],
      rating: 4.8,
      reviews: 428,
    },
    {
      id: 4,
      title: '15 Days Safari & Zanzibar',
      description: 'Travel at your own pace - Extended adventure',
      destination: 'Ultimate Tanzania',
      duration: '15 Days',
      price: 2934,
      image: 'bg-linear-to-br from-purple-700 to-purple-900',
      highlights: ['Full Safari', 'Extended Beach', 'Luxury Camps'],
      rating: 4.9,
      reviews: 287,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Popular Safari Packages
          </h2>
          <p className="text-xl text-gray-600">
            Carefully curated itineraries designed for unforgettable experiences
          </p>
        </motion.div>

        {/* Itineraries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {itineraries.map((itinerary) => (
            <motion.div
              key={itinerary.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform"
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >

              {/* Image Placeholder */}
              <div className={`h-48 ${itinerary.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-bold text-2xl">{itinerary.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {itinerary.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {itinerary.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 text-sm">
                    <MapPin className="h-4 w-4 mr-2" style={{ color: '#c89b5e' }} />
                    {itinerary.destination}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Star className="h-4 w-4 mr-2" style={{ color: '#c89b5e' }} />
                    <span className="font-semibold">{itinerary.rating}</span>
                    <span className="text-gray-500 ml-1">({itinerary.reviews} reviews)</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {itinerary.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#f7e6cc', color: '#947846' }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-600 text-xs">From</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${itinerary.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    className="w-full font-bold py-3 px-4 rounded-lg transition-colors relative overflow-hidden group shadow-md"
                    style={{ backgroundColor: '#947846', color: '#f7e6cc' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(148, 120, 70, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
                    />
                    <span className="relative z-10">View Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          {...fadeInUp}
        >
          <Link href="/tours">
            <motion.button
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Customizable Trips →
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
