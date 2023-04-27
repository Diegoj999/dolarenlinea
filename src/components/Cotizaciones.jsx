import React from "react";

const Cotizaciones = ({ data }) => {
  return (
    <section className="container mx-auto py-5">
    

      <div className=" 2xl:grid">
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-y-8 py-5 order-last">
          <div className="flex flex-col max-w-md p-6 mx-auto border-t-8 border-blue-700 shadow">
            <h5 className="my-4 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Precio Dolar Blue
            </h5>
            <div className="py-1 flex justify-center gap-6">
              <div className="py-3">
                <p className=" ml-2 text-blue-700 text-xl">Venta</p>
                <p className="mr-5 text-3xl  text-blue-700 font-bold">
                  ${data.blue.value_sell}
                </p>
              </div>

              <div className="py-3">
                <p className=" ml-1 text-blue-700 text-xl">Compra</p>
                <p className="mr-5 text-3xl  text-blue-700 font-bold">
                  ${data.blue.value_buy}
                </p>
              </div>
            </div>
            <p className="text-center text-sm md:px-6">
              Ultima actualización: {data.last_update.slice(0, 19)}
            </p>
          </div>

         

         <div className="flex flex-col max-w-md p-6 mx-auto border-t-8 border-green-700 shadow">
            <h5 className="my-4 text-2xl font-bold tracking-tight text-gray-900 text-center px-6">
              Precio Dólar Oficial
            </h5>
            <div className="py-1 flex justify-center gap-6">
              <div className="py-3">
                <p className="ml-2 text-green-700 text-xl">Venta</p>
                <p className="mr-5 text-3xl text-green-700 font-bold">
                  ${data.oficial.value_sell}
                </p>
              </div>

              <div className="py-3">
                <p className="ml-1 text-green-700 text-xl">Compra</p>
                <p className="mr-5 text-3xl text-green-700 font-bold">
                  ${data.oficial.value_buy}
                </p>
              </div>
            </div>
            <p className="text-center text-sm md:px-6">
              Última actualización: {data.last_update.slice(0, 19)}
            </p>
          </div>
          <div className="flex flex-col max-w-md p-6 mx-auto border-t-8 border-yellow-500 shadow">
            <h5 className="my-4 text-2xl font-bold tracking-tight text-gray-900 text-center px-6">
              Precio de Euro Blue
            </h5>
            <div className="py-1 flex justify-center gap-6">
              <div className="py-3">
                <p className="ml-2 text-yellow-500 text-xl">Venta</p>
                <p className="mr-5 text-3xl text-yellow-500 font-bold">
                  ${data.blue_euro.value_sell}
                </p>
              </div>

              <div className="py-3">
                <p className="ml-1 text-yellow-500 text-xl">Compra</p>
                <p className="mr-5 text-3xl text-yellow-500 font-bold">
                  ${data.blue_euro.value_buy}
                </p>
              </div>
            </div>
            <p className="text-center text-sm md:px-6">
              Última actualización: {data.last_update.slice(0, 19)}
            </p>
          </div>
        </div>
        <div className="py-5 mx-4 ">
          <h2 className="text-2xl md:text-3xl py-2 uppercase font-bold">
            Cotización dólar hoy, Precio del dólar hoy
          </h2>
          <hr className="h-px my-4 bg-gray-200 border-0 "/>
          <p className="pt-3 mt-1 mx-3">
            Lo que hay que saber del dólar hoy en la Argentina, con información
            completa y actualizada sobre la cotización del dólar en el Banco
            Nación, en el mercado mayorista y los datos del Banco Central.
            Tablas del dólar histórico, para poder analizar la evolución del
            tipo de cambio. Y todo el análisis del contexto para entender el
            mercado cambiario.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Cotizaciones;
