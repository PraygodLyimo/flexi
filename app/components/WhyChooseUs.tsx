'use client';

import { Compass, Shield, Leaf, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Compass,
      title: 'Expert Local Guides',
      description:
        'Our experienced guides know every trail, every animal behavior, and the best times to spot wildlife. Local knowledge you can trust.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description:
        'Your safety is our priority. Professional drivers, well-maintained vehicles, and trained staff ensure a secure adventure.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Tourism',
      description:
        'We care for the environment and support local communities. Every safari contributes to conservation and community development.',
    },
    {
      icon: Zap,
      title: '100% Customizable',
      description:
        'Your preferences matter. We tailor every aspect of your journey to create your perfect African safari experience.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Flexi Safaris
          </h2>
          <p className="text-xl text-gray-300">
            What sets us apart from other tour operators
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                <Icon className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-700 pt-16">
          <div>
            <p className="text-4xl font-bold text-orange-400">15+</p>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-400">5000+</p>
            <p className="text-gray-400 mt-2">Happy Travelers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-400">50+</p>
            <p className="text-gray-400 mt-2">Expert Guides</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-400">100%</p>
            <p className="text-gray-400 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
