import { useNavigate } from 'react-router-dom';
import '../styles/boton.css';
import '../styles/inicio.css';
import {Yo, maletin, PGithub, PLinkedIn} from '../imagenesPortfolio/imagenes'
import { useMediaQuery } from 'react-responsive';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';

function Inicio(){
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 769px)" });
    const { language, setLanguage } = useContext(LanguageContext);

    const texts = {
        es: {
            description: "Mi nombre es Patricio Matias Gomez. Soy un analista en informática que está iniciando su camino dentro del mundo de programación y dispuesto a seguir brindando y mejorando servicios con cada proyecto.",
            email: "Email: patriciom.gomez@hotmail.com",
            phone: "Tel.: +54 9 11 6711-3845",
        },
        en: {
            description: "My name is Patricio Matias Gomez. I am a computer analyst starting my journey in the programming world, willing to continue improving and providing better services with each project.",
            email: "Email: patriciom.gomez@hotmail.com",
            phone: "Phone: +54 9 11 6711-3845",
        }
    };

    return (
        <div>
            <div className="language-switch">
                <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
                    {language === 'es' ? 'English' : 'Español'}
                </button>
            </div>
            {isMobile && (
                <div className='InicioC'>
                    <div className='Foto2'>
                        <img src={Yo} alt='Yo' />        
                    </div>
                    <div className='Detalles2'>
                        <p>
                            {texts[language].description} <br /><br />
                            {texts[language].email} <br />
                            {texts[language].phone}
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
                        <a href='/portafolio/CV/PatricioGomezCV.pdf' download="PatricioGomezCV.pdf">
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
                                {texts[language].description} <br /><br />
                                {texts[language].email} <br />
                                {texts[language].phone}
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
                        <a href='/portafolio/CV/PatricioGomezCV.pdf' download="PatricioGomezCV.pdf">
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