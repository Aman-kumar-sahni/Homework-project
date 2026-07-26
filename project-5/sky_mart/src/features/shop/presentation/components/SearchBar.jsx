import { Search, ChevronDown } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mt-8 rounded-2xl border border-lime-300/50  bg-[#121212] p-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="h-12 w-full rounded-xl border border-zinc-700 bg-[#1A1A1A] pl-11 pr-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-lime-300"
          />
        </div>

        {/* Category */}
        <div className="relative w-full lg:w-52">
          <select className="h-12 w-full appearance-none rounded-xl border border-zinc-700 bg-[#1A1A1A] px-4 text-white outline-none transition-all focus:border-lime-300">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Furniture</option>
            <option>Home</option>
            <option>Sports</option>
            <option>Accessories</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Sort */}
        <div className="relative w-full lg:w-48">
          <select className="h-12 w-full appearance-none rounded-xl border border-zinc-700 bg-[#1A1A1A] px-4 text-white outline-none transition-all focus:border-lime-300">
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
            <option>Rating</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;