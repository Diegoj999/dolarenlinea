import React from 'react'

const Cotizacion = ({data}) => {
  return (
    <section className="container mx-auto py-5">
      <h1 className="text-3xl md:text-4xl py-5 md:mb-5 font-bold">
        Cotización del Dólar
      </h1> 
     
      <div className=" 2xl:grid 2xl:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 2xl:grid-cols-2 mx-4 gap-6 py-5 justify-center order-last">
          
            <div className="flex flex-col max-w-sm p-6 mx-auto border border-gray-200 rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                Precio de Dolar Blue
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
              <p className="text-center">Ultima actualización: {(data.last_update.slice(0, 19))}</p>
            </div>
          
            <div className="flex flex-col max-w-sm p-6 mx-auto border border-gray-200 rounded-lg shadow  p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                Precio de Dolar Oficial
              </h5>
              <div className="py-1 flex justify-center gap-6">
                <div className="py-3">
                  <p className=" ml-2 text-green-700 text-xl">Venta</p>
                  <p className="mr-5 text-3xl  text-green-700 font-bold">
                    ${data.oficial.value_sell}
                  </p>
                </div>

                <div className="py-3">
                  <p className=" ml-1 text-green-700 text-xl">Compra</p>
                  <p className="mr-5 text-3xl  text-green-700 font-bold">
                    ${data.oficial.value_buy}
                  </p>
                </div>
              </div>
              <p className="text-center">Ultima actualización: {(data.last_update.slice(0, 19))}</p>
            </div>
          
        </div>
        <div className="py-5 mx-4 ">
          <h1 className="font-bold text-2xl md:text-3xl py-2">
            Que es el dólar blue?
          </h1>
          <p className="pt-3 text-lg mx-3">
            El dólar blue es el que circula en el mercado negro y suele tener un
            valor más alto que el oficial. Este dólar no se compra en bancos o
            casas de cambio oficiales.
          </p>
          <p className="pt-5 text-2xl font-bold">
            Precios actualizados las 24 hs
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Cotizacion