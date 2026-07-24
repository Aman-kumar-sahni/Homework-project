import { useContext, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { MyContext } from "../../../context/MyContext";

const ProductGrid = ({
  search,
  category,
  sort,
  setProductCount,
}) => {
  const { product, setProduct } = useContext(MyContext);

  // ================= Fetch Products =================

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?limit=60"
      );

      const updatedProducts = res.data.products.map((item) => ({
        ...item,
        reviewCount: Math.floor(Math.random() * 900) + 100,
      }));

      setProduct(updatedProducts);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ================= Search + Category =================

  const keyword = search.trim().toLowerCase();

  const filteredProducts = product.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword);

    const matchCategory =
      category === "all" ||
      item.category === category;

    return matchSearch && matchCategory;
  });

  // ================= Sort =================

  const displayedProducts = [...filteredProducts];

  switch (sort) {
    case "low":
      displayedProducts.sort((a, b) => a.price - b.price);
      break;

    case "high":
      displayedProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      displayedProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  // ================= Product Count =================

  useEffect(() => {
    setProductCount(displayedProducts.length);
  }, [displayedProducts.length, setProductCount]);

  // ================= UI =================

  return (
    <>
      {displayedProducts.length > 0 ? (
        <section
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {displayedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </section>
      ) : (
        <section className="flex min-h-[300px] items-center justify-center">

          <div className="text-center">

            <h2 className="text-2xl font-semibold text-white">
              No Products Found
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Try changing your search or filters.
            </p>

          </div>

        </section>
      )}
    </>
  );
};

export default ProductGrid;