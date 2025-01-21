import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/boton.css';
import '../styles/proyectos.css';

function Proyectos() {
  const navigate = useNavigate();

  const [canalActual, setCanalActual] = useState(0);

  const canales = [
    {
      titulo: 'Vricko BackEnd',
      descripcion: 'BackEnd de la pagina web Vricko para la compra y venta de muebles. Encargada de conectarse a la base de datos y comunicarse con el FrontEnd.',
      imagen: '/portafolio/imagenesPortfolio/VrickoB.png',
      enlace: 'https://github.com/Patricio013/Ecommerce-BackEnd',
    },
    {
      titulo: 'Vricko FrontEnd',
      descripcion: 'Frontend de la página web Vricko para la compra y venta de muebles, diseñado para ofrecer una experiencia intuitiva y atractiva a compradores y vendedores.',
      imagen: '/portafolio/imagenesPortfolio/VrickoF.png',
      enlace: 'https://github.com/Patricio013/ecommerce-frontend',
    },
    {
      titulo: 'MarketAll',
      descripcion: 'Una API de spring boot que se encuentra conectada a MongoDB y Redis de manera local. Se pueden ingresar datos desde la consola.',
      imagen: '/portafolio/imagenesPortfolio/MarketAll.png',
      enlace: 'https://github.com/Patricio013/MarketAll2',
    },
  ];

  const cambiarCanal = () => {
    setCanalActual((prevCanal) => (prevCanal + 1) % canales.length);
  };

  const cambiarCanalAnterior = () => {
    setCanalActual((prevCanal) => 
      prevCanal === 0 ? canales.length - 1 : prevCanal - 1
    );
  };

  return (
    <>
    <div className='Proyectos'>
      <h1>Proyectos</h1>
    </div>
    <div className='Pantalla'>
      <div className='Contenido'>
        <div className='Imagen'>
          <img src={canales[canalActual].imagen} alt={canales[canalActual].titulo}/>
        </div>
        <div className='Datos'>
          <h2 className='Estilo-titulo'>{canales[canalActual].titulo}</h2>
          <p className='Estilo-texto'>{canales[canalActual].descripcion}</p>
          <button onClick={() => window.open(canales[canalActual].enlace, '_blank')} className='Estilo-boton'>
            Ir al proyecto
          </button>
        </div>
      </div>
      <div>
        <button onClick={cambiarCanalAnterior} className='Estilo-boton'>
          <span>❮</span>
        </button>
        <button onClick={cambiarCanal} className='Estilo-boton'>
          <span>❯</span>
        </button>
      </div>
    </div>
    <div className="button-container">
        <button className="button-3d" onClick={() => navigate('/sobremi')}>
          <div className="button-top">
            <span className="material-icons">❮</span>
          </div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
        <button className="button-3d" onClick={() => navigate('/detalles')}>
          <div className="button-top">
            <span className="material-icons">❯</span>
          </div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      </div></>
    )
  }
  
  export default Proyectos;