import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from"./app/app"
import AuthProvider from './app/providers/AppProviders'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById('root')).render(
    <AuthProvider>
<App/>
    <ToastContainer />

    </AuthProvider>
)
