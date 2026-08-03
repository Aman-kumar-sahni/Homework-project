import React from 'react'
import Navbar from '../../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../shared/Footer'
import Cart from '../../features/cart/presentation/components/Cart'
import { useState } from 'react'
const MainLayout = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>

      <Navbar setIsCartOpen={setIsCartOpen} />
      <Outlet/>
      <Footer/>

{isCartOpen && (
  <>
    {/* Overlay */}
    <div
      onClick={() => setIsCartOpen(false)}
      className="fixed inset-0 z-[50] bg-black/50 backdrop-blur-sm"
    />

    {/* Cart */}
    <Cart setIsCartOpen={setIsCartOpen} />
  </>
)}      
    </div>
  )
}

export default MainLayout
