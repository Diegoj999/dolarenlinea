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

export default function LinesChart({dataGraph}) {
  
    console.log(dataGraph)
    const dBlue = dataGraph.filter((e) => dataGraph.indexOf(e) % 2 !== 0);
    const dOf = dataGraph.filter((e) => dataGraph.indexOf(e) % 2 === 0);
    const dataGraphBPrice = dBlue.map(e => e.value_sell).reverse()
    const dates =  dBlue.map(e => e.date.slice(5)).reverse()


    const dataGraphOPrice = dOf.map(e => e.value_sell).reverse()

    const midata = {
      labels: dates,
      datasets: [ 
          {
              label: 'Dólar Blue',
              data: dataGraphBPrice,
              tension: 0.5,
              fill : true,
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(20, 133, 240, 0.22)',
              pointRadius: 5,
              pointBorderColor: '#3b82f6',
              pointBackgroundColor: '#3b82f6',
          },
          {
              label: 'Dólar Oficial',
              data: dataGraphOPrice,
              tension: 0.5,
              fill : true,
              borderColor: '#22c55e',
              backgroundColor: 'rgba(34, 241, 41, 0.22)',
              pointRadius: 5,
              pointBorderColor: '#22c55e',
              pointBackgroundColor: '#22c55e',
              hidden: true
          }
      ],
    };
  
    const misoptions = {
      scales : {
          y : {
             

          },
          x: {
              ticks: { color: 'rgb(0,0,0)'}
          }
      }
    };

    return <Line data={midata} options={misoptions}/>
  }