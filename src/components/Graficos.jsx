import React, { useState } from "react";
import LinesChart from "./LinesChart";
import useDolarEvolution from "../hooks/useDolarEvolution";

export const Graficos = () => {
  const [days, setDays] = useState(30);
  const { data, loading, error } = useDolarEvolution(days);

  return (
    <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-6 md:p-8 w-full">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Evolución Histórica
          </h3>
          <p className="text-slate-400 text-sm mt-1">Comparativa Oficial vs Blue</p>
        </div>

        <div className="relative flex items-center bg-slate-700 rounded-full p-1 pr-2 border border-slate-600">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400 ml-2">
            <path fillRule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM2 4.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2 4.75Zm0 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>

          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="bg-transparent text-white font-medium text-sm py-2 pl-2 pr-8 outline-none cursor-pointer hover:text-blue-400 transition-colors appearance-none relative z-10"
          >
            <option value="10" className="text-slate-800">Últimos 10 días</option>
            <option value="30" className="text-slate-800">Último mes</option>
            <option value="90" className="text-slate-800">Últimos 3 meses</option>
            <option value="180" className="text-slate-800">Últimos 6 meses</option>
            <option value="365" className="text-slate-800">Último año</option>
          </select>
           <div className="pointer-events-none absolute right-3 text-slate-400 z-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                 <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
               </svg>
           </div>
        </div>
      </div>

      <div className="min-h-[400px] relative w-full">
        {loading ? (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-blue-500 z-20">
            <svg className="w-12 h-12 animate-spin mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-slate-300 font-medium animate-pulse">Cargando datos históricos...</span>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-red-400 z-20">
            <span>Error al cargar datos: {error}</span>
          </div>
        ) : (
           <div className="transition-opacity duration-500 w-full h-full opacity-100">
               <LinesChart dataGraph={data} />
           </div>
        )}
      </div>
      
      <p className="text-center text-xs text-slate-500 mt-6">
        * Datos provistos por Bluelytics API. Visualización de precio de venta.
      </p>
    </div>
  );
};