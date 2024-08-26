import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Views/Navigation';
import Home from './Views/Home'
import Menu from './Views/Menu'
import './App.css'
import img1 from './assets/image/menu.png'
import img2 from './assets/image/logo.png'
// import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
