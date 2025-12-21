import PopularItineraries from "./components/PopularItineraries";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";

import AboutUs from "./aboutus/page";
import Footer from "./components/Footer";
import AdventureHero from "./pages/hero/page";
import MapPage from "./pages/map/page";

export default function Home() {
  return (
    <>
      <AdventureHero />
      <MapPage />
      <PopularItineraries />
      <Destinations />
      <AboutUs />
      <Testimonials />
    </>
  );
}
