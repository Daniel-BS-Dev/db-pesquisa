// fazendo a interação com o backend
// baixar o axios
// usar o useEffect por que ele trata de uma ciclo de vida  "useEffect(() => {},[]);"
// axios faz a requisição http
// base_url é onde eu coloco o caminha da aplicação
// then é o returno da minha requisição quando ela e feita com sucesso 
// type é um tipo que eu crio com as informações que preciso retornar. ir para type
// com o tipo criado eu posso cria uma estado
// cria a paginação. Criando uma nova pasta pagination
import {useEffect, useState} from 'react';
import { RecordsResponse } from './type';
import { formatDate } from './FormatMoment';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import axios from 'axios';
import './styles.css';

const BASE_URL = 'https://dspesquisa-daniel.herokuapp.com'

const Record = () => {
     const [recordResponse, setRecordResponse] = useState<RecordsResponse>();
     const [activePage, setActivePage] = useState(0);

useEffect(() => {
  axios.get(`${BASE_URL}/records?linePerPage=12&page=${activePage}`)
  .then(response => setRecordResponse(response.data))
}, [activePage]); // todas as vezes que o activePage mudar a pagina tbm muda, para funcionar eu tenho que fazer isso page=${activePage} como esta acima

    return (
        <div className="page-container">
        <div className="filters-container records-actions">
         <Link to="/charts">
           <button className="action-filters">
              VER GRÁFICOS
           </button>
         </Link>
        </div>
            <table className="records-table" cellPadding="0" cellSpacing="0">
               <thead>
                   <tr>
                       <th>INSTANTE</th>
                       <th>NOME</th>
                       <th>IDADE</th>
                       <th>PLATFORMA</th>
                       <th>GÊNERO</th>
                       <th>TÍTULO</th>
                   </tr>
               </thead>
               <tbody>
               {recordResponse?.content.map(record => (
                  <tr key={record.id}>
                       <td>{formatDate(record.moment)}</td> 
                       <td>{record.name}</td>
                       <td>{record.age}</td>
                       <td className="text-secondary">{record.gamePlatform}</td>
                       <td>{record.genreName}</td>
                       <td>{record.gameTitle}</td>
                   </tr>
               ))}
               </tbody>
            </table>
            <Pagination
               activePage={activePage}
               goToPage={(index: number) => setActivePage(index)}
               totalPages={recordResponse?.totalPages}
            />
        </div>
    );
}

export default Record;