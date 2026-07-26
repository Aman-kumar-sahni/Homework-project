import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#141414] transition-all duration-300 hover:border-[#EAFF00]">

      {/* Image */}
      <div className="relative p-3">

        <span className="absolute left-5 top-5 z-10 rounded-full bg-zinc-700 px-3 py-1 text-[10px] font-medium text-white">
          Electronics
        </span>

        <div className="aspect-square overflow-hidden rounded-2xl bg-white">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
            alt=""
            className="h-full w-full object-cover duration-300 group-hover:scale-105"
          />
        </div>

      </div>

      {/* Content */}
      <div className="px-4 pb-4">

        <p className="mb-2 text-[11px] text-zinc-500">
          Electronics
        </p>

        <h3 className="line-clamp-2 min-h-[52px] text-[17px] font-semibold leading-6 text-white">
          Wireless Bluetooth Headphones
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">

          <span className="text-[13px] tracking-wide text-orange-400">
            ★★★★★
          </span>

          <span className="text-xs text-zinc-500">
            (120)
          </span>

        </div>

        <div className="my-4 border-t border-zinc-700"></div>

        <div className="flex items-center justify-between">

          <h2 className="text-[18px] font-bold text-[#EAFF00]">
            $99.99
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