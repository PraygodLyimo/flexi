'use client';

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Flexi Safaris</h3>
            <p className="text-gray-400">
              Crafting unforgettable African safari experiences since 2010.
            </p>
            <div className="mt-4 flex space-x-4">
              <Facebook className="h-5 w-5 text-orange-500 hover:text-orange-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-orange-500 hover:text-orange-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-orange-500 hover:text-orange-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Safaris</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Destinations</a></li>
              <li><a href="/aboutus" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition">Serengeti</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Ngorongoro</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Tarangire</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Kilimanjaro</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Zanzibar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>Tanzania, East Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+255 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>info@flexisafaris.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-12 mb-12">
          <div className="max-w-md mx-auto">
            <h4 className="font-bold text-lg text-center mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-center mb-4">
              Subscribe to our newsletter for exclusive deals and travel tips
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 Flexi Safaris. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
