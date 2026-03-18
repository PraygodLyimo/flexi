'use client';

import { Star, MapPin, DollarSign, Calendar, Users, ChevronDown, ChevronUp, Check, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

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
      image: '/serengeti.jpg',
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
      image: '/Ngorongoro.jpg',
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
      image: '/zanzibar.jpg',
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
      image: '/Tarangire.jpg',
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
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 overflow-hidden">
        {/* Cinematic Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/serengeti.jpg')" }}
        >
          {/* Enhanced Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div
          className="absolute inset-0 z-[1] opacity-25 bg-[url('/safari-pattern.png')] bg-repeat"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>

        {/* Dynamic Savannah Particles/Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#c89b5e]/15 rounded-full blur-3xl z-[1]"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1
            className="text-7xl md:text-9xl mb-8 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] font-great-vibes"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Our Safari Tours
          </motion.h1>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
              <TextGenerateEffect
                words="Experience the raw beauty of Tanzania's wilderness with our meticulously crafted luxury safari tours."
              />
            </div>
          </div>
          <motion.div
            className="mt-12 h-1 w-32 bg-[#c89b5e] mx-auto rounded-full shadow-[0_0_20px_rgba(200,155,94,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>
      </section>
      
      {/* Main Content with Premium Textures */}
      <div className="relative min-h-screen bg-[#faf7f2] py-20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/pattern-zebra.svg')] bg-repeat bg-[length:300px_300px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {tours.map((tour) => (
              <motion.div
                key={tour.id}
                variants={staggerItem}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(148,120,70,0.3)] border border-gray-100/50"
              >
                {/* Image Section with stylized zoom */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-[#947846] font-bold text-xl">${tour.price}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    <Star className="w-3.5 h-3.5 text-[#c89b5e] fill-[#c89b5e]" />
                    <span className="text-white text-xs font-bold">{tour.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#947846] transition-colors duration-300 pr-2">
                    {tour.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      <div className="w-8 h-8 rounded-lg bg-[#f8ecdc] flex items-center justify-center mr-3 text-[#947846]">
                        <Clock className="w-4 h-4" />
                      </div>
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      <div className="w-8 h-8 rounded-lg bg-[#f8ecdc] flex items-center justify-center mr-3 text-[#947846]">
                        <Users className="w-4 h-4" />
                      </div>
                      {tour.groupSize}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      <div className="w-8 h-8 rounded-lg bg-[#f8ecdc] flex items-center justify-center mr-3 text-[#947846]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      {tour.destinations}
                    </div>
                  </div>

                  {/* Highlights Summary */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tour.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] uppercase tracking-wider font-bold rounded-md border border-gray-100">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Action Section */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <button
                      onClick={() => toggleExpand(tour.id)}
                      className="text-[#947846] font-bold text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-8 transition-all"
                    >
                      {expandedId === tour.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-[#947846] text-white flex items-center justify-center shadow-lg shadow-[#947846]/20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedId === tour.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="bg-[#f8ecdc]/30 p-6 rounded-2xl border border-[#947846]/10">
                          <p className="text-gray-700 mb-6 leading-relaxed italic pr-2">
                            "{tour.fullDescription}"
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                             <div className="space-y-2">
                               <p className="font-bold text-[#947846] tracking-widest uppercase">What's Included</p>
                               {tour.included.map((item, i) => (
                                 <div key={i} className="flex items-center text-gray-600">
                                   <div className="w-1.5 h-1.5 rounded-full bg-[#c89b5e] mr-2" />
                                   {item}
                                 </div>
                               ))}
                             </div>
                             <div className="space-y-2">
                               <p className="font-bold text-[#947846] tracking-widest uppercase">Itinerary Preview</p>
                               {tour.itinerary.slice(0, 3).map((day, i) => (
                                 <div key={i} className="flex items-start text-gray-600">
                                   <span className="font-bold mr-2">D{day.day}</span>
                                   <span>{day.title}</span>
                                 </div>
                               ))}
                               <p className="text-[#947846] font-medium mt-2">+ Many more days</p>
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
