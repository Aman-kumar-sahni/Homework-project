import { Search, ChevronDown } from "lucide-react";

const ProductToolbar = () => {
  return (
    <section className="mb-6 rounded-2xl border border-white/70 p-3">

      <div className="flex flex-col gap-3 lg:flex-row">

        {/* Search */}
        <div className="relative flex-1">

          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-white/10
              bg-[#222222]
              pl-11
              pr-4
              text-sm
              text-white
              outline-none
              placeholder:text-white/40
              focus:border-[#eaff00]
            "
          />

        </div>

        {/* Category Filter */}
        <div className="relative">

          <select
            className="
              h-11
              w-full
              min-w-[180px]
              appearance-none
              rounded-xl
              border
              border-white/10
              bg-[#222222]
              px-4
              pr-10
              text-sm
              text-white
              outline-none
              focus:border-[#eaff00]
            "
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Furniture</option>
            <option>Home</option>
            <option>Sports</option>
            <option>Accessories</option>
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-white/50
            "
          />

        </div>

        {/* Sort Filter */}
        <div className="relative">

          <select
            className="
              h-11
              w-full
              min-w-[150px]
              appearance-none
              rounded-xl
              border
              border-white/10
              bg-[#222222]
              px-4
              pr-10
              text-sm
              text-white
              outline-none
              focus:border-[#eaff00]
            "
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-white/50
            "
          />

        </div>

      </div>

    </section>
  );
};

export default ProductToolbar;