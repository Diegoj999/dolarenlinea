import React, { useEffect } from "react";
import { fetchData } from "./fetchData";

import { Graficos } from "./Graficos";
import { Calculadora } from "./Calculadora";
import { Separador } from "./Separador";
import Cotizaciones from "./Cotizaciones";
import { Link } from "react-router-dom";


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
 

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Separador />
      <Cotizaciones data={data} />
      <Separador />
      <Graficos dataGraph={graphDataReaded} />
      <Calculadora data={data} />
      <Link to="/" onClick={handleClick} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <p className="text-4xl text-white bg-black rounded-full px-4 py-1">^</p>
    </Link>
    </>
  );
};

export default Home;
