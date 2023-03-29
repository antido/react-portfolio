import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import MainLayout from './shared/Layouts/components/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
