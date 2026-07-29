import { ShoppingCart } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({products}) => {
  const fullStars = Math.floor(products.rating);

const hasHalfStar = products.rating % 1 >= 0.5;

const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#141414] transition-all duration-300 hover:border-[#EAFF00]">

      {/* Image */}
      <div className="relative p-3">

        <span className="absolute left-5 top-5 z-10 rounded-full bg-zinc-700 px-3 py-1 text-[10px] font-medium text-white">
          {products.category}
        </span>

        <div className="aspect-square overflow-hidden rounded-2xl bg-white">
          <img
            src={products.thumbnail}
            alt=""
            className="h-full w-full object-cover duration-300 group-hover:scale-105"
          />
        </div>

      </div>

      {/* Content */}
      <div className="px-4 pb-4">

        <p className="mb-2 text-[11px] text-zinc-500">
          {products.category}
        </p>

        <h3 className="line-clamp-2 min-h-[52px] text-[17px] font-semibold leading-6 text-white">
          {products.title}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">

          
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
          <span className="text-xs text-zinc-500">
          {`(${products.reviewCount})`}
          
          </span>

        </div>

        <div className="my-4 border-t border-zinc-700"></div>

        <div className="flex items-center justify-between">

          <h2 className="text-[18px] font-bold text-[#EAFF00]">
            {`$${products.price}`}
          </h2>

          <button className="flex h-10 items-center gap-2 rounded-full bg-[#EAFF00] px-4 text-sm font-semibold text-black transition hover:bg-[#d7eb00]">
            <ShoppingCart size={15} />
            Add
          </button>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;