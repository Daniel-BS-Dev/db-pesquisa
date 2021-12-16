// para usar os graficos eu importei a biblioteca apexcharts
// não posso esquecer de usar a dependencia do apexcharts o apexcharts
// documentação https://apexcharts.com/docs/react-charts/
import { buildBarSeries, getGenderChartData, getPlatformChartData } from "./helpers";
import Filter from '../../../components/Filter';
import { useState, useEffect } from 'react';
import { barOptions} from './chart-options';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './styles.css';

type ChartData = {
        labels: string[],
        series: number[]
    }

type BarChartData = {
        x: string,
        y: number
    }

const initialChartData = {
    labels: [],
    series: []
}

const BASE_URL = 'https://dspesquisa-daniel.herokuapp.com';

const Charts = () => {
  
    const [barChartData, setbarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<ChartData>(initialChartData);
    const [genderData, setGenderData] = useState<ChartData>(initialChartData);

   useEffect(() => {
      async function getData(){
         const recordsResponse = await axios.get(`${BASE_URL}/records`);
         const gamesResponse = await axios.get(`${BASE_URL}/games`);

          const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
          setbarChartData(barData);

          const platformChartData = getPlatformChartData(recordsResponse.data.content);
          setPlatformData(platformChartData);

          const genderChartData = getGenderChartData(recordsResponse.data.content);
          setGenderData(genderChartData);
     
         
       }
       getData();
   }, []);
    
    return(
         <div className="page-container">
           <Filter link="/record" linkText="VER TABELA" />
           <div className="chart-container">
              <div className="top-related">
                 <h1 className="top-related-title">
                   Jogos mais votados
                 </h1>
                 <div className="games-container">
                  <Chart 
                     options={barOptions}
                     type="bar"
                     width="600"
                     height='650'
                     series={[{data: barChartData}]}
                   />
                 </div>
              </div>
           <div className="charts">
             <div className="platform-chart">
               <h2 className="chart-title">Plataformas</h2>
               <Chart
                   options={{...barOptions, labels: platformData?.labels}}
                   type="bar"
                   width="350"
                   series={[{data: platformData?.series}]}
                />
             </div>
             <div className="gender-chart">
               <h2 className="chart-title">Gêneros</h2>
               <Chart
                   options={{...barOptions, labels: genderData?.labels}}
                   type="bar"
                   width="350"
                   series={[{data: genderData?.series}]}
                />
             </div>
           </div>
         </div>
        </div>
    );
}

export default Charts;