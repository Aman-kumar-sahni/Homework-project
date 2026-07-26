import { ShoppingBag } from "lucide-react";

const topRatedProducts = [
  {
    id: 1,
    image: "https://dummyjson.com/image/80x80",
    price: "$599.99",
  },
  {
    id: 2,
    image: "https://dummyjson.com/image/80x80",
    price: "$199.99",
  },
  {
    id: 3,
    image: "https://dummyjson.com/image/80x80",
    price: "$349.99",
  },
  {
    id: 4,
    image: "https://dummyjson.com/image/80x80",
    price: "$49.99",
  },
  {
    id: 5,
    image: "https://dummyjson.com/image/80x80",
    price: "$149.99",
  },
];

const newArrivals = [
  {
    id: 1,
    image: "https://dummyjson.com/image/80x80",
    price: "$99.99",
  },
  {
    id: 2,
    image: "https://dummyjson.com/image/80x80",
    price: "$299.99",
  },
  {
    id: 3,
    image: "https://dummyjson.com/image/80x80",
    price: "$24.99",
  },
  {
    id: 4,
    image: "https://dummyjson.com/image/80x80",
    price: "$199.99",
  },
  {
    id: 5,
    image: "https://dummyjson.com/image/80x80",
    price: "$34.99",
  },
];

function ProductList({ title, icon, products }) {
  return (
    <div className="rounded-[28px] bg-[#f4f4ed] p-5 sm:p-6">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <h2 className="flex items-center gap-2 text-[15px] font-medium text-[#4c4c58] sm:text-base">
          <span>{icon}</span>
          {title}
        </h2>

        <button
          type="button"
          className="text-[10px] font-medium text-[#a7c000] transition hover:opacity-70 sm:text-xs"
        >
          See all →
        </button>
      </div>


      {/* Product Rows */}
      <div className="mt-4 space-y-3">

        {products.map((product) => (
          <div
            key={product.id}
            className="
              flex
              h-[53px]
              items-center
              justify-between
              rounded-xl
              border
              border-black/[0.08]
              px-3
              transition
              hover:bg-black/[0.025]
              sm:h-[58px]
              sm:px-4
            "
          >

            {/* Image + Price */}
            <div className="flex items-center gap-4">

              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-sm bg-black/5 sm:h-8 sm:w-8">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="text-xs font-medium text-[#a7c000] sm:text-sm">
                {product.price}
              </span>

            </div>


            {/* Cart Button */}
            <button
              type="button"
              aria-label="Add to cart"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-md
                text-[#a7c000]
                transition
                hover:bg-[#a7c000]/10
              "
            >
              <ShoppingBag
                size={13}
                strokeWidth={1.8}
              />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}


function ProductShowcaseSection() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      <ProductList
        title="Top Rated"
        icon="⭐"
        products={topRatedProducts}
      />

      <ProductList
        title="New Arrivals"
        icon="⚡"
        products={newArrivals}
      />

    </section>
  );
}

export default ProductShowcaseSection;