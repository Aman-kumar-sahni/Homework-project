// src/pages/Home.jsx


import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CategorySection from "./components/CategorySection";
import ProductShowcaseSection from "./components/ProductShowcaseSection";
import FeaturesSection from "./components/FeaturesSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">

      
      

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-20  sm:px-6 lg:px-8">

        {/* Hero Banner */}
        <HeroSection />

        {/* Statistics Cards */}
        <StatsSection />

        {/* Shop By Category */}
        <CategorySection />

        {/* Top Rated + New Arrivals */}
        <ProductShowcaseSection />

        {/* Bottom Features */}
        <FeaturesSection />

      </div>

      {/* Footer */}
      {/* <Footer /> */}

    </main>
  );
};

export default Home;