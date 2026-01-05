'use client';

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#947846', color: '#f7e6cc' }}>
      {/* Main Footer */}
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Flexi Safaris</h3>
            <p style={{ color: '#f7e6cc' }}>
              Crafting unforgettable African safari experiences since 2010.
            </p>
            <div className="mt-4 flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer" style={{ color: '#c89b5e' }} />
              <Instagram className="h-5 w-5 cursor-pointer" style={{ color: '#c89b5e' }} />
              <Twitter className="h-5 w-5 cursor-pointer" style={{ color: '#c89b5e' }} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2" style={{ color: '#f7e6cc' }}>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Home</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Safaris</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Destinations</a></li>
              <li><a href="/aboutus" className="transition" style={{ color: '#f7e6cc' }}>About Us</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Contact</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2" style={{ color: '#f7e6cc' }}>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Serengeti</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Ngorongoro</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Tarangire</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Kilimanjaro</a></li>
              <li><a href="#" className="transition" style={{ color: '#f7e6cc' }}>Zanzibar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3" style={{ color: '#f7e6cc' }}>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" style={{ color: '#c89b5e' }} />
                <span>Tanzania, East Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" style={{ color: '#c89b5e' }} />
                <span>+255 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" style={{ color: '#c89b5e' }} />
                <span>info@flexisafaris.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}


        {/* Bottom Footer */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderColor: '#c89b5e', color: '#f7e6cc' }}>
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
