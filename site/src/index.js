import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from './pages/cadastrar'
import 'react-toastify/dist/ReactToastify.css';
import Animes from './pages/consultar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Anime />}/>
        <Route path="/anime" element={<Animes />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);