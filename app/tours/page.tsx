'use client';

import { Star, MapPin, DollarSign, Calendar, Users, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ToursPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
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
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const tours = [
    {
      id: 1,
      title: '7 Days Tanzania Safari',
      price: 1588,
      duration: '7 Days',
      groupSize: '2-6 People',
      destinations: 'Serengeti & Ngorongoro',
      description: 'Visit two of Africa\'s Seven Natural Wonders in this action-packed week.',
      fullDescription: 'Experience the highlights of Tanzania in just 7 days. This safari covers the must-see destinations, giving you incredible wildlife viewing and dramatic landscapes. Perfect for those with limited time but big safari dreams.',
      itinerary: [
        { day: 1, title: 'Arrival in Arusha', desc: 'Meet your guide and briefing for the adventure ahead' },
        { day: 2, title: 'Tarangire National Park', desc: 'Game drives and elephant encounters' },
        { day: 3, title: 'Lake Manyara', desc: 'Tree-climbing lions and scenic views' },
        { day: 4, title: 'Ngorongoro Crater', desc: 'Descent into the crater for wildlife viewing' },
        { day: 5, title: 'Serengeti - Game Drive', desc: 'Full day exploring the vast Serengeti plains' },
        { day: 6, title: 'Serengeti - More Exploration', desc: 'Additional game drives with more wildlife opportunities' },
        { day: 7, title: 'Return to Arusha', desc: 'Depart with unforgettable memories' },
      ],
      rating: 4.9,
      reviews: 342,
      highlights: ['Big Five', 'Great Migration', 'Crater Views'],
      included: ['Accommodation', 'Meals', 'Game Drives', 'Experienced Guide'],
    },
    {
      id: 2,
      title: '9 Days Great Migration Safari',
      price: 2289,
      duration: '9 Days',
      groupSize: '2-8 People',
      destinations: 'Full Serengeti Circuit',
      description: 'Witness the world\'s greatest wildlife spectacle - the Great Migration.',
      fullDescription: 'This extended safari gives you more time to follow the migration, increase wildlife encounters, and experience the raw beauty of the Serengeti. Ideal for wildlife photographers and serious safari enthusiasts.',
      itinerary: [
        { day: 1, title: 'Arrival & Briefing', desc: 'Welcome to Tanzania' },
        { day: 2, title: 'Tarangire', desc: 'Elephant herds and baobab landscapes' },
        { day: 3, title: 'Lake Manyara', desc: 'Flamingos and tree-climbing lions' },
        { day: 4, title: 'Ngorongoro Crater', desc: 'UNESCO World Heritage site exploration' },
        { day: 5, title: 'Serengeti - Western Corridor', desc: 'River crossings and predator action' },
        { day: 6, title: 'Serengeti - Central Plains', desc: 'Vast herds and abundant wildlife' },
        { day: 7, title: 'Serengeti - Northern Region', desc: 'Migration and scenic game drives' },
        { day: 8, title: 'Serengeti - Final Exploration', desc: 'Last wildlife encounters' },
        { day: 9, title: 'Return Journey', desc: 'Depart with lasting memories' },
      ],
      rating: 4.9,
      reviews: 512,
      highlights: ['Migration', 'River Crossing', 'Game Drives', 'Photography'],
      included: ['Accommodation', 'Meals', 'Game Drives', 'Expert Guide', 'Migration Tracking'],
    },
    {
      id: 3,
      title: '11 Days Safari & Zanzibar Escape',
      price: 2126,
      duration: '11 Days',
      groupSize: '1-10 People',
      destinations: 'Safari + Beach',
      description: 'Best of both worlds: Wildlife adventure and tropical beach relaxation.',
      fullDescription: 'Combine an exciting safari with a relaxing beach escape. Experience the wildlife wonders of Tanzania followed by pristine beaches and cultural exploration of historic Zanzibar.',
      itinerary: [
        { day: 1, title: 'Arrival in Arusha', desc: 'Safari briefing and introduction' },
        { day: 2, title: 'Tarangire', desc: 'Safari begins with elephant viewing' },
        { day: 3, title: 'Lake Manyara', desc: 'Scenic park exploration' },
        { day: 4, title: 'Ngorongoro', desc: 'Crater adventure' },
        { day: 5, title: 'Serengeti - Game Drive', desc: 'Vast plains and wildlife' },
        { day: 6, title: 'Serengeti - More Exploration', desc: 'Additional wildlife encounters' },
        { day: 7, title: 'Fly to Zanzibar', desc: 'Relax and adjust pace' },
        { day: 8, title: 'Zanzibar Beach Day', desc: 'Swimming and snorkeling' },
        { day: 9, title: 'Stone Town Tour', desc: 'Historical and cultural exploration' },
        { day: 10, title: 'Spice Tour & Beach', desc: 'Local culture and more beach time' },
        { day: 11, title: 'Depart', desc: 'Fly home with amazing memories' },
      ],
      rating: 4.8,
      reviews: 428,
      highlights: ['Safari Tour', 'Beach Escape', 'Cultural Tour', 'Snorkeling'],
      included: ['Flights', 'Accommodation', 'Meals', 'All Activities', 'Expert Guides'],
    },
    {
      id: 4,
      title: '15 Days Ultimate Tanzania Adventure',
      price: 2934,
      duration: '15 Days',
      groupSize: '1-6 People',
      destinations: 'Ultimate Tanzania',
      description: 'Travel at your own pace - Extended adventure with flexibility and luxury.',
      fullDescription: 'This comprehensive tour is designed for those who want the complete Tanzania experience. Spend more time in each location, enjoy luxury accommodations, and have flexibility to customize activities.',
      itinerary: [
        { day: 1, title: 'Arrival', desc: 'Welcome and briefing' },
        { day: 2, title: 'Tarangire', desc: 'Elephant encounters' },
        { day: 3, title: 'Tarangire - Extended', desc: 'More wildlife viewing' },
        { day: 4, title: 'Lake Manyara', desc: 'Scenic exploration' },
        { day: 5, title: 'Ngorongoro - Rim Visit', desc: 'Crater views and walks' },
        { day: 6, title: 'Ngorongoro - Crater Descent', desc: 'Full crater experience' },
        { day: 7, title: 'Serengeti - Arrival', desc: 'Begin Serengeti exploration' },
        { day: 8, title: 'Serengeti - Western Corridor', desc: 'River crossings' },
        { day: 9, title: 'Serengeti - Central Plains', desc: 'Migration viewing' },
        { day: 10, title: 'Serengeti - Northern Region', desc: 'Remote areas and wildlife' },
        { day: 11, title: 'Fly to Zanzibar', desc: 'Transition to beach' },
        { day: 12, title: 'Zanzibar - Beach', desc: 'Swimming and water activities' },
        { day: 13, title: 'Stone Town & Culture', desc: 'History and local experiences' },
        { day: 14, title: 'Zanzibar - Leisure', desc: 'Spa, shopping, relaxation' },
        { day: 15, title: 'Departure', desc: 'Fly home' },
      ],
      rating: 4.9,
      reviews: 287,
      highlights: ['Full Safari', 'Extended Beach', 'Luxury Camps', 'Flexibility'],
      included: ['All Flights', 'Luxury Accommodation', 'All Meals', 'All Activities', 'Personal Guide'],
    },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden">
        {/* Cinematic Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/safari-hero.png')" }}
        >
          {/* Enhanced Overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          className="absolute inset-0 z-[1] opacity-20 bg-[url('/safari-pattern.png')] bg-repeat"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>

        {/* Subtle floating shapes for background interest */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c89b5e]/20 rounded-full blur-3xl z-[1]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#475235]/10 rounded-full blur-3xl z-[1]"
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ fontFamily: 'Betterlett, cursive' }}
          >
            Our Safari Tours
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontFamily: 'Myriad Pro, sans-serif' }}
          >
            Experience the raw beauty of Tanzania's wilderness with our meticulously crafted luxury safari tours.
          </motion.p>
          <motion.div
            className="mt-8 h-1 w-24 bg-[#c89b5e] mx-auto rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>
      </section>

      {/* Main Content with subtle background */}
      <div className="relative min-h-screen bg-[#faf7f2]">
        {/* Simple subtle pattern or solid color */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/safari-pattern.png')] bg-repeat bg-[length:200px_200px]"></div>

        {/* Tours Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {tours.map((tour) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-fit"
                  variants={staggerItem}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}
                >
                  {/* Card Content - Summary View */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="max-w-[70%]">
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>
                          {tour.title}
                        </h2>
                        <div className="flex items-center text-sm text-[#947846] font-semibold">
                          <MapPin className="h-3 w-3 mr-1" />
                          {tour.destinations}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">FROM</p>
                        <p className="text-3xl font-bold text-[#947846]">${tour.price.toLocaleString()}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 line-clamp-2 text-sm leading-relaxed" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>
                      {tour.description}
                    </p>

                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-lg bg-[#fdf8f0]">
                          <Calendar className="h-4 w-4 text-[#c89b5e]" />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-lg bg-[#fdf8f0]">
                          <Users className="h-4 w-4 text-[#c89b5e]" />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{tour.groupSize}</span>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <motion.button
                        className="flex-[2] py-4 px-6 rounded-2xl font-bold text-sm bg-[#947846] text-white shadow-lg shadow-[#947846]/20 relative overflow-hidden group"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(148, 120, 70, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"
                        />
                        <span className="relative z-10">Book This package</span>
                      </motion.button>
                      <motion.button
                        className="flex-1 py-4 px-4 rounded-2xl font-bold text-sm border-2 border-[#947846] text-[#947846] flex items-center justify-center space-x-2 relative overflow-hidden group transition-colors duration-300"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: '#947846',
                          color: '#ffffff',
                          boxShadow: '0 20px 25px -5px rgba(148, 120, 70, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpand(tour.id)}
                      >
                        <motion.span
                          className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"
                        />
                        <span className="relative z-10">{expandedId === tour.id ? 'Hide' : 'Details'}</span>
                        {expandedId === tour.id ? <ChevronUp className="h-4 w-4 relative z-10" /> : <ChevronDown className="h-4 w-4 relative z-10" />}
                      </motion.button>
                    </div>
                  </div>

                  {/* Expandable Details - ALL PACKAGE INFORMATION HERE */}
                  <AnimatePresence>
                    {expandedId === tour.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="border-t border-gray-50 bg-[#fafafa]/80"
                      >
                        <div className="p-8 space-y-10">
                          {/* Full Experience */}
                          <div>
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="h-1 w-8 bg-[#c89b5e] rounded-full"></span>
                              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Full Experience</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">{tour.fullDescription}</p>
                          </div>

                          {/* Highlights & Included */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Highlights</h3>
                              <div className="space-y-2">
                                {tour.highlights.map((h, i) => (
                                  <div key={i} className="flex items-center text-sm text-gray-700 font-medium">
                                    <Star className="h-3 w-3 text-[#c89b5e] mr-2 fill-[#c89b5e]" />
                                    {h}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What's Included</h3>
                              <div className="space-y-2">
                                {tour.included.map((item, i) => (
                                  <div key={i} className="flex items-center text-sm text-gray-700 font-medium">
                                    <Check className="h-3 w-3 text-green-500 mr-2" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Detailed Itinerary */}
                          <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Detailed Daily Itinerary</h3>
                            <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                              {tour.itinerary.map((day, idx) => (
                                <div key={idx} className="relative pl-12">
                                  <div className="absolute left-0 top-1 h-[40px] w-[40px] rounded-full bg-white border-2 border-[#c89b5e] flex items-center justify-center z-10">
                                    <span className="text-[10px] font-bold text-[#c89b5e]">D{day.day}</span>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-1">{day.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{day.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />
                              All Inclusive Pricing
                            </span>
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              Small Group Guarantee
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
