import {ReactComponent as ArrowIcon} from '../../../assets/arrow.svg';
import {ReactComponent as GamerImage} from '../../../assets/gamer.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
      <div className="home-container">
          <div className="home-text">
            <h1 className="home-text-title">Quais jogos a galera gosta mais?</h1>
            <h3 className="home-text-subtitle">Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!</h3>
            <div className="home-actions">
              <Link to="/record">
                  <button className="home-btn">
                      QUERO SABER QUAIS SÃO
                  </button>
                  <div className="home-btn-icon">
                      <ArrowIcon />
                  </div>
              </Link>
            </div>
          </div>
          <GamerImage />
      </div>
); 

export default Home;