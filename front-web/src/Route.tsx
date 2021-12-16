import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Record from "./components/pages/Record";
import Charts from "./components/pages/Charts";
import Home from "./components/pages/Home";
import Header from "./components/Header";


const DRoutes = () => (
 <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/record' element={<Record />} />
      <Route path='/charts' element={<Charts />} />
    </Routes>
  </Router>
);

export default DRoutes;

// baixar a biblioteca react-router-dom
// BrowerRouter engloba toda as rotas
// path caminho
// nome da variavel const