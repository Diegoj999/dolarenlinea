import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 1. LOGO / MARCA (Igual al Navbar para consistencia) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg shadow-green-900/20">
              <span className="text-lg font-bold">$</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              DolarBlue<span className="text-green-400">EnLinea</span>
            </span>
          </div>

          {/* 2. NAVEGACIÓN */}
          <nav aria-label="Footer Nav">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <Link 
                  className="text-slate-400 transition hover:text-green-400 text-sm font-medium uppercase tracking-wider" 
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  className="text-slate-400 transition hover:text-green-400 text-sm font-medium uppercase tracking-wider" 
                  to="/contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* 3. DIVISOR SUTIL */}
        <div className="my-8 border-t border-slate-800" />

        {/* 4. COPYRIGHT Y LEGALES */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs md:text-sm">
            &copy; {currentYear} DolarBlueEnLinea. Todos los derechos reservados.
          </p>
          
          <p className="text-slate-600 text-xs">
            Hecho con <span className="text-red-500 animate-pulse">❤</span> en Argentina
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;