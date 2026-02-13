import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

import Cotizaciones from "./Cotizaciones";
import { Graficos } from "./Graficos";
import { Calculadora } from "./Calculadora";

const apiData = fetchData("https://api.bluelytics.com.ar/v2/latest");

const Home = () => {
  const data = apiData.read();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    document.title = `Inicio - DolarBlueEnLinea`;

    // Lógica para mostrar el botón de subir solo al bajar un poco
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      
      <div className="bg-slate-900 pt-32 pb-40 px-4 rounded-b-[2.5rem] shadow-sm relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent to-slate-800 opacity-50 pointer-events-none"></div>
         
         <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Mercado Cambiario
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Cotizaciones en tiempo real, tendencias históricas y herramientas de conversión.
              Toda la información financiera en un solo lugar.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-24 relative z-20 space-y-16 max-w-6xl">
        
        <div className="animate-fade-in-up">
           <Cotizaciones data={data} />
        </div>

        <section id="graficos">
          <Graficos />
        </section>
        
        <section id="calculadora">
          <Calculadora data={data} />
        </section>

      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-slate-900 text-green-400 shadow-lg shadow-slate-900/40 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 border border-slate-700 ${showScroll ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>

    </main>
  );
};

export default Home;