import { useNavigate } from 'react-router-dom';
import '../styles/boton.css';
import '../styles/sobremi.css';
import { useMediaQuery } from 'react-responsive';

function SobreMi() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 769px)" });

    return(
        <div>
            {isMobile && (
                <div>
                    <div className='De2'>
                        <div className='Titulo'>
                            <h1> Sobre Mi </h1>
                        </div>
                        <div className='Sobremi'>
                            <p>
                                Estoy estudiando Ingenieria en Informatica y me encuentro ya en mi 4to año con el titulo intermedio de Analista en Informatica <br />
                                He hecho cursos en Codo a Codo Python Full Stack y Desarrollador en Salesforce. Tambien segui estudiando y mejorando los lenguajes ya conocidos de forma autodidacta.
                            </p>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="button-3d" onClick={() => navigate('/')}>
                            <div className="button-top">
                                <span className="material-icons">❮</span>
                            </div>
                            <div className="button-bottom"></div>
                            <div className="button-base"></div>
                        </button>
                        <button className="button-3d" onClick={() => navigate('/proyectos')}>
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
                    <div className='De'>
                        <h1> Sobre Mi </h1>
                        <p>
                            Estoy estudiando Ingenieria en Informatica y me encuentro ya en mi 4to año con el titulo intermedio de Analista en Informatica <br />
                            He hecho cursos en Codo a Codo Python Full Stack y Desarrollador en Salesforce. Tambien segui estudiando y mejorando los lenguajes ya conocidos de forma autodidacta.
                        </p>
                    </div>
                    <div className="button-container">
                        <button className="button-3d" onClick={() => navigate('/')}>
                            <div className="button-top">
                                <span className="material-icons">❮</span>
                            </div>
                            <div className="button-bottom"></div>
                            <div className="button-base"></div>
                        </button>
                        <button className="button-3d" onClick={() => navigate('/proyectos')}>
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

export default SobreMi;