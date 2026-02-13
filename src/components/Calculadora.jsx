import React, { useState, useEffect } from "react";

export const Calculadora = ({ data }) => {
  const [cantidad, setCantidad] = useState("");
  const [esPesosBase, setEsPesosBase] = useState(true);
  const [tipoDolar, setTipoDolar] = useState("blue");
  const [resultado, setResultado] = useState(0);

  // Icono de Swap (Flechas)
  const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );

  useEffect(() => {
    if (!data || !cantidad || parseFloat(cantidad) < 0) {
      setResultado(0);
      return;
    }
    const valorNumerico = parseFloat(cantidad);
    const cotizacion = data[tipoDolar];

    if (esPesosBase) {
      setResultado(valorNumerico / cotizacion.value_sell);
    } else {
      setResultado(valorNumerico * cotizacion.value_buy);
    }
  }, [cantidad, esPesosBase, tipoDolar, data]);

  const handleInputChange = (e) => {
    const valor = e.target.value;
    if (valor === "" || parseFloat(valor) >= 0) {
      setCantidad(valor);
    }
  };

  const formatearMoneda = (valor, moneda) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: moneda,
      minimumFractionDigits: 2,
    }).format(valor);
  };

  return (
    // USAMOS EL MISMO CONTENEDOR QUE EL GRÁFICO (bg-slate-800, rounded-3xl, etc)
    <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-6 md:p-8">
      
      {/* Cabecera idéntica a la del gráfico */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Calculadora de Cambio
        </h3>
        <p className="text-slate-400 text-sm mt-1">Convertí al instante según la cotización actual</p>
      </div>
      
      {/* Contenedor del formulario centrado pero amplio */}
      <div className="max-w-3xl mx-auto">
        <form className="flex flex-col gap-6">
          
          {/* Selector de Tipo de Dólar (Estilo Tab) */}
          <div className="flex justify-center p-1 bg-slate-900/50 rounded-xl mx-auto w-fit border border-slate-700">
            <button
              type="button"
              onClick={() => setTipoDolar("blue")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                tipoDolar === "blue" ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Dólar Blue
            </button>
            <button
              type="button"
              onClick={() => setTipoDolar("oficial")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                tipoDolar === "oficial" ? "bg-emerald-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Dólar Oficial
            </button>
          </div>

          {/* Área de Inputs: En desktop los ponemos lado a lado para ocupar el ancho */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-slate-700/30 p-6 rounded-2xl border border-slate-600/50">
            
            {/* Input Origen */}
            <div className="w-full relative group">
              <label className="text-xs text-slate-400 ml-1 mb-2 block uppercase font-bold tracking-wider">
                {esPesosBase ? "Tengo Pesos" : "Tengo Dólares"}
              </label>
              <div className="flex items-center bg-slate-900 rounded-xl p-3 border border-slate-600 focus-within:border-blue-500 transition-colors shadow-inner">
                <img
                  src={esPesosBase 
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/60px-Flag_of_Argentina.svg.png"
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/60px-Flag_of_the_United_States.svg.png"
                  }
                  className="w-8 h-6 rounded shadow-sm object-cover" alt="Flag"
                />
                <span className="text-slate-300 font-bold mx-3">{esPesosBase ? "ARS" : "USD"}</span>
                <input
                  type="number"
                  min="0"
                  className="bg-transparent text-white text-2xl w-full focus:outline-none text-right font-mono placeholder-slate-600"
                  placeholder="0"
                  value={cantidad}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Botón Swap */}
            <button
              type="button"
              onClick={() => setEsPesosBase(!esPesosBase)}
              className="bg-slate-600 p-3 rounded-full border border-slate-500 hover:bg-blue-500 hover:border-blue-400 hover:scale-110 transition-all shadow-lg group z-10"
              title="Invertir conversión"
            >
              <SwapIcon />
            </button>

            {/* Input Destino (Resultado) */}
            <div className="w-full relative">
              <label className="text-xs text-slate-400 ml-1 mb-2 block uppercase font-bold tracking-wider">
                 {esPesosBase ? "Recibo Dólares" : "Recibo Pesos"}
              </label>
              <div className="flex items-center bg-slate-800 rounded-xl p-3 border border-slate-600 opacity-90 shadow-inner">
                <img
                  src={!esPesosBase 
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/60px-Flag_of_Argentina.svg.png"
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/60px-Flag_of_the_United_States.svg.png"
                  }
                  className="w-8 h-6 rounded shadow-sm object-cover" alt="Flag"
                />
                <span className="text-slate-300 font-bold mx-3">{!esPesosBase ? "ARS" : "USD"}</span>
                <div className="text-white text-2xl w-full text-right font-mono truncate font-bold text-green-400">
                  {cantidad ? formatearMoneda(resultado, esPesosBase ? 'USD' : 'ARS') : "---"}
                </div>
              </div>
            </div>

          </div>
          
          <p className="text-center text-xs text-slate-500">
            Cotización aplicada: <span className="text-slate-300 font-semibold">{esPesosBase ? "Venta" : "Compra"}</span> ({tipoDolar === 'blue' ? 'Blue' : 'Oficial'})
          </p>

        </form>
      </div>
    </div>
  );
};