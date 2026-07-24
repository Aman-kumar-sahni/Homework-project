import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import ProductToolbar from "./components/ProductToolbar";
import ShopHeader from "./components/ShopHeader";

const Shop = () => {
  // ================= Filters =================

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  // ================= Product Count =================

  const [productCount, setProductCount] = useState(0);

  // ================= Clear All =================

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("featured");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">

      <main className="mx-auto w-full max-w-[80rem] px-4 py-12 sm:px-6 lg:px-8">

        {/* ================= Page Heading ================= */}

        <ShopHeader
          productCount={productCount}
          category={category}
          search={search}
        />

        {/* ================= Toolbar ================= */}

        <ProductToolbar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          clearFilters={clearFilters}
        />

        {/* ================= Products ================= */}

        <ProductGrid
          search={search}
          category={category}
          sort={sort}
          setProductCount={setProductCount}
        />

      </main>

    </div>
  );
};

export default Shop;