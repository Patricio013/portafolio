import { useState } from 'react'
import './App.css'
import Inicio from './pantallas/Inicio';
import Proyectos from './pantallas/Proyectos';
import Detalles from './pantallas/Detalles';
import SobreMi from './pantallas/SobreMi';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <BrowserRouter basename='/portafolio'>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremi' element={<SobreMi />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/detalles' element={<Detalles />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App
