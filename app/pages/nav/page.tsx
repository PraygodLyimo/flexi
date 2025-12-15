'use client';
import { useState } from 'react';
import { Menu, X, Mountain, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-[#475235]/40 backdrop-blur-md shadow-lg fixed top-0 z-50 w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between w-full">

          {/* LEFT — LOGO */}
          <div className="flex items-center space-x-2 shrink-0">
            <Mountain className="h-8 w-8 text-orange-500" />
            <span
              className='text-white font-extrabold sm:10xl md:15xl lg:6lg'
              style={{ fontFamily: 'Shadows into Light Two' }}
            >
              FLEXI WILD SAFARI
            </span>
          </div>

          {/* CENTER — NAVIGATION */}
          <div className="hidden lg:flex lg:items-center lg:space-x-20 flex-1 justify-center">
            <a href="#home" className="group relative text-white hover:text-orange-500 transition-colors duration-300">
              <span>HOME</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-white hover:text-orange-500 transition-colors duration-300">
                <span>DESTINATIONS</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#mountains" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  NGORONGORO
                </a>
                <a href="#beaches" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  SERENGETI
                </a>
                <a href="#forests" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  TARANGIRE
                </a>
                <a href="#deserts" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  MANYARA
                </a>
                <a href="" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  KILIMANJARO
                </a>
              </div>
            </div>

            <a href="#tours" className="group relative text-white hover:text-orange-500 transition-colors duration-300">
              <span>TOURS</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#gallery" className="group relative text-white hover:text-orange-500 transition-colors duration-300">
              <span>GALLERY</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#blog" className="group relative text-white hover:text-orange-500 transition-colors duration-300">
              <span>ABOUT US</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#contact" className="group relative text-white hover:text-orange-500 transition-colors duration-300">
              <span>CONTACT US</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* RIGHT — BOOK BUTTON */}
          <div className="hidden lg:flex items-center space-x-4 lg:ml-auto">
            <button className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              BOOK ADVENTURE
            </button>
          </div>

          {/* MOBILE MENU */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded-full p-2 text-white hover:bg-white/10"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 uppercase">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <a
              href="#home"
              className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>

            <div className="space-y-1">
              <div className="px-4 py-2 text-sm font-semibold text-gray-400">
                DESTINATIONS
              </div>
              <a href="#mountains" className="block rounded-lg px-4 py-2 pl-8 text-base text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                NGORONGORO
              </a>
              <a href="#beaches" className="block rounded-lg px-4 py-2 pl-8 text-base text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                SERENGETI
              </a>
              <a href="#forests" className="block rounded-lg px-4 py-2 pl-8 text-base text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                TARANGIRE
              </a>
              <a href="#deserts" className="block rounded-lg px-4 py-2 pl-8 text-base text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                MANYARA
              </a>
              <a href="" className='block rounded-lg px-4 py-2 pl-8 text-base text-white hover:bg-white/10'>
                KILIMANJARO
              </a>
            </div>

            <a href="#tours" className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              TOURS
            </a>

            <a href="#gallery" className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              GALLERY
            </a>

            <a href="#blog" className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              ABOUT US
            </a>

            <a href="#contact" className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              CONTACT US
            </a>

            <div className="flex flex-col space-y-2 pt-4">
              <button className="rounded-lg bg-orange-500 px-4 py-3 text-base font-semibold text-white hover:bg-orange-600">
                BOOK ADVENTURE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}