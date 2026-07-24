import { ShoppingCart } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const ProductCard = ({ product }) => {
  const fullStars = Math.floor(product.rating);

const hasHalfStar = product.rating % 1 >= 0.5;

const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/20
        bg-[#151515]
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#eaff00]/60
      "
    >

      {/* Image Section */}
      <div className="relative h-[185px] overflow-hidden bg-[#f4f4ed] p-3">

        {/* Category Badge */}
        <span
          className="
            absolute
            left-3
            top-3
            z-10
            rounded-full
            bg-[#60645d]
            px-2
            py-1
            text-[10px]
            font-semibold
            text-white
          "
        >
          {product.category}
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />

      </div>

      {/* Product Information */}
      <div className="flex min-h-[165px] flex-col p-3">

        <p className="mb-2 text-[11px] text-white/45">
          {product.category}
        </p>

        <h2
          className="
            line-clamp-2
            min-h-[40px]
            text-sm
            font-semibold
            leading-5
            text-white
          "
        >
          {product.title}
        </h2>

        
      <div className="mt-2 flex items-center gap-1">

  {[...Array(fullStars)].map((_, index) => (
    <FaStar
      key={`full-${index}`}
      className="text-[12px] text-[#eaff00]"
    />
  ))}

  {hasHalfStar && (
    <FaStarHalfAlt
      className="text-[12px] text-[#eaff00]"
    />
  )}

  {[...Array(emptyStars)].map((_, index) => (
    <FaRegStar
      key={`empty-${index}`}
      className="text-[12px] text-white/30"
    />
  ))}

  <span className="ml-1 text-[10px] text-white/45">
    ({product.reviewCount})
  </span>

</div>
        <div className="my-2 border-t border-white/30" />

        {/* Price + Cart */}
        <div className="mt-auto flex items-center justify-between gap-2">

          <span className="text-lg font-bold text-[#eaff00]">
          { `$${product.price}`}
          </span>

          <button
            className="
              flex
              items-center
              gap-1
              rounded-full
              bg-[#eaff00]
              px-3
              py-2
              text-xs
              font-semibold
              text-black
              transition
              hover:bg-[#d9ed00]
              active:scale-95
            "
          >
            <ShoppingCart size={13} />

            <span>Add</span>
          </button>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;