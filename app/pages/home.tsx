'use client';
import React, { useState } from 'react'

// Flexi Wild Safari - Single-file React preview component
// TailwindCSS utility classes assumed to be available in the hosting environment.
// Replace IMAGE_* URLs with your final assets or local imports.

const DESTINATIONS = [
  {
    id: 'serengeti',
    title: 'Serengeti',
    subtitle: 'Great Migration & endless plains',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70'
  },
  {
    id: 'tarangire',
    title: 'Tarangire',
    subtitle: 'Baobabs & elephants',
    img: 'https://images.unsplash.com/photo-1558980394-0c9e3f60d3c8?auto=format&fit=crop&w=1600&q=70'
  },
  {
    id: 'manyara',
    title: 'Lake Manyara',
    subtitle: 'Birdlife & tree lions',
    img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=70'
  },
  {
    id: 'kilimanjaro',
    title: 'Kilimanjaro',
    subtitle: 'Summit treks & scenic routes',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=70'
  },
  {
    id: 'zanzibar',
    title: 'Zanzibar',
    subtitle: 'Beaches & culture',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=70'
  }
]

const ITINERARIES = [
  {
    id: 'classic-7',
    title: '7 days — Classic Serengeti & Ngorongoro',
    days: 7,
    summary: 'Serengeti game drives, Ngorongoro Crater and optional Zanzibar beach extension.',
  },
  {
    id: 'migration-10',
    title: '10 days — Migration Highlights',
    days: 10,
    summary: 'Follow the Great Migration with mobile camps and expert guides.'
  },
  {
    id: 'kilimanjaro-8',
    title: '8 days — Kilimanjaro Machame Route',
    days: 8,
    summary: 'A guided Kilimanjaro summit attempt via the scenic Machame route.'
  }
]

