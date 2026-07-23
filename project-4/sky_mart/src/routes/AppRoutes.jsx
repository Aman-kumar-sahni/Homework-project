import React from 'react'
import { Routes, Route } from "react-router";
import Login from "../auth/Login"
import Register from "../auth/Register"
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import MainLayout from '../layout/MainLayout';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>

            </Routes>



        </div>
    )
}

export default AppRoutes
