import { useNavigate } from 'react-router-dom';
import '../styles/boton.css';
import '../styles/detalles.css';
import {Placarara, cuadroJAVA, cuadroCSS, cuadroC, cuadroJavaScript, cuadroMDB, cuadroPYTHON, cuadroRV, cuadroSQL, cuadroHTML} from '../imagenesPortfolio/imagenes'

function Detalles(){
    const navigate = useNavigate();

    return (
        <>
        <div className="cuerpo-detalles">
            <div className='Placa'> 
                <img src={Placarara} alt='Placa' />
            </div>
            <div className='cuadros'>
                <img src={cuadroJAVA} alt='Java'/>
                <img src={cuadroSQL} alt='MySQL' />
                <img src={cuadroHTML} alt='HTML' />
                <img src={cuadroRV} alt='React+Vite' />
                <img src={cuadroCSS} alt='CSS' />
                <img src={cuadroC} alt='C++' />
                <img src={cuadroJavaScript} alt='JavaScript' />
                <img src={cuadroPYTHON} alt='Python' />
                <img src={cuadroMDB} alt='MongoDB' />
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