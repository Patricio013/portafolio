import { useNavigate } from 'react-router-dom';
import '../styles/boton.css';
import '../styles/sobremi.css';
import { useMediaQuery } from 'react-responsive';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';

function SobreMi() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 769px)" });
    const { language, setLanguage } = useContext(LanguageContext);

    const text = {
        es: {
            FPart: "Estoy estudiando Ingenieria en Informatica y me encuentro ya en mi 4to año con el titulo intermedio de Analista en Informatica",
            SPart: "He hecho cursos en Codo a Codo Python Full Stack y Desarrollador en Salesforce. Tambien segui estudiando y mejorando los lenguajes ya conocidos de forma autodidacta."
        },
        en: {
            FPart: "I am studying Computer Engineering and I am currently in my 4th year, holding the intermediate degree of Computer Analyst.",
            SPart: "I have completed courses in Codo a Codo Python Full Stack and Salesforce Developer. I have also continued studying and improving my knowledge of known programming languages in a self-taught manner."
        }
    }

    return(
        <div>
            <div className="language-switch">
                <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
                    {language === 'es' ? 'English' : 'Español'}
                </button>
            </div>
            {isMobile && (
                <div>
                    <div className='De2'>
                        <div className='Titulo'>
                            <h1> {language === "es" ? "Sobre Mi" : "About Me"} </h1>
                        </div>
                        <div className='Sobremi'>
                            <p>
                                {text[language].FPart} <br />
                                {text[language].SPart}
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
                        <h1> {language === "es" ? "Sobre Mi" : "About Me"} </h1>
                        <p>
                            {text[language].FPart} <br />
                            {text[language].SPart}
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