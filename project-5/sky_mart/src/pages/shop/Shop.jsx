import ProductGrid from "../../features/shop/presentation/components/ProductGrid";
import SearchBar from "../../features/shop/presentation/components/SearchBar";
import ShopHeader from "../../features/shop/presentation/components/ShopHeader";


const Shop = () => {
  return (
    <section
      className="
        min-h-screen
        bg-[#0d0d0d]
        text-white
        px-4
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-20
      "
    >
      <main className="mx-auto w-full max-w-[1440px] py-20">
        <ShopHeader />

        <div className="mt-8">
          <SearchBar />
        </div>

        <ProductGrid />
      </main>
    </section>
  );
};

export default Shop;