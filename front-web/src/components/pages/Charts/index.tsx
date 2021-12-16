// para usar os graficos eu importei a biblioteca apexcharts
// não posso esquecer de usar a dependencia do apexcharts o apexcharts
import Filter from '../../../components/Filter';
import { barOptions } from './chart-options'
import Chart from 'react-apexcharts';
import './styles.css';



const chartData = [
    {
        x: 'daniel',
        y:10
    }
]

const Charts = () => {
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
                     width="900"
                     height='500'
                     series={[{data: chartData}]}

                   />
                 </div>
              </div>
           </div>
         
         
         
         
         </div>
        
    );
}

export default Charts;