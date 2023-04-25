import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full mb-5 z-50">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-100">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              onClick={navigate("/")}
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white hover:opacity-75"
            >
              <i className="fas fa-usd text-green-500 m-2"></i>
              DolarBlueEnLinea
            </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa fa-home text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Inicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa fa-line-chart text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Accesorios</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa fa-users text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contacto</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
