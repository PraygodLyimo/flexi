'use client';

import { Compass, Shield, Leaf, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
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
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Flexi Safaris
          </h2>
          <p className="text-xl text-gray-300">
            What sets us apart from other tour operators
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-8 transition-all duration-300 cursor-default"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#947846',
                  transition: { duration: 0.2 }
                }}
              >

                <Icon className="h-12 w-12 mb-4" style={{ color: '#c89b5e' }} />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>


        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-700 pt-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem}>
            <p className="text-4xl font-bold" style={{ color: '#c89b5e' }}>15+</p>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <p className="text-4xl font-bold" style={{ color: '#c89b5e' }}>5000+</p>
            <p className="text-gray-400 mt-2">Happy Travelers</p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <p className="text-4xl font-bold" style={{ color: '#c89b5e' }}>50+</p>
            <p className="text-gray-400 mt-2">Expert Guides</p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <p className="text-4xl font-bold" style={{ color: '#c89b5e' }}>100%</p>
            <p className="text-gray-400 mt-2">Satisfaction Rate</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
