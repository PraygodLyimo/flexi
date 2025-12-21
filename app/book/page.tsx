'use client';

import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function BookingForm() {
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
    <section className="py-20 bg-linear-to-r from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let Us Create Your Tailor-Made Trip
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              No strings attached. We'll design your perfect African safari journey — no cost, no commitment. Just tell us your vision and let our experts handle the rest.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-orange-600">4.9/5</p>
                <p className="text-gray-600 text-sm">TripAdvisor</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-orange-600">4.8/5</p>
                <p className="text-gray-600 text-sm">Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg"
              >
                Start Customizing
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center">
                No strings attached. We'll design your trip - no cost, no commitment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
