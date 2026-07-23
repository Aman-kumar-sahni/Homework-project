import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'

const App = () => {
  return (
    <div className='h-screen w-screen bg-black'>
      <Shop/>
    </div>
  )
}

export default App
