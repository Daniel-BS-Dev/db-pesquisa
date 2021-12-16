// fazendo a interação com o backend
// baixar o axios
// usar o useEffect por que ele trata de uma ciclo de vida  "useEffect(() => {},[]);"
// axios faz a requisição http
// base_url é onde eu coloco o caminha da aplicação
// then é o returno da minha requisição quando ela e feita com sucesso 
// type é um tipo que eu crio com as informações que preciso retornar. ir para type
// com o tipo criado eu posso cria uma estado
import {useEffect, useState} from 'react';
import { RecordsResponse } from './type';
import { formatDate } from './FormatMoment';
import axios from 'axios';
import './styles.css';

const BASE_URL = 'https://dspesquisa-daniel.herokuapp.com'

const Record = () => {
     const [recordResponse, setRecordResponse] = useState<RecordsResponse>();
     console.log(recordResponse);
useEffect(() => {
  axios.get(`${BASE_URL}/records?linePerPage=12`)
  .then(response => setRecordResponse(response.data))
}, []);

    return (
        <div className="page-container">
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
        </div>
    );
}

export default Record;