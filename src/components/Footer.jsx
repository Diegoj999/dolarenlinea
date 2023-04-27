import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className='mt-auto'>
      <footer aria-label="Site Footer" className="bg-blue-900">
  <div className="mx-auto max-w-5xl px-4 py-2">

    <nav aria-label="Footer Nav" className="my-5">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <Link className="text-white text-sm md:text-base font-bold transition hover:text-gray-700/75 uppercase" to="/">
            Inicio
          </Link>
        </li>

        <li>
          <Link className="text-white text-sm md:text-base font-bold transition hover:text-gray-700/75 uppercase" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <hr
   
    className="container mx-auto py-4 mt-5 w-100 clearfix border-blue-700"
  />
      <div>
        <p className='text-white font-bold text-center text-sm md:text-base'>DolarBlueEnLinea &copy; 2023 Todos los derechos reservados</p>
      </div>
    </nav>

    
  </div>
</footer>
    </div>
    

  )
}

export default Footer
