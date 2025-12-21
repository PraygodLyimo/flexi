'use client';

import Navbar from "@/app/pages/nav/page";
import Footer from "@/app/components/Footer";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-24">
        {/* Page Header */}
        <section className="bg-linear-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our safari experts
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Info Cards */}
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-2 border-orange-200">
                <MapPin className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-700">
                  Arusha, Tanzania<br/>
                  East Africa
                </p>
              </div>

              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-2 border-orange-200">
                <Phone className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Phone</h3>
                <p className="text-gray-700">
                  +255 (XXX) XXX-XXXX<br/>
                  Available 24/7
                </p>
              </div>

              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-2 border-orange-200">
                <Mail className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-700">
                  info@flexisafaris.com<br/>
                  We reply within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Safari inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Tell us about your safari dreams..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: 'How far in advance should I book?',
                      a: 'We recommend booking at least 2-3 months in advance for the best availability and pricing.',
                    },
                    {
                      q: 'Do you offer customized itineraries?',
                      a: 'Absolutely! All our trips are 100% customizable to match your interests and budget.',
                    },
                    {
                      q: 'What is your cancellation policy?',
                      a: 'We offer flexible cancellation. Full refund if canceled 60+ days before travel.',
                    },
                    {
                      q: 'Do I need a visa for Tanzania?',
                      a: 'Most travelers need a visa. We can provide guidance on visa requirements for your country.',
                    },
                    {
                      q: 'What vaccinations are required?',
                      a: 'Consult your doctor. Yellow fever and malaria prevention are typically recommended.',
                    },
                    {
                      q: 'What is the best time to visit?',
                      a: 'June-October (dry season) is best for wildlife viewing. Year-round safaris are possible.',
                    },
                  ].map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
              <div className="bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                <p className="text-gray-600 text-lg">
                  Based in Arusha, Tanzania - Gateway to Safari Adventures
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
