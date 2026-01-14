'use client';

import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BookingForm() {
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
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const [formData, setFormData] = useState({
    adults: 2,
    children: 0,
    date: '',
    email: '',
  });

  const features = [
    'All trips are 100% tailor-made',
    '5-star customer reviews',
    'Best value & free quotation',
    'Experts in Tanzania travel',
    'We take care of everything',
  ];

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to right, #f8ecdc, #f7e6cc)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let Us Create Your Tailor-Made Trip
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              No strings attached. We'll design your perfect African safari journey — no cost, no commitment. Just tell us your vision and let our experts handle the rest.
            </p>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div key={index} className="flex items-start space-x-3" variants={staggerItem}>
                  <CheckCircle className="h-6 w-6 shrink-0 mt-1" style={{ color: '#c89b5e' }} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={staggerItem}>
                <p className="text-3xl font-bold" style={{ color: '#947846' }}>4.9/5</p>
                <p className="text-gray-600 text-sm">TripAdvisor</p>
              </motion.div>
              <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={staggerItem}>
                <p className="text-3xl font-bold" style={{ color: '#947846' }}>4.8/5</p>
                <p className="text-gray-600 text-sm">Google Reviews</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Plan Your Dream Trip Together!
            </h3>

            <form className="space-y-6">
              {/* Travelers Section */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ADULTS
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          adults: Math.max(1, formData.adults - 1),
                        })
                      }
                      className="px-3 py-2 text-gray-600"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="flex-1 text-center py-2 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          adults: formData.adults + 1,
                        })
                      }
                      className="px-3 py-2 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CHILDREN
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          children: Math.max(0, formData.children - 1),
                        })
                      }
                      className="px-3 py-2 text-gray-600"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="flex-1 text-center py-2 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          children: formData.children + 1,
                        })
                      }
                      className="px-3 py-2 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Date Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ESTIMATED ARRIVAL DATE
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#947846]"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#947846]"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full font-bold py-3 px-4 rounded-lg transition-colors text-lg shadow-lg relative overflow-hidden group"
                style={{ backgroundColor: '#947846', color: '#f7e6cc' }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(148, 120, 70, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
                />
                <span className="relative z-10">Start Customizing</span>
              </motion.button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center">
                No strings attached. We'll design your trip - no cost, no commitment.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
