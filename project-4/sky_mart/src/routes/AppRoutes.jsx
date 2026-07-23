import React from 'react'
import { Routes, Route } from "react-router";
import Login from "../auth/Login"
import Register from "../auth/Register"
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import MainLayout from '../layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import { Navigate } from 'react-router';
import PublicRoute from './PublicRoute';
const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                <Route element={<MainLayout />}>

                    <Route path="/home" element={<ProtectedRoute>
                        <Home />
                    </ProtectedRoute>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>

            </Routes>



        </div>
    )
}

export default AppRoutes
