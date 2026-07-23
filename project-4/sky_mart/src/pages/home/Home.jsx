import BenefitsSection from "./components/BenefitsSection";
import CategorySection from "./components/CategorySection";
import DashboardStats from "./components/DashboardStats";
import HomeFooter from "./components/HomeFooter";
import ProductHighlights from "./components/ProductHighlights";
import WelcomeBanner from "./components/WelcomeBanner";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#151515] text-white">

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">

        

        <WelcomeBanner/>


    
<DashboardStats/>
<CategorySection/>
<ProductHighlights/>        
<BenefitsSection/>
      </div>
<HomeFooter/>

    </main>
  );
};

export default Home;