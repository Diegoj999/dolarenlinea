import { useEffect, useState } from 'react'
import Navbar  from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './components/ContactForm';

function App() {

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
