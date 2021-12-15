import {BrowserRouter as Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/home";

const DRoutes = () => (
 <Routes>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Routes>
);

export default DRoutes;

// baixar a biblioteca react-router-dom
// BrowerRouter engloba toda as rotas