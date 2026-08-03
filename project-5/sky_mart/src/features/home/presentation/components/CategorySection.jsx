import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../../app/providers/AppProviders";

const CategorySection = () => {
  const { allProducts,setCategory } = useContext(AuthContext);
  const navigate = useNavigate();

  const categoryData = allProducts.reduce((acc, product) => {
    const existingCategory = acc.find(
      (item) => item.category === product.category
    );

    if (existingCategory) {
      existingCategory.item += 1;
    } else {
      acc.push({
        category: product.category,
        item: 1,
        image: product.thumbnail,
      });
    }

    return acc;
  }, []);

  return (
    <section className="mt-10 w-full">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Shop by Category
        </h2>

        <button
          onClick={() => {
            navigate("/shop");
          }}
          className="
            shrink-0
            cursor-pointer
            text-sm font-semibold
            text-[#dfff00]
            transition
            hover:underline
          "
        >
          View All →
        </button>
      </div>

      {/* Categories */}
      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          sm:gap-4
          lg:grid-cols-4
          xl:grid-cols-6
        "
      >
        {categoryData.map((elem) => (
          <div
            key={elem.category}
            onClick={() => {
              setCategory(elem.category)
              navigate("/shop");
            }}
            className="
              group
              relative
              min-w-0
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border border-zinc-800
              bg-[#151515]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#EAFF00]/50
              hover:shadow-[0_10px_30px_rgba(234,255,0,0.08)]
            "
          >
            {/* Image */}
            <div
              className="
                relative
                aspect-[1.35/1]
                w-full
                overflow-hidden
                bg-zinc-900
              "
            >
              <img
                src={elem.image}
                alt={elem.category}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Dark overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              {/* Item count */}
              <span
                className="
                  absolute
                  right-2.5
                  top-2.5
                  rounded-full
                  border border-white/10
                  bg-black/60
                  px-2
                  py-1
                  text-[10px]
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                {elem.item} items
              </span>

              {/* Category name */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-3
                  sm:p-4
                "
              >
                <h3
                  className="
                    truncate
                    text-sm
                    font-semibold
                    capitalize
                    text-white
                    sm:text-base
                  "
                >
                  {elem.category}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CategorySection;