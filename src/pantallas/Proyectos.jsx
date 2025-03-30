import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/boton.css';
import '../styles/proyectos.css';
import { useMediaQuery } from 'react-responsive';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';

function Proyectos() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  const [canalActual, setCanalActual] = useState(0);

  const { language, setLanguage } = useContext(LanguageContext);

  const canales = {
    es: [
      {
        titulo: "Vricko BackEnd",
        descripcion:
          "BackEnd de la página web Vricko para la compra y venta de muebles. Encargado de conectarse a la base de datos y comunicarse con el FrontEnd.",
        imagen: "/portafolio/imagenesPortfolio/VrickoB.png",
        enlace: "https://github.com/Patricio013/Ecommerce-BackEnd",
      },
      {
        titulo: "Vricko FrontEnd",
        descripcion:
          "Frontend de la página web Vricko para la compra y venta de muebles, diseñado para ofrecer una experiencia intuitiva y atractiva a compradores y vendedores.",
        imagen: "/portafolio/imagenesPortfolio/VrickoF.png",
        enlace: "https://github.com/Patricio013/ecommerce-frontend",
      },
      {
        titulo: "Minijuegos",
        descripcion:
          "Pagina web con varios minijuegos como un quizz, juego de la memoria, laberinto y un rompecabezas. Dentro del repositorio esta el link para ir a la pagina.",
        imagen: "/portafolio/imagenesPortfolio/paginaJuegos.png",
        enlace: "https://github.com/Patricio013/PaginaJuegos",
      },
    ],
    en: [
      {
        titulo: "Vricko BackEnd",
        descripcion:
          "BackEnd of the Vricko website for buying and selling furniture. Responsible for connecting to the database and communicating with the FrontEnd.",
        imagen: "/portafolio/imagenesPortfolio/VrickoB.png",
        enlace: "https://github.com/Patricio013/Ecommerce-BackEnd",
      },
      {
        titulo: "Vricko FrontEnd",
        descripcion:
          "Frontend of the Vricko website for buying and selling furniture, designed to offer an intuitive and attractive experience for buyers and sellers.",
        imagen: "/portafolio/imagenesPortfolio/VrickoF.png",
        enlace: "https://github.com/Patricio013/ecommerce-frontend",
      },
      {
        titulo: "Minijuegos",
        descripcion:
          "Website with various mini-games such as a quiz, memory game, maze, and puzzle. The repository contains the link to access the page.",
        imagen: "/portafolio/imagenesPortfolio/paginaJuegos.png",
        enlace: "https://github.com/Patricio013/PaginaJuegos",
      },
    ],
  };

  const cambiarCanal = () => {
    setCanalActual((prevCanal) => (prevCanal + 1) % canales[language].length);
  };
  
  const cambiarCanalAnterior = () => {
    setCanalActual((prevCanal) => 
      prevCanal === 0 ? canales[language].length - 1 : prevCanal - 1
    );
  };

  return (
    <div>
      <div className="language-switch">
        <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
          {language === 'es' ? 'English' : 'Español'}
        </button>
      </div>
      {isMobile && (
        <div> 
          <div className='Proyectos'>
            <h1>{language === "es" ? "Proyectos" : "Projects"}</h1>
          </div>
          <div className='Pantalla2'>
            <div className='Imagen2'>
              <img src={canales[language][canalActual].imagen} alt={canales[language][canalActual].titulo}/>
            </div>
            <div className='Contenido2'>
              <div className='Datos'>
                <h2 className='Estilo-titulo2'>{canales[language][canalActual].titulo}</h2>
                <p className='Estilo-texto2'>{canales[language][canalActual].descripcion}</p>
              </div>
            </div>
            <button onClick={() => window.open(canales[language][canalActual].enlace, '_blank')} className='Estilo-boton2'>
              {language === "es" ? "Ir al proyecto" : "Go to project"}
            </button>
            <div>
              <button onClick={cambiarCanalAnterior} className='Estilo-boton2'>
                <span>❮</span>
              </button>
              <button onClick={cambiarCanal} className='Estilo-boton2'>
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
            </div>
        </div>
      )}
      {isTabletOrDesktop && (
        <div>
          <div className='Proyectos'>
            <h1>{language === "es" ? "Proyectos" : "Projects"}</h1>
          </div>
          <div className='Pantalla'>
            <div className='Contenido'>
              <div className='Imagen'>
                <img src={canales[language][canalActual].imagen} alt={canales[language][canalActual].titulo}/>
              </div>
              <div className='Datos'>
                <h2 className='Estilo-titulo'>{canales[language][canalActual].titulo}</h2>
                <p className='Estilo-texto'>{canales[language][canalActual].descripcion}</p>
                <button onClick={() => window.open(canales[language][canalActual].enlace, '_blank')} className='Estilo-boton'>
                  {language === "es" ? "Ir al proyecto" : "Go to project"}
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
            </div>
        </div>
      )}
    </div>
    )
  }
  
  export default Proyectos;