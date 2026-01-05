'use client';
import { useState } from 'react';
import { Menu, X, Mountain, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/aboutus' },
    { label: 'TOURS', href: '/tours' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  const destinations = [
    { label: 'SERENGETI', href: '/destinations#serengeti' },
    { label: 'NGORONGORO', href: '/destinations#ngorongoro' },
    { label: 'TARANGIRE', href: '/destinations#tarangire' },
    { label: 'LAKE MANYARA', href: '/destinations#manyara' },
    { label: 'KILIMANJARO', href: '/destinations#kilimanjaro' },
    { label: 'ZANZIBAR', href: '/destinations#zanzibar' },
  ];

  return (
    <nav className="bg-[#475235]/40 backdrop-blur-md shadow-lg fixed top-0 z-50 w-full border-b border-white/10">
      <div className="w-full">
        {/* Main navbar container */}
        <div className="flex h-16 sm:h-20 items-center justify-between px-3 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Mountain className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#c89b5e' }} />
            <span
              className='hidden xs:inline text-white font-extrabold text-sm sm:text-base md:text-lg'
              style={{ fontFamily: 'Shadows into Light Two' }}
            >
              FLEXI WILD SAFARI
            </span>
            <span
              className='xs:hidden text-white font-extrabold text-xs'
              style={{ fontFamily: 'Shadows into Light Two' }}
            >
              FLEXI
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative px-3 xl:px-4 py-2 text-white text-sm font-medium transition-colors duration-300"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#c89b5e' }}></span>
              </Link>
            ))}

            {/* Desktop Destinations Dropdown */}
            <div className="group relative px-3 xl:px-4 py-2">
              <button className="flex items-center space-x-1 text-white text-sm font-medium transition-colors duration-300">
                <span>DESTINATIONS</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-56 rounded-lg bg-white/95 backdrop-blur shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {destinations.map((dest) => (
                  <Link
                    key={dest.label}
                    href={dest.href}
                    className="block px-4 py-2.5 text-gray-700 text-sm transition-colors"
                  >
                    {dest.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP BOOK BUTTON */}
          <div className="hidden lg:flex items-center">
            <Link href="/book" className="font-bold py-2 px-4 rounded-lg transition-colors" style={{ backgroundColor: '#947846', color: '#f7e6cc' }}>
              BOOK ADVENTURE
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsDestinationsOpen(false);
              }}
              className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-sm border-t border-white/10 animate-in fade-in duration-200">
            <div className="px-3 sm:px-6 py-3 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Destinations Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                  className="w-full text-left rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>DESTINATIONS</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isDestinationsOpen && (
                  <div className="space-y-1 bg-slate-700/50 rounded-lg p-2 ml-2">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.label}
                        href={dest.href}
                        className="block rounded px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsDestinationsOpen(false);
                        }}
                      >
                        {dest.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Book Button */}
              <div className="pt-3 border-t border-white/10">
                <Link href="/book" className="block rounded-lg px-4 py-3 text-base font-semibold transition-colors" style={{ backgroundColor: '#947846', color: '#f7e6cc' }}>
                  BOOK ADVENTURE
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}