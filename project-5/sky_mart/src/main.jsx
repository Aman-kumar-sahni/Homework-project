import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app/app"
import AuthProvider from './app/providers/AppProviders'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CartProvider } from './features/cart/application/cartProvider'
createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CartProvider>
            <App/>
            <ToastContainer />
        </CartProvider>
    </AuthProvider>
)
