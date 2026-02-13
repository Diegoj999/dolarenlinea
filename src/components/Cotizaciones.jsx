import React from "react";

// 1. Componente interno reutilizable para cada tarjeta
// Esto hace que el código sea mucho más limpio y fácil de mantener.
const CotizacionCard = ({ title, buy, sell, color, lastUpdate, badgeColor }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      {/* Encabezado de la tarjeta con color dinámico */}
      <div className={`h-2 w-full ${color}`}></div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">{title}</h3>
          <span className={`px-2 py-1 text-xs font-bold uppercase rounded-full bg-gray-100 ${badgeColor}`}>
             Venta
          </span>
        </div>

        {/* Sección de Precios */}
        <div className="flex justify-between items-center gap-4 py-2">
          {/* Compra */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Compra</span>
            <span className="text-2xl font-bold text-gray-700">
              ${buy}
            </span>
          </div>

          {/* Divisor vertical */}
          <div className="w-px h-10 bg-gray-200"></div>

          {/* Venta (Destacado) */}
          <div className="flex flex-col text-right">
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Venta</span>
            <span className={`text-3xl font-extrabold ${badgeColor}`}>
              ${sell}
            </span>
          </div>
        </div>

        {/* Footer de la tarjeta con la fecha */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-gray-400 text-xs">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Actualizado: {new Date(lastUpdate).toLocaleString('es-AR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

const Cotizaciones = ({ data }) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-10 max-w-7xl">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <CotizacionCard
          title="Dólar Blue"
          buy={data.blue.value_buy}
          sell={data.blue.value_sell}
          color="bg-blue-600" 
          badgeColor="text-blue-600"
          lastUpdate={data.last_update}
        />

        <CotizacionCard
          title="Dólar Oficial"
          buy={data.oficial.value_buy}
          sell={data.oficial.value_sell}
          color="bg-emerald-600"
          badgeColor="text-emerald-600"
          lastUpdate={data.last_update}
        />

        <CotizacionCard
          title="Euro Blue"
          buy={data.blue_euro.value_buy}
          sell={data.blue_euro.value_sell}
          color="bg-indigo-600"
          badgeColor="text-indigo-600"
          lastUpdate={data.last_update}
        />
        
      </div>
    </section>
  );
};

export default Cotizaciones;