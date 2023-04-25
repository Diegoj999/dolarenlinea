import React from "react";
import { fetchData } from "./fetchData";
import Cotizacion from "./Cotizacion";
import { Graficos } from "./Graficos";
import { Calculadora } from "./Calculadora";
import { Separador } from "./Separador";

const apiData = fetchData("https://api.bluelytics.com.ar/v2/latest");

const graphData = fetchData(
  "https://api.bluelytics.com.ar/v2/evolution.json?data=dolar&days=20"
);

const Home = () => {
  const data = apiData.read();
  const graphDataReaded = graphData.read();

  return (
    <>
      <Separador />
      <Cotizacion data={data} />
      <Separador />
      <Graficos dataGraph={graphDataReaded} />
      <Separador />
      <Calculadora data={data} />
    </>
  );
};

export default Home;
