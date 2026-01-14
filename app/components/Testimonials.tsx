'use client';

import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/marquee';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'United States',
      rating: 5,
      text: 'Absolutely incredible experience! The guides were knowledgeable, the accommodations were comfortable, and we saw the Big Five within our first day. Flexi Safaris made our dream come true.',
      image: '👩‍🦱',
    },
    {
      id: 2,
      name: 'Marcus Williams',
      location: 'United Kingdom',
      rating: 5,
      text: 'The attention to detail was remarkable. From the initial booking to the last game drive, every aspect was professionally managed. We felt safe and comfortable throughout the entire journey.',
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emma Chen',
      location: 'Australia',
      rating: 5,
      text: 'Best safari experience ever! The wildlife encounters were extraordinary, and the sunset game drives were unforgettable. Highly recommend Flexi Safaris to anyone planning a Tanzania adventure.',
      image: '👩‍🦰',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      location: 'Spain',
      rating: 5,
      text: 'Professional, reliable, and passionate about what they do. The customized itinerary was perfect for our family. Our kids are still talking about the elephants and giraffes.',
      image: '👨‍🦱',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      location: 'Canada',
      rating: 5,
      text: 'The photography opportunities were insane! Every moment felt like a National Geographic shoot. The guides really went above and beyond to help us capture stunning images.',
      image: '👩‍🦳',
    },
    {
      id: 6,
      name: 'James Patterson',
      location: 'Ireland',
      rating: 5,
      text: 'From the moment we landed, we felt taken care of. The staff was friendly, the food was excellent, and the experiences were absolutely priceless. Worth every penny!',
      image: '👨‍🦲',
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6" style={{ color: '#c89b5e', fill: '#c89b5e' }} />
              ))}
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-600">
            Genuine reviews from our happy guests
          </p>
          <p className="text-gray-500 mt-4">
            4.8/5 Based on 3,700+ verified reviews
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <Marquee pauseOnHover speed={30} className="mb-8">
          <MarqueeContent>
            {testimonials.map((testimonial) => (
              <MarqueeItem key={testimonial.id} className="w-[400px]">
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5"
                          style={{ color: '#c89b5e', fill: '#c89b5e' }}
                        />
                      ))}
                    </div>
                    <Quote className="h-5 w-5" style={{ color: '#f7e6cc' }} />
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{testimonial.image}</div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          {...fadeInUp}
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to become one of our success stories?
          </p>
          <Link href="/tours">
            <motion.button
              className="font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg relative overflow-hidden group"
              style={{ backgroundColor: '#947846', color: '#f7e6cc' }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(148, 120, 70, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
              />
              <span className="relative z-10">Start Your Adventure Now</span>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
