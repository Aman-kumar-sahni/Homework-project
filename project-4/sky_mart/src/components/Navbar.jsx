import {
  LogOut,
  ShoppingCart,
  Zap,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-white/10 bg-[#151515] text-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">

        {/* ================= LOGO ================= */}

        <div className="flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaff00] text-black sm:h-9 sm:w-9">
            <Zap
              size={18}
              fill="currentColor"
            />
          </div>

          <h1 className="text-lg font-bold tracking-tight sm:text-xl">
            Sky<span className="text-[#eaff00]">Mart</span>
          </h1>

        </div>


        {/* ================= NAVIGATION ================= */}

        <div className="hidden items-center gap-7 text-sm font-medium text-gray-300 md:flex">

          <a
            href="#"
            className="text-[#eaff00]"
          >
            Home
          </a>

          <a
            href="#"
            className="transition hover:text-[#eaff00]"
          >
            Shop
          </a>

          <a
            href="#"
            className="transition hover:text-[#eaff00]"
          >
            About
          </a>

        </div>


        {/* ================= RIGHT ACTIONS ================= */}

        <div className="flex items-center gap-2">


          {/* ================= USER ================= */}

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">

            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#eaff00] text-xs font-bold text-black">
              U
            </div>

            <span className="text-sm font-medium">
              User1
            </span>

          </div>


          {/* ================= CART ================= */}

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-white/20 hover:text-[#eaff00]"
          >
            <ShoppingCart
              size={19}
            />
          </button>


          {/* ================= LOGOUT ================= */}

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-white/20 hover:text-[#eaff00]"
          >
            <LogOut
              size={19}
            />
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;