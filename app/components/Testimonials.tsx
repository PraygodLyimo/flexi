'use client';

import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-orange-500 fill-orange-500" />
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
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-orange-200" />
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
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Ready to become one of our success stories?
          </p>
          <Link href="/tours">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              Start Your Adventure Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
