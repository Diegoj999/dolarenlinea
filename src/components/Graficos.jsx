import React from "react";
import LinesChart from "./LinesChart";

export const Graficos = ({ dataGraph }) => {
  return (
    <section id="graficos" className="container mx-auto"> 
  
      <div className="container mx-auto py-5">
        <h4 className="text-2xl ml-5 mb-4 uppercase ">Evolución del Dólar en 10 días</h4>
  
        <LinesChart dataGraph={dataGraph} />
      </div>
      

    
    </section>
  );
};
