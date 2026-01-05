'use client';

import Navbar from "@/app/pages/nav/page";
import Footer from "@/app/components/Footer";
import { useState } from 'react';

export default function GalleryPage() {
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-gray-300">
              Visual stories from our safari adventures
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-linear-to-br from-orange-400 to-amber-600 flex items-center justify-center overflow-hidden">
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
                </div>
              ))}
            </div>

            {/* Gallery Info */}
            <div className="mt-20 bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-orange-600 mb-2">10,000+</p>
                  <p className="text-gray-700">Professional Photos</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600 mb-2">500+</p>
                  <p className="text-gray-700">Wildlife Species</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600 mb-2">6</p>
                  <p className="text-gray-700">Amazing Destinations</p>
                </div>
              </div>
            </div>

            {/* Download Info */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
              <p className="text-gray-600 mb-6">
                Book a safari with us and create your own gallery of unforgettable moments!
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors">
                Book Your Safari Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
