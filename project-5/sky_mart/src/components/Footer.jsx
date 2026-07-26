// src/components/Footer.jsx

import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  ArrowUp,
  Zap,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-lime-300 flex items-center justify-center">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Sky<span className="text-lime-300">Mart</span>
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Modern shopping experience with premium products, secure
              payments and lightning-fast delivery.
            </p>

            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Github].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center hover:bg-lime-300 hover:text-black transition"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-lime-300 transition">
                Home
              </Link>

              <Link to="/shop" className="hover:text-lime-300 transition">
                Shop
              </Link>

              <Link to="/about" className="hover:text-lime-300 transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-lime-300 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>Electronics</p>
              <p>Fashion</p>
              <p>Furniture</p>
              <p>Sports</p>
              <p>Accessories</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <p>Email : support@skymart.com</p>
              <p>Phone : +1 234 567 890</p>
              <p>Location : New York, USA</p>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-6 flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-black font-semibold hover:scale-105 transition"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025 SkyMart. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-lime-300 transition">
              Privacy Policy
            </button>

            <button className="hover:text-lime-300 transition">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;