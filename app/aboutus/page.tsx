'use client';

import { motion } from 'framer-motion';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

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
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 flex flex-wrap justify-center items-center gap-3">
            About
            <ContainerTextFlip
              words={["Flexi Safaris", "Tanzania", "Your Adventure", "The Wild"]}
              className="text-[#947846]"
            />
          </h1>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        {...fadeInUp}
      >
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
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide exceptional safari and adventure experiences that honor the natural world,
            support local communities, and deliver personalized journeys that feel both enriching and effortless.
          </p>
        </div>
      </motion.section>

      {/* Why Travel Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-gray-900 mb-10" {...fadeInUp}>Why Travel with Flexi Safaris</motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {whyTravelItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default"
                variants={staggerItem}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Signature Experiences Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-gray-900 mb-10" {...fadeInUp}>Our Signature Experiences</motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                variants={staggerItem}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {exp.category}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="font-bold mr-3" style={{ color: '#947846' }}>•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <motion.p className="text-gray-700 leading-relaxed italic" {...fadeInUp}>
            Every itinerary is designed to maximize wildlife viewing, cultural immersion, and comfortable,
            safe travel throughout Tanzania&apos;s diverse ecosystems.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-gray-900 mb-10" {...fadeInUp}>Our Values</motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
        {...fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Commitment to Quality</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Flexi Safaris operates with high professional standards:
          </p>
          <ul className="space-y-4">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="font-bold mr-4" style={{ color: '#947846' }}>▸</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Who We Serve Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        {...fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We welcome travelers from around the world — families, honeymooners, adventure seekers, solo explorers,
            and groups all looking for tailored safari journeys through Tanzania&apos;s iconic landscapes and wildlife havens.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        {...fadeInUp}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#947846] mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-[#947846] mb-8 text-lg">
            Let&apos;s plan your unforgettable Tanzanian safari experience.
          </p>
          <motion.button
            className="font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg relative overflow-hidden group"
            style={{ backgroundColor: '#947846', color: '#f7e6cc' }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(148, 120, 70, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
            />
            <span className="relative z-10">Book Your Safari</span>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}