'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NumberTicker } from '@/components/ui/number-ticker';

export default function GalleryPage() {
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
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'wildlife', 'landscape', 'people', 'adventure'];

  const galleryItems = [
    { id: 1, category: 'wildlife', title: 'Lion Pride', description: 'Majestic lions on the Serengeti plains' },
    { id: 2, category: 'wildlife', title: 'Elephant Herd', description: 'Gentle giants of Tarangire' },
    { id: 3, category: 'wildlife', title: 'Cheetah', description: 'Speed and grace in the savanna' },
    { id: 4, category: 'landscape', title: 'Crater Sunrise', description: 'Stunning Ngorongoro Crater at dawn' },
    { id: 5, category: 'landscape', title: 'Serengeti Plains', description: 'Endless golden grasslands' },
    { id: 6, category: 'landscape', title: 'Zanzibar Beach', description: 'Tropical paradise' },
    { id: 7, category: 'people', title: 'Local Culture', description: 'Maasai community interactions' },
    { id: 8, category: 'people', title: 'Our Guides', description: 'Expert guides sharing knowledge' },
    { id: 9, category: 'adventure', title: 'Hot Air Balloon', description: 'Aerial safari adventure' },
    { id: 10, category: 'adventure', title: 'Game Drive', description: 'Thrilling wildlife encounters' },
    { id: 11, category: 'wildlife', title: 'Giraffe Family', description: 'Giraffes reaching for acacia trees' },
    { id: 12, category: 'landscape', title: 'Great Migration', description: 'Crossing the Mara River' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        {/* Page Header */}
        <section className="text-[#947846] py-16">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-gray-800">
              Visual stories from our safari adventures
            </p>
          </motion.div>
        </section>

        {/* Gallery Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              {...fadeInUp}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${selectedCategory === cat
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  style={selectedCategory === cat ? { backgroundColor: '#947846' } : {}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  >

                    {/* Image Placeholder */}
                    <div className="relative h-64 flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #947846, #c89b5e)' }}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                      <div className="relative text-center z-10">
                        <div className="text-6xl mb-2">
                          {item.category === 'wildlife' && '🦁'}
                          {item.category === 'landscape' && '🏔️'}
                          {item.category === 'people' && '👥'}
                          {item.category === 'adventure' && '✈️'}
                        </div>
                        <p className="text-white text-lg font-bold drop-shadow-lg">
                          {item.title}
                        </p>
                      </div>
                    </div>

                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Gallery Info */}
            <motion.div
              className="mt-20 rounded-xl p-12"
              style={{ background: 'linear-gradient(to right, #f8ecdc, #f7e6cc)' }}
              {...fadeInUp}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <motion.div variants={staggerItem}>
                  <p className="text-4xl font-bold mb-2" style={{ color: '#947846' }}>
                    <NumberTicker value={10000} className="text-[#947846]" />+
                  </p>
                  <p className="text-gray-700">Professional Photos</p>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <p className="text-4xl font-bold mb-2" style={{ color: '#947846' }}>
                    <NumberTicker value={500} className="text-[#947846]" />+
                  </p>
                  <p className="text-gray-700">Wildlife Species</p>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <p className="text-4xl font-bold mb-2" style={{ color: '#947846' }}>
                    <NumberTicker value={6} className="text-[#947846]" />
                  </p>
                  <p className="text-gray-700">Amazing Destinations</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Download Info */}
            <motion.div
              className="mt-12 text-center"
              {...fadeInUp}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
              <p className="text-gray-600 mb-6">
                Book a safari with us and create your own gallery of unforgettable moments!
              </p>
              <motion.button
                className="font-bold py-4 px-8 rounded-lg transition-colors relative overflow-hidden group shadow-lg"
                style={{ backgroundColor: '#947846', color: '#f7e6cc' }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(148, 120, 70, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
                />
                <span className="relative z-10">Book Your Safari Now</span>
              </motion.button>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
}
