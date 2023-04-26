import React, { useEffect } from "react";
import { fetchData } from "./fetchData";

import { Graficos } from "./Graficos";
import { Calculadora } from "./Calculadora";
import { Separador } from "./Separador";
import Cotizaciones from "./Cotizaciones";


const apiData = fetchData("https://api.bluelytics.com.ar/v2/latest");

const graphData = fetchData(
  "https://api.bluelytics.com.ar/v2/evolution.json?data=dolar&days=20"
);

const Home = () => {
  const data = apiData.read();
  const graphDataReaded = graphData.read();

  useEffect(() =>{
    document.title= `Inicio`
 }, [])        

  return (
    <>
      <Separador />
      <Cotizaciones data={data} />
      <Separador />
      <Graficos dataGraph={graphDataReaded} />
      <Calculadora data={data} />
    </>
  );
};

export default Home;
