export default function AboutUs() {
  const whyTravelItems = [
    {
      title: "Local Knowledge & Experience",
      description:
        "Our team lives and works on the ground in Tanzania, offering insider insight into wildlife patterns, park logistics, and cultural encounters.",
    },
    {
      title: "Tailored Trips for Every Traveler",
      description:
        "Whether it's a luxury private safari, budget-friendly group tour, or a family adventure, we design itineraries that match your goals.",
    },
    {
      title: "Customer-Focused Service",
      description:
        "From first inquiry to journey's end, our friendly travel designers ensure seamless planning and on-tour support.",
    },
    {
      title: "Responsible & Sustainable Tourism",
      description:
        "We care about conservation and community supporting ethical operations, local guides, and wildlife protection initiatives.",
    },
  ];

  const experiences = [
    {
      category: "Wildlife Safaris",
      items: [
        "Classic Lodge & Camp Safaris in Serengeti, Ngorongoro, Tarangire, Lake Manyara",
        "Great Migration Journeys",
        "Birding & Big Five Tracking",
      ],
    },
    {
      category: "Tailor-Made Packages",
      items: [
        "Private Safaris",
        "Family Adventures",
        "Honeymoon & Special Occasions",
      ],
    },
    {
      category: "Unique Adventure Add-Ons",
      items: [
        "Cultural village visits",
        "Hot Air Balloon excursions",
        "Walking safaris & bush dinners",
      ],
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description:
        "We provide real African safari experiences rooted in local knowledge and respect for nature.",
    },
    {
      title: "Safety & Comfort",
      description:
        "Guest safety and comfort are paramount — from our vehicle choices to accommodations and guides.",
    },
    {
      title: "Community & Conservation",
      description:
        "We support local livelihoods and conservation efforts, helping protect iconic landscapes and wildlife for future generations.",
    },
  ];

  const commitments = [
    "Licensed and locally registered tour operator",
    "Expert guides, drivers, and staff trained in customer care and safety",
    "Partnerships with trusted lodges, camps, and service providers",
    "Flexible itineraries tailored to individual preferences",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pt-24 sm:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Flexi Safaris
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Flexi Safaris is a Tanzania-based safari and adventure travel operator dedicated to creating unforgettable
            experiences across East Africa&apos;s most spectacular landscapes. With deep local expertise and a passion for wildlife and culture,
            we craft tailored safari tours, nature expeditions, and cultural journeys that exceed expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine the authentic hospitality of Tanzania with flexible, customer centric service ensuring
            every traveler enjoys the beauty of Africa safely, responsibly, and memorably.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide exceptional safari and adventure experiences that honor the natural world,
            support local communities, and deliver personalized journeys that feel both enriching and effortless.
          </p>
        </div>
      </section>

      {/* Why Travel Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Travel with Flexi Safaris</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyTravelItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Signature Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {exp.category}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-orange-500 font-bold mr-3">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            Every itinerary is designed to maximize wildlife viewing, cultural immersion, and comfortable,
            safe travel throughout Tanzania&apos;s diverse ecosystems.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Commitment to Quality</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Flexi Safaris operates with high professional standards:
          </p>
          <ul className="space-y-4">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 font-bold mr-4">▸</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We welcome travelers from around the world — families, honeymooners, adventure seekers, solo explorers,
            and groups all looking for tailored safari journeys through Tanzania&apos;s iconic landscapes and wildlife havens.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#947846] mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-[#947846] mb-8 text-lg">
            Let&apos;s plan your unforgettable Tanzanian safari experience.
          </p>
          <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-lg">
            Book Your Safari
          </button>
        </div>
      </section>
    </div>
  );
}