const ShopHeader = ({ productCount, category }) => {
  return (
    <section className="mb-7">

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        All Products
      </h1>

      <p className="mt-2 text-sm text-white/60">

        {productCount} Products Found

        {category !== "all" && (
          <>
            {" "}
            <span className="font-medium text-[#eaff00] capitalize">
              {`in ${category.replace("-", " ")}`}
            </span>
          </>
        )}

      </p>

    </section>
  );
};

export default ShopHeader;