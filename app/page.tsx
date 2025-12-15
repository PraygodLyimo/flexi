'use client';

import AdventureHero from "./pages/hero/page";
import MapPage from "./pages/map/page";
import Navbar from "./pages/nav/page";
import PopularPackages from "./pages/packages/page";

export default function Home() {
  return (
    <>
    <Navbar />
    <AdventureHero />
    <MapPage />
    <PopularPackages />
    </>
  );
}
