import { Search, ChevronDown, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../app/providers/AppProviders";

const SearchBar = () => {
  const { products, setProducts, allProducts, setAllProducts ,category,setCategory} =
    useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [featured, setFeatured] = useState("Featured");

  function filterData() {
    let result = [...allProducts];

    const query = search.trim().toLowerCase();

    if (query !== "") {
      result = result.filter(
        (elem) =>
          elem.title.toLowerCase().includes(query) ||
          elem.category.toLowerCase().includes(query)
      );
    }

    if (category !== "All Categories") {
      result = result.filter(
        (elem) =>
          elem.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featured === "Newest") {
      result.sort((a, b) => b.id - a.id);
    }
    if (featured === "Price: Low -> High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (featured ==="Price: High -> Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (featured === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setProducts(result);
  }

  useEffect(() => {
    filterData();
  }, [search, category, featured]);

  
   return (
  <div className="mt-8 rounded-2xl border border-lime-300/50 bg-[#121212] p-3 sm:p-4 md:p-5">

    {/* Filter Row */}
    <div className="flex flex-col gap-3">

      {/* Main Controls */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
          value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="
              h-11 w-full rounded-xl
              border border-zinc-700
              bg-[#1A1A1A]
              pl-11 pr-4
              text-sm text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              focus:border-lime-300
              focus:ring-1
              focus:ring-lime-300/20
            "
          />
        </div>

        {/* Secondary Controls */}
        <div className="flex flex-col gap-3 sm:flex-row">

          {/* Category */}
          <div className="relative min-w-0 flex-1 sm:w-40 sm:flex-none lg:w-36 xl:w-40">
            <select
            value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                h-11 w-full appearance-none
                rounded-xl
                border border-zinc-700
                bg-[#1A1A1A]
                px-4 pr-9
                text-sm text-white
                outline-none
                transition-all
                focus:border-lime-300
                focus:ring-1
                focus:ring-lime-300/20
              "
            >
              <option value="All Categories">All Categories</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
              <option value="home-decoration">
                Home-Decoration
              </option>
              <option value="kitchen-accessories">
                Kitchen-Accessories
              </option>
            </select>

            <ChevronDown
              size={16}
              className="
                pointer-events-none
                absolute right-3 top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />
          </div>

          {/* Sort */}
          <div className="relative min-w-0 flex-1 sm:w-44 sm:flex-none lg:w-40 xl:w-44">
            <select
            value={featured}
              onChange={(e) => setFeatured(e.target.value)}
              className="
                h-11 w-full appearance-none
                rounded-xl
                border border-zinc-700
                bg-[#1A1A1A]
                px-4 pr-9
                text-sm text-white
                outline-none
                transition-all
                focus:border-lime-300
                focus:ring-1
                focus:ring-lime-300/20
              "
            >
              <option value="Featured">Featured</option>
              <option value="Newest">Newest</option>
              <option value="Price: Low -> High">Price: Low → High</option>
              <option value="Price: High -> Low">Price: High → Low</option>
              <option value="Rating">Rating</option>
            </select>

            <ChevronDown
              size={16}
              className="
                pointer-events-none
                absolute right-3 top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />
          </div>

          {/* Clear */}
 {(search !== "" ||
  category !== "All Categories" ||
  featured !== "Featured") && (
  <button
    onClick={() => {
      setSearch("");
      setCategory("All Categories");
      setFeatured("Featured");
    }}
    type="button"
    className="flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-[#1A1A1A] px-4 text-sm font-medium text-red-500"
  >
    Clear
    <X size={14} />
  </button>
)}
        </div>
      </div>

      {/* Active Filter Chips */}
      <div className="flex min-w-0 flex-wrap items-center gap-2 border-t border-zinc-800 pt-3">

        {/* Search Chip */}
       {
        search!==""&& <div
          className="
            flex max-w-full
            items-center gap-1.5
            rounded-full
            border border-lime-300/20
            bg-lime-300/10
            px-3 py-1.5
            text-xs font-medium
            text-[#EAFF00]
          "
        >
          
          <span  className="max-w-[180px] truncate sm:max-w-[250px]">
            
            {search}
          </span>

          <X onClick={()=>{
            setSearch("")
          }}
            size={12}
            className="shrink-0 cursor-pointer"
          />
        </div>

       }
       {
        category!=="All Categories"&& <div
          className="
            flex max-w-full
            items-center gap-1.5
            rounded-full
            border border-lime-300/20
            bg-lime-300/10
            px-3 py-1.5
            text-xs font-medium
            text-[#EAFF00]
          "
        >
          
          <span className="max-w-[180px] truncate sm:max-w-[250px]">
            {category}

          </span>

          <X
          onClick={()=>{
            setCategory("All Categories")
          }}
            size={12}
            className="shrink-0 cursor-pointer"
          />
        </div>

       
        
       }

        {/* Sort Chip */}
       {
        featured!=="Featured"&& <div
          className="
            flex max-w-full
            items-center gap-1.5
            rounded-full
            border border-lime-300/20
            bg-lime-300/10
            px-3 py-1.5
            text-xs font-medium
            text-[#EAFF00]
          "
        >
          <span className="max-w-[180px] truncate sm:max-w-[250px]">
            {featured}
          </span>

          <X
          onClick={()=>{
            setFeatured("Featured")
          }}
            size={12}
            className="shrink-0 cursor-pointer"
          />
        </div>

       }
      </div>
    </div>
  </div>
)}
export default SearchBar;