import CategorySection from "../../features/home/presentation/components/CategorySection";
import FeaturesSection from "../../features/home/presentation/components/FeatureSection";
import HeroSection from "../../features/home/presentation/components/HeroSection";
import ProductShowcaseSection from "../../features/home/presentation/components/ProductShowcaseSection";
import StatsSection from "../../features/home/presentation/components/StatsSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">

      
      

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-20  sm:px-6 lg:px-8">

        {/* Hero Banner */}
        <HeroSection/>

        {/* Statistics Cards */}
        <StatsSection/>

        {/* Shop By Category */}
        <CategorySection/>

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