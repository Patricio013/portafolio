import { useNavigate } from 'react-router-dom';
import '../styles/boton.css';
import '../styles/inicio.css';
import {Yo, maletin, PGithub, PLinkedIn} from '../imagenesPortfolio/imagenes'
import { useMediaQuery } from 'react-responsive';

function Inicio(){
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 769px)" });

    return (
        <div>
            {isMobile && (
                <div className='InicioC'>
                    <div className='Foto2'>
                        <img src={Yo} alt='Yo' />        
                    </div>
                    <div className='Detalles2'>
                        <p>
                            Mi nombre es Patricio Matias Gomez. Soy un analista en informática traineer que esta iniciando su camino dentro del mundo de programación y dispuesto a seguir brindando y mejorando servicios con cada proyecto. <br />
                            <br />
                            Email: patriciom.gomez@hotmail.com <br />
                            Tel.: +54 9 11 6711-3845
                        </p>
                    </div>
                    <div className='Pegatinas2'>
                        <a href='https://www.linkedin.com/in/patricio-matias-gomez/' target='_blank'>
                            <img src={PLinkedIn} alt='LinkedIn' />
                        </a>
                        <a href='https://github.com/Patricio013' target='_blank'>
                            <img src={PGithub} alt='Github' />
                        </a>
                    </div>
                    <div id='Maletin'>
                        <a href='portafolio\CV\PatricioMatiasCV.pdf' target="_blank">
                            <img src={maletin} alt='CV' />
                        </a>
                    </div>
                    <div className="button-container">
                        <button className="button-3d" onClick={() => navigate('/detalles')}>
                            <div className="button-top">
                                <span className="material-icons">❮</span>
                            </div>
                            <div className="button-bottom"></div>
                            <div className="button-base"></div>
                        </button>
                        <button className="button-3d" onClick={() => navigate('/sobremi')}>
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
                <>
                <div id='Contenido'>
                    <div className='Pizarra'>
                        <div className='Foto'>
                            <img src={Yo} alt='Yo' />
                        </div>
                        <div className='Detalles'>
                            <p>
                                Mi nombre es Patricio Matias Gomez. Soy un analista en informática traineer que esta iniciando su camino dentro del mundo de programación y dispuesto a seguir brindando y mejorando servicios con cada proyecto. <br />
                                <br />
                                Email: patriciom.gomez@hotmail.com <br />
                                Tel.: +54 9 11 6711-3845
                            </p>
                        </div>
                        <div className='Pegatinas'>
                            <a href='https://www.linkedin.com/in/patricio-matias-gomez/' target='_blank'>
                                <img src={PLinkedIn} alt='LinkedIn' />
                            </a>
                            <a href='https://github.com/Patricio013' target='_blank'>
                                <img src={PGithub} alt='Github' />
                            </a>
                        </div>
                    </div>
                    <div id='Maletin'>
                        <a href='portafolio\CV\PatricioMatiasCV.pdf' download="PatricioGomezCV.pdf">
                            <img src={maletin} alt='CV' />
                        </a>
                    </div>
                </div>
                <div className="button-container">
                    <button className="button-3d" onClick={() => navigate('/detalles')}>
                        <div className="button-top">
                            <span className="material-icons">❮</span>
                        </div>
                        <div className="button-bottom"></div>
                        <div className="button-base"></div>
                    </button>
                    <button className="button-3d" onClick={() => navigate('/sobremi')}>
                        <div className="button-top">
                            <span className="material-icons">❯</span>
                        </div>
                        <div className="button-bottom"></div>
                        <div className="button-base"></div>
                    </button>
                </div></>
            )}
        </div>
    );
}

export default Inicio;