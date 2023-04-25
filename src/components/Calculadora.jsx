import React, { useState } from "react";

export const Calculadora = ({ data }) => {

    const [monto, setMonto] = useState(0);

  return (
    <div className="py-6">
      <h3 className="text-4xl text-center py-5 font-black">Calculadora</h3>
      <div
        id="calculadora"
        className="container w-90 md:w-3/5 lg:w-2/5 2xl:w-1/5 mx-auto rounded-lg py-5"
      >
        <form className="bg-stone-600  sm:rounded-lg flex flex-col px-5 justify-center py-5">
          <div className="flex m-3 mx-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
              height={50}
              width={60}
              alt="Bandera arg"
            />
            <span className=" font-medium text-white mx-2">ARS($)</span>
            <input
              type="number"
              className="peer px-2 bg-stone-500 focus:outline-none"
              placeholder="Ingrese la cantidad"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </div>
          <div className="flex m-3 mx-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              height={60}
              width={60}
              alt="Hola"
            />

            <span className=" font-medium text-white mx-2">USD($)</span>
            <input
              type="number"
              className="peer px-2 bg-stone-500"
              placeholder=""
              value={(monto / data.blue.value_sell).toFixed(2)}
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
};
