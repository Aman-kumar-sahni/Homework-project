import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <section className="mt-10">
      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-5
        "
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key = {index}/>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;