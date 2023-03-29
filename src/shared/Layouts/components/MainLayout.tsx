import { useState } from 'react'
import Header from '../../Partials/components/Header'
import Footer from '../../Partials/components/Footer'
import Navbar from '../../Partials/components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <div className="main-layout">
        <div className="site-navbar">
            <Navbar />
        </div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout
