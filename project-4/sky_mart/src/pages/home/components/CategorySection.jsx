const categories = [
  {
    name: "Electronics",
    items: "17 items",
    icon: "💻",
  },
  {
    name: "Clothing",
    items: "2 items",
    icon: "📦",
  },
  {
    name: "Furniture",
    items: "3 items",
    icon: "📦",
  },
  {
    name: "Home",
    items: "14 items",
    icon: "📦",
  },
  {
    name: "Sports",
    items: "8 items",
    icon: "📦",
  },
  {
    name: "Accessories",
    items: "6 items",
    icon: "📦",
  },
];

const CategorySection = () => {
  return (
    <section>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold sm:text-2xl">
          Shop by Category
        </h2>

        <button className="text-sm font-semibold text-[#dfff00]">
          View All →
        </button>

      </div>


      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

        {categories.map((category) => (
          <div
            key={category.name}
            className="flex min-h-[125px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-[#f4f4ed] p-5 text-center text-black transition hover:-translate-y-1"
          >

            <div className="mb-3 text-3xl">
              {category.icon}
            </div>

            <h3 className="font-medium">
              {category.name}
            </h3>

            <p className="mt-1 text-xs text-black/50">
              {category.items}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CategorySection;