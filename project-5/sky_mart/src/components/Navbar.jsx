// src/components/Navbar.jsx

import { Link } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-lime-300 flex items-center justify-center shadow-[0_0_18px_rgba(190,242,100,.45)]">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight">
            Sky
            <span className="text-lime-300">Mart</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-lime-300 font-medium transition hover:text-lime-200"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-gray-300 font-medium transition hover:text-white"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="text-gray-300 font-medium transition hover:text-white"
          >
            About
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          
          {/* User */}
          <button className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition">
            <div className="w-8 h-8 rounded-full bg-lime-300 text-black font-bold flex items-center justify-center">
              E
            </div>

            <span className="text-sm font-medium text-gray-200">
              esrtd
            </span>
          </button>

          {/* Cart */}
          <button className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-lime-300 hover:text-black transition">
            <ShoppingCart size={18} />
          </button>

          {/* Logout */}
          <button className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;