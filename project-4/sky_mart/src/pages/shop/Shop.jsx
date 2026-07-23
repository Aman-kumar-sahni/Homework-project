import Footer from "../../components/common/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductToolbar from "./components/ProductToolbar";
import ShopHeader from "./components/ShopHeader";


const Shop = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">

      <main className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <ShopHeader/>
        <ProductToolbar/>
        <ProductGrid/>
                

      </main>

      {/* Common Footer */}
      <Footer/>

    </div>
  );
};

export default Shop;