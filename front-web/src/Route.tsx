import Record from "./components/pages/Record";
import Home from "./components/pages/home";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const DRoutes = () => (
 <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/record' element={<Record />} />
    </Routes>
  </Router>
);

export default DRoutes;

// baixar a biblioteca react-router-dom
// BrowerRouter engloba toda as rotas
// path caminho
// nome da variavel const