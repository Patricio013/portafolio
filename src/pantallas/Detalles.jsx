import { useNavigate } from 'react-router-dom';
import '../styles/boton.css';
import '../styles/detalles.css';

function Detalles(){
    const navigate = useNavigate();

    return (
        <>
        <div className="cuerpo-detalles">
            <div className='Placa'> 
                <img src='src\imagenesPortfolio\Placarara.png' alt='Placa' />
            </div>
            <div className='cuadros'>
                <img src='src\imagenesPortfolio\cuadroJAVA.png' alt='Java'/>
                <img src='src\imagenesPortfolio\cuadroSQL.png' alt='MySQL' />
                <img src='src\imagenesPortfolio\cuadroHTML.png' alt='HTML' />
                <img src='src\imagenesPortfolio\cuadroRV.png' alt='React+Vite' />
                <img src='src\imagenesPortfolio\cuadroCSS.png' alt='CSS' />
                <img src='src\imagenesPortfolio\cuadroC.png' alt='C++' />
                <img src='src\imagenesPortfolio\cuadroJavaScript.png' alt='JavaScript' />
                <img src='src\imagenesPortfolio\cuadroPYTHON.png' alt='Python' />
                <img src='src\imagenesPortfolio\cuadroMDB.png' alt='MongoDB' />
            </div>
        </div>
        <div className="button-container">
            <button className="button-3d" onClick={() => navigate('/proyectos')}>
                <div className="button-top">
                    <span className="material-icons">❮</span>
                </div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
            <button className="button-3d" onClick={() => navigate('/')}>
                <div className="button-top">
                    <span className="material-icons">❯</span>
                </div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
        </div>
        </>
    );
}

export default Detalles;