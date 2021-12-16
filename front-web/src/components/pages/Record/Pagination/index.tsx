// props deixa o meu componente dinamico
// o totalPages e opcional porque antes da api carregar eu não tenho ele, será o totalpage da api no postman
// goToPage sera uma metodo que quando o usuario clicar no botão ele vai chamar uma function
// activePage para saber qual sera a pagina ativa
// paginationaItem era para saber quando items de paginação tem no meu backend
import './styles.css';

type Props = {
    totalPages?: number;
    goToPage: Function;
    activePage: number;
}

const Pagination = ({totalPages = 0, goToPage, activePage}: Props) => {
     const paginationItems = Array.from(Array(totalPages).keys());

    return(
        <div className="pagination-container">
            {paginationItems.map(item => (
              <button 
                key={item}
                className={`pagination-item ${activePage === item ? 'active': 'inactive'}`}
                onClick={() => goToPage(item)}
              >
                {item + 1}
              </button>
            ))}
         
        </div>
    )
}

export default Pagination;