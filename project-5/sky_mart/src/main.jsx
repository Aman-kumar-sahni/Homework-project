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
  position="bottom-right"
  autoClose={2000}
  closeButton={({ closeToast }) => (
    <button
      type="button"
      onClick={closeToast}
      className="
        flex h-6 w-6 shrink-0
        cursor-pointer
        items-center justify-center
        rounded-full
        bg-red-500
        text-white
        transition-all
        duration-200
        hover:scale-105
        hover:bg-red-600
      "
    >
      <X size={14} strokeWidth={2.5} />
    </button>
  )}
  toastStyle={{
    width: "auto",
    minWidth: "170px",
    maxWidth: "270px",
    minHeight: "52px",
    background: "#181818",
    color: "#ffffff",
    border: "1px solid #2d2d2d",
    borderRadius: "18px",
    padding: "10px 12px 10px 16px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
    fontSize: "14px",
    fontWeight: "500",
  }}
/>

       </CartProvider>
    </AuthProvider>
)
