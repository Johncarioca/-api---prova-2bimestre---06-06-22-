import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from './pages/cadastrar'
import Consultar from './pages/consultar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Anime />}/>
        <Route path="/animes" element={<Consultar />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);