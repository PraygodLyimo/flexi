'use client';

import { useState, useEffect } from 'react';

export default function PopularPackages() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      id: 1,
      title: '7-Day Trek in the Andes',
      price: 'From $1,999',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop',
      delay: '0ms'
    },
    {
      id: 2,
      title: 'Coastal Retreat in Costa Rica',
      price: 'From $2,499',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
      delay: '150ms'
    },
    {
      id: 3,
      title: 'Forest Expedition in the Amazon',
      price: 'From $2,199',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2059&auto=format&fit=crop',
      delay: '300ms'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #f8ecdc, #f8ecdc)' }}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2
            className={`text-4xl font-bold sm:text-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            style={{ color: '#5c421d' }}
          >
            Explore Our Most Popular Packages
          </h2>
          <div
            className={`mx-auto mt-4 h-1 w-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            style={{ backgroundColor: '#c89b5e' }}
          ></div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-700 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: pkg.delay }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Explore Button - appears on hover */}
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-3 font-semibold opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" style={{ backgroundColor: '#947846', color: '#f7e6cc' }}>
                  Explore Package
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold transition-colors duration-300" style={{ color: '#5c421d' }}>
                  {pkg.title}
                </h3>
                <p className="text-lg font-semibold" style={{ color: '#947846' }}>{pkg.price}</p>

                {/* Progress Bar Animation */}
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-0 rounded-full transition-all duration-1000 ease-out group-hover:w-full" style={{ backgroundColor: '#c89b5e' }}></div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ backgroundColor: '#c89b5e', color: '#f7e6cc' }}>
                Popular
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <button className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ backgroundColor: '#947846', color: '#f7e6cc' }}>
            <span className="relative z-10">View All Packages</span>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(to right, #c89b5e, #947846)' }}></div>
          </button>
        </div>
      </div>
    </section>
  );
}