export default function HomePage() {
  const [view, setView] = useState('home')
  const [selectedDest, setSelectedDest] = useState<typeof DESTINATIONS[number] | null>(null)
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="bg-[#404d02] min-h-screen font-sans text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-green-700 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">FW</div>
              <div>
                <a href="#" onClick={(e)=>{e.preventDefault(); setView('home')}} className="text-lg font-semibold">Flexi Wild Safari</a>
                <div className="text-xs text-gray-500">Tailored safaris from Zanzibar to the Serengeti</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <button onClick={()=>setView('destinations')} className="hover:text-green-700">Destinations</button>
              <button onClick={()=>setView('itineraries')} className="hover:text-green-700">Itineraries</button>
              <button onClick={()=>setView('about')} className="hover:text-green-700">About</button>
              <button onClick={()=>setView('contact')} className="hover:text-green-700">Contact</button>
              <button onClick={()=>setShowBooking(true)} className="ml-4 px-4 py-2 bg-green-700 text-white rounded-md">Plan Your Safari</button>
            </nav>

            <div className="md:hidden">
              <button onClick={()=>setView(view==='home'?'menu':'home')} className="p-2">Menu</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className=""> 
        {view === 'home' && (
          <section>
            {/* Hero */}
            <div className="relative h-[60vh] md:h-[70vh] bg-gray-800 overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover opacity-90"
              >
                <source src='/hero-video.mp4' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl mx-auto text-center px-4">
                  <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">Discover Tanzania — Safaris that bend to you</h1>
                  <p className="mt-4 text-white/90 text-lg md:text-xl">From Zanzibar’s shores to the Serengeti plains — bespoke itineraries, local guides, responsible travel.</p>
                  <div className="mt-6 flex justify-center gap-3">
                    <button onClick={()=>{setShowBooking(true)}} className="px-5 py-3 bg-green-600 text-white rounded-md shadow">Plan Your Safari</button>
                    <button onClick={()=>setView('itineraries')} className="px-5 py-3 bg-white/90 text-gray-800 rounded-md">View Sample Trips</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Destinations */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold">Featured Destinations</h2>
                <p className="text-sm text-gray-600 mt-1">Hand-picked destinations across Tanzania — curated stays and activities.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {DESTINATIONS.map(d => (
                    <article key={d.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer" onClick={()=>{setSelectedDest(d); setView('destinations')}}>
                      <img src={d.img} alt={d.title} className="w-full h-44 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold">{d.title}</h3>
                        <p className="text-sm text-gray-600">{d.subtitle}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <button onClick={(e)=>{e.stopPropagation(); setSelectedDest(d); setView('destinations')}} className="text-green-700 text-sm">Explore</button>
                          <button onClick={(e)=>{e.stopPropagation(); setShowBooking(true)}} className="text-sm bg-gray-100 px-3 py-1 rounded">Book</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* Why travel with us */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold">Flexible departures</h4>
                  <p className="mt-2 text-sm text-gray-600">Choose dates that fit your schedule — private or small group departures available.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold">Local expertise</h4>
                  <p className="mt-2 text-sm text-gray-600">Experienced guides with deep knowledge of wildlife and local cultures.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold">Responsible travel</h4>
                  <p className="mt-2 text-sm text-gray-600">A portion of each booking supports local communities and conservation.</p>
                </div>
              </div>
            </section>

            {/* Sample Itineraries */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
              <h3 className="text-xl font-semibold">Sample Itineraries</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {ITINERARIES.map(it => (
                  <div key={it.id} className="bg-white rounded-lg shadow p-5">
                    <h4 className="font-semibold">{it.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{it.summary}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{it.days} days</span>
                      <button onClick={()=>{setShowBooking(true)}} className="px-3 py-1 bg-green-600 text-white rounded text-sm">Customize</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery strip */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
              <h3 className="text-lg font-semibold">Photo highlights</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-2">
                {DESTINATIONS.concat(DESTINATIONS).slice(0,6).map((d,i)=> (
                  <img key={i} src={d.img} alt={`gallery-${i}`} className="w-full h-28 object-cover rounded" />
                ))}
              </div>
            </section>

          </section>
        )}

        {view === 'destinations' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-2">
                {selectedDest ? (
                  <article>
                    <img src={selectedDest.img} alt={selectedDest.title} className="w-full h-64 object-cover rounded-lg" />
                    <h2 className="text-2xl font-semibold mt-4">{selectedDest.title}</h2>
                    <p className="text-gray-600 mt-2">{selectedDest.subtitle} — The perfect place to experience Tanzania's wildlife and scenery. Our itineraries put you close to the action with comfortable camps and experienced guides.</p>

                    <h3 className="mt-6 font-semibold">What to expect</h3>
                    <ul className="list-disc ml-6 mt-2 text-gray-600">
                      <li>Daily game drives led by expert guides</li>
                      <li>Hand-picked camps and lodges</li>
                      <li>Optional activities: balloon flights, walking safaris, community visits</li>
                    </ul>

                    <div className="mt-6 flex gap-3">
                      <button onClick={()=>setShowBooking(true)} className="px-4 py-2 bg-green-600 text-white rounded">Plan this trip</button>
                      <button onClick={()=>{setSelectedDest(null); setView('home')}} className="px-4 py-2 bg-gray-100 rounded">Back</button>
                    </div>
                  </article>
                ) : (
                  <div>
                    <h2 className="text-2xl font-semibold">Destinations</h2>
                    <p className="text-gray-600 mt-2">Explore our main regions and discover tailored experiences.</p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {DESTINATIONS.map(d => (
                        <div key={d.id} className="rounded overflow-hidden shadow">
                          <img src={d.img} alt={d.title} className="w-full h-40 object-cover" />
                          <div className="p-4">
                            <h4 className="font-semibold">{d.title}</h4>
                            <p className="text-sm text-gray-600">{d.subtitle}</p>
                            <div className="mt-3 flex items-center justify-between">
                              <button onClick={()=>{setSelectedDest(d)}} className="text-green-700 text-sm">Learn more</button>
                              <button onClick={()=>setShowBooking(true)} className="text-sm bg-gray-100 px-3 py-1 rounded">Book</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <aside className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold">Quick booking</h4>
                <p className="text-sm text-gray-600 mt-2">Enter dates and group size to get a quick quote.</p>
                <form className="mt-4 space-y-3">
                  <div>
                    <label className="text-sm block">Destination</label>
                    <select className="mt-1 w-full border rounded px-3 py-2 text-sm">
                      {DESTINATIONS.map(d=> <option key={d.id} value={d.id}>{d.title}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm block">Arrival</label>
                      <input type="date" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="text-sm block">Nights</label>
                      <input type="number" className="mt-1 w-full border rounded px-3 py-2 text-sm" defaultValue={3} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm block">Guests</label>
                    <input type="number" className="mt-1 w-full border rounded px-3 py-2 text-sm" defaultValue={2} />
                  </div>
                  <div>
                    <button type="button" onClick={()=>setShowBooking(true)} className="w-full px-4 py-2 bg-green-600 text-white rounded">Get Quote</button>
                  </div>
                </form>
              </aside>
            </div>
          </section>
        )}

        {view === 'itineraries' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-semibold">Itineraries</h2>
            <p className="text-gray-600 mt-2">Choose a sample itinerary and ask us to tailor it to your needs.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {ITINERARIES.map(it=> (
                <div key={it.id} className="bg-white p-5 rounded-lg shadow">
                  <h4 className="font-semibold">{it.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{it.summary}</p>
                  <ol className="mt-3 text-sm text-gray-600 list-decimal pl-5">
                    <li>Arrival & meet your guide</li>
                    <li>Game drives & activities</li>
                    <li>Conservation and community visit</li>
                    <li>Departure or beach extension to Zanzibar</li>
                  </ol>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{it.days} days</span>
                    <button onClick={()=>setShowBooking(true)} className="px-3 py-1 bg-green-600 text-white rounded text-sm">Enquire</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {view === 'about' && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-semibold">About Flexi Wild Safari</h2>
            <p className="text-gray-600 mt-4">Based in Zanzibar, Flexi Wild Safari crafts flexible, responsible safaris across Tanzania. Our mission is to create unforgettable wildlife experiences while supporting local communities and conservation initiatives.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold">Our Values</h4>
                <ul className="text-sm text-gray-600 mt-2 list-disc ml-5">
                  <li>Local stewardship & conservation</li>
                  <li>Personalised itineraries</li>
                  <li>Small groups & expert guides</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold">Team</h4>
                <p className="text-sm text-gray-600 mt-2">A local team of guides, operations managers and hospitality staff drawn from Tanzania.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold">Responsible Travel</h4>
                <p className="text-sm text-gray-600 mt-2">We contribute a percentage of each booking to community projects and follow low-impact camp practices.</p>
              </div>
            </div>
          </section>
        )}

        {view === 'contact' && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-semibold">Contact & Offices</h2>
            <p className="text-gray-600 mt-2">Head office: Zanzibar, Tanzania</p>
            <form className="mt-6 grid grid-cols-1 gap-4">
              <input className="border rounded px-3 py-2" placeholder="Full name" />
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <input className="border rounded px-3 py-2" placeholder="Phone" />
              <textarea className="border rounded px-3 py-2" placeholder="How can we help?" rows={4}></textarea>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded">Send enquiry</button>
                <button onClick={()=>setView('home')} className="px-4 py-2 bg-gray-100 rounded">Back</button>
              </div>
            </form>
          </section>
        )}

      </main>

      {/* Booking modal / drawer */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Plan Your Safari</h3>
              <button onClick={()=>setShowBooking(false)} className="text-gray-500">Close</button>
            </div>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="Full name" className="border rounded px-3 py-2" />
                <input placeholder="Email" className="border rounded px-3 py-2" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <input type="date" className="border rounded px-3 py-2" />
                <input type="number" placeholder="Nights" className="border rounded px-3 py-2" />
                <input type="number" placeholder="Guests" className="border rounded px-3 py-2" />
              </div>
              <select className="border rounded px-3 py-2">
                <option>Serengeti</option>
                <option>Tarangire</option>
                <option>Lake Manyara</option>
                <option>Kilimanjaro</option>
                <option>Zanzibar</option>
              </select>
              <textarea placeholder="Message or special requests" className="border rounded px-3 py-2" rows={3}></textarea>
              <div className="flex justify-end gap-2">
                <button onClick={(e)=>{e.preventDefault(); setShowBooking(false)}} className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded">Request Quote</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">Flexi Wild Safari</h4>
            <p className="text-sm text-gray-600 mt-2">Tailor-made safaris from Zanzibar to the Serengeti. Contact us for private departures and family trips.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li><button onClick={()=>setView('destinations')}>Destinations</button></li>
              <li><button onClick={()=>setView('itineraries')}>Itineraries</button></li>
              <li><button onClick={()=>setView('about')}>About</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm text-gray-600 mt-2">Zanzibar, Tanzania<br/>hello@flexiwildsafari.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
