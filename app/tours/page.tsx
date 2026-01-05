'use client';

import Navbar from "@/app/pages/nav/page";
import Footer from "@/app/components/Footer";
import { Star, MapPin, DollarSign, Calendar, Users } from 'lucide-react';

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: '7 Days Tanzania Safari',
      price: 1588,
      duration: '7 Days',
      groupSize: '2-6 People',
      destinations: 'Serengeti & Ngorongoro',
      description: 'Visit two of Africa\'s Seven Natural Wonders in this action-packed week.',
      fullDescription: 'Experience the highlights of Tanzania in just 7 days. This safari covers the must-see destinations, giving you incredible wildlife viewing and dramatic landscapes. Perfect for those with limited time but big safari dreams.',
      itinerary: [
        { day: 1, title: 'Arrival in Arusha', desc: 'Meet your guide and briefing for the adventure ahead' },
        { day: 2, title: 'Tarangire National Park', desc: 'Game drives and elephant encounters' },
        { day: 3, title: 'Lake Manyara', desc: 'Tree-climbing lions and scenic views' },
        { day: 4, title: 'Ngorongoro Crater', desc: 'Descent into the crater for wildlife viewing' },
        { day: 5, title: 'Serengeti - Game Drive', desc: 'Full day exploring the vast Serengeti plains' },
        { day: 6, title: 'Serengeti - More Exploration', desc: 'Additional game drives with more wildlife opportunities' },
        { day: 7, title: 'Return to Arusha', desc: 'Depart with unforgettable memories' },
      ],
      rating: 4.9,
      reviews: 342,
      highlights: ['Big Five', 'Great Migration', 'Crater Views'],
      included: ['Accommodation', 'Meals', 'Game Drives', 'Experienced Guide'],
    },
    {
      id: 2,
      title: '9 Days Great Migration Safari',
      price: 2289,
      duration: '9 Days',
      groupSize: '2-8 People',
      destinations: 'Full Serengeti Circuit',
      description: 'Witness the world\'s greatest wildlife spectacle - the Great Migration.',
      fullDescription: 'This extended safari gives you more time to follow the migration, increase wildlife encounters, and experience the raw beauty of the Serengeti. Ideal for wildlife photographers and serious safari enthusiasts.',
      itinerary: [
        { day: 1, title: 'Arrival & Briefing', desc: 'Welcome to Tanzania' },
        { day: 2, title: 'Tarangire', desc: 'Elephant herds and baobab landscapes' },
        { day: 3, title: 'Lake Manyara', desc: 'Flamingos and tree-climbing lions' },
        { day: 4, title: 'Ngorongoro Crater', desc: 'UNESCO World Heritage site exploration' },
        { day: 5, title: 'Serengeti - Western Corridor', desc: 'River crossings and predator action' },
        { day: 6, title: 'Serengeti - Central Plains', desc: 'Vast herds and abundant wildlife' },
        { day: 7, title: 'Serengeti - Northern Region', desc: 'Migration and scenic game drives' },
        { day: 8, title: 'Serengeti - Final Exploration', desc: 'Last wildlife encounters' },
        { day: 9, title: 'Return Journey', desc: 'Depart with lasting memories' },
      ],
      rating: 4.9,
      reviews: 512,
      highlights: ['Migration', 'River Crossing', 'Game Drives', 'Photography'],
      included: ['Accommodation', 'Meals', 'Game Drives', 'Expert Guide', 'Migration Tracking'],
    },
    {
      id: 3,
      title: '11 Days Safari & Zanzibar Escape',
      price: 2126,
      duration: '11 Days',
      groupSize: '1-10 People',
      destinations: 'Safari + Beach',
      description: 'Best of both worlds: Wildlife adventure and tropical beach relaxation.',
      fullDescription: 'Combine an exciting safari with a relaxing beach escape. Experience the wildlife wonders of Tanzania followed by pristine beaches and cultural exploration of historic Zanzibar.',
      itinerary: [
        { day: 1, title: 'Arrival in Arusha', desc: 'Safari briefing and introduction' },
        { day: 2, title: 'Tarangire', desc: 'Safari begins with elephant viewing' },
        { day: 3, title: 'Lake Manyara', desc: 'Scenic park exploration' },
        { day: 4, title: 'Ngorongoro', desc: 'Crater adventure' },
        { day: 5, title: 'Serengeti - Game Drive', desc: 'Vast plains and wildlife' },
        { day: 6, title: 'Serengeti - More Exploration', desc: 'Additional wildlife encounters' },
        { day: 7, title: 'Fly to Zanzibar', desc: 'Relax and adjust pace' },
        { day: 8, title: 'Zanzibar Beach Day', desc: 'Swimming and snorkeling' },
        { day: 9, title: 'Stone Town Tour', desc: 'Historical and cultural exploration' },
        { day: 10, title: 'Spice Tour & Beach', desc: 'Local culture and more beach time' },
        { day: 11, title: 'Depart', desc: 'Fly home with amazing memories' },
      ],
      rating: 4.8,
      reviews: 428,
      highlights: ['Safari Tour', 'Beach Escape', 'Cultural Tour', 'Snorkeling'],
      included: ['Flights', 'Accommodation', 'Meals', 'All Activities', 'Expert Guides'],
    },
    {
      id: 4,
      title: '15 Days Ultimate Tanzania Adventure',
      price: 2934,
      duration: '15 Days',
      groupSize: '1-6 People',
      destinations: 'Ultimate Tanzania',
      description: 'Travel at your own pace - Extended adventure with flexibility and luxury.',
      fullDescription: 'This comprehensive tour is designed for those who want the complete Tanzania experience. Spend more time in each location, enjoy luxury accommodations, and have flexibility to customize activities.',
      itinerary: [
        { day: 1, title: 'Arrival', desc: 'Welcome and briefing' },
        { day: 2, title: 'Tarangire', desc: 'Elephant encounters' },
        { day: 3, title: 'Tarangire - Extended', desc: 'More wildlife viewing' },
        { day: 4, title: 'Lake Manyara', desc: 'Scenic exploration' },
        { day: 5, title: 'Ngorongoro - Rim Visit', desc: 'Crater views and walks' },
        { day: 6, title: 'Ngorongoro - Crater Descent', desc: 'Full crater experience' },
        { day: 7, title: 'Serengeti - Arrival', desc: 'Begin Serengeti exploration' },
        { day: 8, title: 'Serengeti - Western Corridor', desc: 'River crossings' },
        { day: 9, title: 'Serengeti - Central Plains', desc: 'Migration viewing' },
        { day: 10, title: 'Serengeti - Northern Region', desc: 'Remote areas and wildlife' },
        { day: 11, title: 'Fly to Zanzibar', desc: 'Transition to beach' },
        { day: 12, title: 'Zanzibar - Beach', desc: 'Swimming and water activities' },
        { day: 13, title: 'Stone Town & Culture', desc: 'History and local experiences' },
        { day: 14, title: 'Zanzibar - Leisure', desc: 'Spa, shopping, relaxation' },
        { day: 15, title: 'Departure', desc: 'Fly home' },
      ],
      rating: 4.9,
      reviews: 287,
      highlights: ['Full Safari', 'Extended Beach', 'Luxury Camps', 'Flexibility'],
      included: ['All Flights', 'Luxury Accommodation', 'All Meals', 'All Activities', 'Personal Guide'],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-24">
        {/* Page Header */}
        <section className="text-[#947846] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>Our Safari Tours</h1>
            <p className="text-xl text-[#947246]" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>
              Carefully curated itineraries for unforgettable African experiences
            </p>
          </div>
        </section>

        {/* Tours */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left - Content */}
                  <div className="lg:col-span-2 p-8 lg:p-12 text-[#947846]">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>{tour.title}</h2>
                    <p className="text-xl text-gray-600 mb-6" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>{tour.description}</p>
                    <p className="text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Myriad Pro, sans-serif' }}>{tour.fullDescription}</p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5" style={{ color: '#c89b5e' }} />
                        <div>
                          <p className="text-xs text-gray-600">Duration</p>
                          <p className="font-bold text-gray-900">{tour.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5" style={{ color: '#c89b5e' }} />
                        <div>
                          <p className="text-xs text-gray-600">Group Size</p>
                          <p className="font-bold text-gray-900">{tour.groupSize}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5" style={{ color: '#c89b5e' }} />
                        <div>
                          <p className="text-xs text-gray-600">Destinations</p>
                          <p className="font-bold text-gray-900">{tour.destinations}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5" style={{ color: '#c89b5e' }} />
                        <div>
                          <p className="text-xs text-gray-600">Rating</p>
                          <p className="font-bold text-gray-900">{tour.rating} ({tour.reviews})</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 mb-3">Highlights</h3>
                      <div className="flex flex-wrap gap-2">
                        {tour.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f7e6cc', color: '#947846' }}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 mb-3">What's Included</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {tour.included.map((item, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <span className="mr-2" style={{ color: '#c89b5e' }}>✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div className="border-t pt-8">
                      <h3 className="font-bold text-gray-900 mb-6 text-2xl">Detailed Itinerary</h3>
                      <div className="space-y-4">
                        {tour.itinerary.map((item, idx) => (
                          <div key={idx} className="flex space-x-4">
                            <div className="shrink-0">
                              <div className="flex items-center justify-center h-10 w-10 rounded-full text-white font-bold" style={{ backgroundColor: '#c89b5e' }}>
                                {item.day}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{item.title}</h4>
                              <p className="text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right - Booking Card */}
                  <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-gray-600 text-sm font-semibold mb-2">PRICE FROM</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-2">
                        ${tour.price.toLocaleString()}
                      </p>
                      <p className="text-gray-600 text-sm mb-8">Per person (shared accommodation)</p>

                      <div className="space-y-4">
                        <button className="w-full font-bold py-3 px-4 rounded-lg transition-colors" style={{ backgroundColor: '#947846', color: '#f7e6cc' }}>
                          Book This Tour
                        </button>
                        <button className="w-full border-2 font-bold py-3 px-4 rounded-lg transition-colors" style={{ borderColor: '#947846', color: '#ffffffff' }}>
                          Customize Itinerary
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-gray-700 text-sm mb-4">
                        Have questions? Our experts are ready to help!
                      </p>
                      <a href="mailto:info@flexisafaris.com" className="font-bold" style={{ color: '#947846' }}>
                        info@flexisafaris.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
