"use client";

import React from "react";
import { motion } from "framer-motion";
import { LoaderFive } from "@/components/ui/loader";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Page Header */}
      <section className="text-[#947846] py-8">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Our Safari Gallery</h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            <LoaderFive text="Immerse yourself in the visual wonders of the African savanna" />
          </p>
        </motion.div>
      </section>

      {/* Interactive Grid */}
      <div className="h-[1200px] md:h-[1000px] py-10 w-full relative">
        <LayoutGrid cards={cards} />
      </div>

      {/* Footer Info */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Bring Home These Memories</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Every photo tells a story of adventure, conservation, and the raw beauty of Tanzania. 
                Ready to capture your own?
            </p>
          <motion.button
            className="font-bold py-4 px-10 rounded-full transition-all relative overflow-hidden group shadow-xl"
            style={{ backgroundColor: "#947846", color: "#f7e6cc" }}
            whileHover={{ scale: 1.05, boxShadow: "0 25px 30px -5px rgba(148, 120, 70, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-lg">Book Your Journey Now</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">Serengeti Plains</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Witness the Great Migration and the endless horizon of the world's most famous wildlife sanctuary.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">Ngorongoro Crater</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Explore the "Garden of Eden," a unique volcanic caldera home to the rare black rhino.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">Tarangire Giants</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Marvel at the ancient baobab trees and the largest elephant herds in Northern Tanzania.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">Mount Kilimanjaro</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Stand at the foot of Africa's highest peak, the majestic "Roof of Africa."
    </p>
  </div>
);

const SkeletonFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">Lake Manyara</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A birdwatcher's paradise famous for its tree-climbing lions and pink flamingos.
    </p>
  </div>
);

const SkeletonSix = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">Zanzibar Beaches</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Relax on pristine white sands after your safari, where the emerald forest meets the turquoise sea.
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/serengeti.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/Ngorongoro.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/Tarangire.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/Kilimanjaro.webp",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: "/Manyara.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail: "/zanzibar.jpg",
  },
];
