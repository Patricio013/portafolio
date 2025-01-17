import { useState } from 'react'
import './App.css'
import Inicio from './pantallas/Inicio';
import Proyectos from './pantallas/Proyectos';
import Detalles from './pantallas/Detalles';
import SobreMi from './pantallas/SobreMi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/detalles' element={<Detalles />} />
      </Routes>
    </Router>
  );
}

export default App
