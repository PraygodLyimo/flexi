"use client";
import React from "react";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Premium Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the exclusive advantages of planning your Tanzanian adventure with Flexi Wild Safari.
          </p>
        </header>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-5 w-5 text-[#947846]" />}
            title="Expertly Crafted Journeys"
            description="Our itineraries are refined over years of experience to ensure you see the best of Tanzania at the perfect pace." />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-5 w-5 text-[#947846]" />}
            title="Tailored Just for You"
            description="100% customizable safaris. Whether you want luxury or adventure, we adapt every detail to your preferences." />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-5 w-5 text-[#947846]" />}
            title="Secure & Reliable Bookings"
            description="Your safety and security are our top priority. We use industry-leading lead times and flexible cancellation policies." />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-5 w-5 text-[#947846]" />}
            title="Unforgettable Memories"
            description="Capture the Great Migration, summit Kilimanjaro, or relax in Zanzibar. We create stories that last a lifetime." />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-5 w-5 text-[#947846]" />}
            title="Deep Local Knowledge"
            description="Our guides are local experts with passion for wildlife and culture, revealing secrets of the savanna that others miss." />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({
  area,
  icon,
  title,
  description
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-100 p-2 md:rounded-3xl md:p-3 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-[#947846]/30 bg-[#947846]/5 p-3 transition-colors group-hover:bg-[#947846]/10">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-bold text-gray-900 md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <p
                className="font-sans text-sm/[1.125rem] text-gray-600 md:text-base/[1.375rem] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
