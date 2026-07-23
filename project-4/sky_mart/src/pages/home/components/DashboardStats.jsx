import {
  Box,
  ShoppingCart,
  Star,
  Tag,
  TrendingUp,
} from "lucide-react";

const DashboardStats = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">


      {/* ================= CART ITEMS ================= */}

      <div className="flex items-center gap-4 rounded-3xl border border-white/80 p-5 text-white">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaff00]/15 text-[#eaff00]">

          <Box
            size={22}
          />

        </div>


        <div>

          <p className="text-2xl font-bold">
            0
          </p>

          <h3 className="text-sm font-medium">
            Cart Items
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            In your bag
          </p>

        </div>

      </div>


      {/* ================= CART VALUE ================= */}

      <div className="flex items-center gap-4 rounded-3xl border border-white/80 p-5 text-white">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">

          <TrendingUp
            size={22}
          />

        </div>


        <div>

          <p className="text-2xl font-bold">
            $0.00
          </p>

          <h3 className="text-sm font-medium">
            Cart Value
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Ready to checkout
          </p>

        </div>

      </div>


      {/* ================= TOP PRODUCTS ================= */}

      <div className="flex items-center gap-4 rounded-3xl border border-white/80 p-5 text-white">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">

          <Star
            size={22}
          />

        </div>


        <div>

          <p className="text-2xl font-bold">
            5
          </p>

          <h3 className="text-sm font-medium">
            Top Products
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Highly rated
          </p>

        </div>

      </div>


      {/* ================= CATEGORIES ================= */}

      <div className="flex items-center gap-4 rounded-3xl border border-white/80 p-5 text-white">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">

          <Tag
            size={22}
          />

        </div>


        <div>

          <p className="text-2xl font-bold">
            6
          </p>

          <h3 className="text-sm font-medium">
            Categories
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            To explore
          </p>

        </div>

      </div>

    </section>
  );
};

export default DashboardStats;