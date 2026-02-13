import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efecto para detectar scroll y cambiar la opacidad del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Componente interno para los Links (evita repetir clases)
  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setNavbarOpen(false)} // Cierra menú en móvil al hacer click
        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
          isActive ? "text-green-400" : "text-gray-300 hover:text-white"
        }`}
      >
        {children}
        {/* Línea animada debajo del link activo */}
        <span 
          className={`absolute bottom-0 left-0 h-0.5 w-full bg-green-500 transform transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled || navbarOpen
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-slate-900/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO / MARCA */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={() => setNavbarOpen(false)}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold">$</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white tracking-tight">
                DolarBlue<span className="text-green-400">EnLinea</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                Cotizaciones al día
              </span>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            
            {/* Botón de acción (opcional) */}
            <a 
              href="#calculadora" // Asumiendo que tenés un id="calculadora"
              className="px-5 py-2 text-sm font-bold text-slate-900 bg-green-400 rounded-full hover:bg-green-300 transition-colors shadow-lg shadow-green-500/20"
            >
              Calcular
            </a>
          </nav>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Menu"
          >
            {navbarOpen ? (
              // Icono X (Cerrar)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono Hamburguesa (Abrir)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* MENÚ MÓVIL (DESPLEGABLE) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            navbarOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4 border-t border-gray-800 pt-4">
            <Link 
              to="/" 
              onClick={() => setNavbarOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-green-400 transition-colors"
            >
              Inicio
            </Link>
            <Link 
              to="/contacto" 
              onClick={() => setNavbarOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-green-400 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}