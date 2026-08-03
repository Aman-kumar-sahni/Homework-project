import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app/app"
import AuthProvider from './app/providers/AppProviders'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CartProvider } from './features/cart/application/cartProvider'
import { X } from "lucide-react";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CartProvider>
            <App/>

<ToastContainer
  toastClassName="premium-toast"

  position="bottom-right"
  autoClose={2200}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
  closeButton={({ closeToast }) => (
    <button
      type="button"
      onClick={closeToast}
      className="
        flex h-6 w-6 items-center justify-center
        rounded-full
        border border-red-500/30
        bg-red-500/15
        text-red-400
        transition-all duration-200
        hover:scale-105
        hover:bg-red-500
        hover:text-white
      "
    >
      <X size={14} strokeWidth={2.5} />
    </button>
  )}
  toastStyle={{
    width: "min(90vw, 240px)",
    minHeight: "64px",

    background:
      "linear-gradient(145deg, #232323, #171717)",

    color: "#F8F8F8",

    border: "1px solid rgba(255,255,255,.08)",

    borderRadius: "20px",

    padding: "14px 16px",

    backdropFilter: "blur(12px)",

    boxShadow:
      "0 18px 45px rgba(0,0,0,.45), inset 0 1px 1px rgba(255,255,255,.05)",

    fontSize: "14px",

    fontWeight: "600",

    letterSpacing: ".2px",
  }}
  progressStyle={{
    background:
      "linear-gradient(90deg,#EAFF00,#B6FF00)",

    height: "4px",
    borderRadius: "999px",
  }}
/>

       </CartProvider>
    </AuthProvider>
)
