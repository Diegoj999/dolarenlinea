import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LinesChart({ dataGraph }) {
  
  // Usamos useMemo para calcular la configuración del gráfico solo cuando cambia la data
  const chartConfig = useMemo(() => {
    if (!dataGraph || dataGraph.length === 0) return null;

    // Filtramos y preparamos los datos (invertimos para orden cronológico)
    const dOf = dataGraph.filter((_, i) => i % 2 === 0);
    const dBlue = dataGraph.filter((_, i) => i % 2 !== 0);

    // Formateamos las fechas para que se vean mejor (ej: 15/08)
    const labels = dBlue.map((e) => {
      const [year, month, day] = e.date.split('-');
      return `${day}/${month}`;
    }).reverse();

    const bluePrices = dBlue.map((e) => e.value_sell).reverse();
    const ofPrices = dOf.map((e) => e.value_sell).reverse();

    // --- COLORES YESTILOS ---
    const blueColor = '#3b82f6'; // Azul eléctrico (Tailwind blue-500)
    const greenColor = '#10b981'; // Verde esmeralda (Tailwind emerald-500)
    const gridColor = '#334155'; // Gris azulado oscuro para la grilla (slate-700)
    const textColor = '#94a3b8'; // Gris claro para textos (slate-400)

    return {
      data: {
        labels,
        datasets: [
          {
            label: 'Dólar Blue',
            data: bluePrices,
            tension: 0.4, // Curvatura suave
            borderWidth: 3,
            borderColor: blueColor,
            pointRadius: 0, // Puntos invisibles por defecto
            pointHoverRadius: 8, // Puntos grandes al pasar el mouse
            pointBackgroundColor: blueColor,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            fill: true,
            // DEGRADADO AZUL
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              if (!ctx) return 'transparent';
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); // Azul semitransparente arriba
              gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)'); // Transparente abajo
              return gradient;
            },
          },
          {
            label: 'Dólar Oficial',
            data: ofPrices,
            tension: 0.4,
            borderWidth: 3,
            borderColor: greenColor,
            pointRadius: 0,
            pointHoverRadius: 8,
            pointBackgroundColor: greenColor,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            fill: true,
             // DEGRADADO VERDE
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                if (!ctx) return 'transparent';
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
                return gradient;
              },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index', // Muestra ambos valores en el mismo punto vertical
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 15,
              usePointStyle: true,
              pointStyle: 'circle',
              color: textColor, // Color del texto de la leyenda
              font: { family: "'Inter', sans-serif", size: 12, weight: '600' },
              padding: 20,
            },
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)', // Fondo oscuro para el tooltip (slate-900)
            titleColor: '#ffffff',
            bodyColor: textColor,
            borderColor: gridColor,
            borderWidth: 1,
            padding: 12,
            boxPadding: 6,
            usePointStyle: true,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) label += ': ';
                if (context.parsed.y !== null) {
                  // Formato de moneda argentino
                  label += new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                    maximumFractionDigits: 0, // Sin centavos en el gráfico para limpiar
                  }).format(context.parsed.y);
                }
                return label;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Ocultamos las líneas verticales de la grilla
            },
            ticks: {
              color: textColor, // Color de las fechas
              font: { size: 11 },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 8, // Limitamos la cantidad de fechas para que no se encimen
            },
            border: {
                display: false // Ocultamos la línea base del eje X
            }
          },
          y: {
            position: 'right', // Ponemos el eje Y a la derecha (estilo financiero)
            grid: {
              color: gridColor, // Color de las líneas horizontales sutiles
              drawBorder: false, // Ocultamos la línea base del eje Y
            },
            ticks: {
              color: textColor, // Color de los precios
              font: { size: 11, weight: '500' },
              padding: 10,
              callback: (value) => '$' + value, // Agregamos signo $
            },
          },
        },
      }
    };
  }, [dataGraph]);

  if (!chartConfig) return null; // El contenedor ya maneja el estado de carga

  // Contenedor con altura fija para el gráfico
  return (
    <div className="w-full h-[400px]">
      <Line data={chartConfig.data} options={chartConfig.options} />
    </div>
  );
}