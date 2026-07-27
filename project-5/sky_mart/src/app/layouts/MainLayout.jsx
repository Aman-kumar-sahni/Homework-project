import React from 'react'
import Navbar from '../../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../shared/Footer'
const MainLayout = () => {
  
  return (
    <div>

      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
