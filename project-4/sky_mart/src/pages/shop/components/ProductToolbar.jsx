import { Search, ChevronDown, X } from "lucide-react";

const ProductToolbar = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  clearFilters,
}) => {
  // ================= Active Filters =================

  const hasFilters =
    search ||
    category !== "all" ||
    sort !== "featured";

  // Sort Label
  const sortLabel = {
    featured: "Featured",
    low: "Price: Low to High",
    high: "Price: High to Low",
    rating: "Top Rated",
  };

  return (
    <section className="mb-6 rounded-2xl border border-white/10 bg-[#151515] p-4">

      {/* ================= Inputs ================= */}

      <div className="flex flex-col gap-3 lg:flex-row">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              transition
              focus:border-[#eaff00]
            "
          />

        </div>

        {/* Category */}

        <div className="relative">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
              transition
              focus:border-[#eaff00]
            "
          >
            <option value="all">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="kitchen-accessories">
              Kitchen Accessories
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
          />

        </div>

        {/* Sort */}

        <div className="relative">

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="
              h-11
              w-full
              min-w-[170px]
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
              transition
              focus:border-[#eaff00]
            "
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
          />

        </div>

      </div>

      {/* ================= Active Filter Chips ================= */}

      {hasFilters && (
        <div className="mt-4 flex flex-wrap items-center gap-2">

          {/* Search */}

          {search && (
            <button
              onClick={() => setSearch("")}
              className="flex items-center gap-2 rounded-full border border-[#eaff00]/40 bg-[#eaff00]/10 px-3 py-1 text-xs text-[#eaff00] transition hover:bg-[#eaff00]/20"
            >
              {search}

              <X size={14} />
            </button>
          )}

          {/* Category */}

          {category !== "all" && (
            <button
              onClick={() => setCategory("all")}
              className="flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs capitalize text-cyan-400 transition hover:bg-cyan-500/20"
            >
              {category.replace("-", " ")}

              <X size={14} />
            </button>
          )}

          {/* Sort */}

          {sort !== "featured" && (
            <button
              onClick={() => setSort("featured")}
              className="flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs text-pink-400 transition hover:bg-pink-500/20"
            >
              {sortLabel[sort]}

              <X size={14} />
            </button>
          )}

          {/* Clear */}

          <button
            onClick={clearFilters}
            className="
              ml-auto
              rounded-lg
              px-3
              py-1.5
              text-xs
              font-medium
              text-red-400
              transition
              hover:bg-red-500/10
            "
          >
            Clear All
          </button>

        </div>
      )}

    </section>
  );
};

export default ProductToolbar;