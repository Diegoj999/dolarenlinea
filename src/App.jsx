import { useEffect, useState } from 'react'
import Navbar  from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from './components/Contacto';

function App() {

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
