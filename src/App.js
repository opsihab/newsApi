

import React  from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom';
import About from './components/About';


export default function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  )
}
