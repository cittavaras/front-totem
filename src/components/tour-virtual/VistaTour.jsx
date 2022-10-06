import totiTour from './img/toti-tour.png'
import EdificioB from "./img/Fondos/EdificioB.png";
import PatioB from "./img/Fondos/PatioB.png";
import TorreB from "./img/Fondos/TorreB.png";
import styled from 'styled-components';
import "./tourvirtual.css";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from "./Scrolltour"

export const VistaTour = () => {

    const [Position, setposition] = useState(1);


    const navigate = useNavigate();


    const handleAddCategory = () => {
        navigate('/inicio/evaluacion')
    }

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 60000);
    }, [])

    return (
        <Div>
            
            <img className='Fondocodigo' src={Position===1 ? EdificioB : ''} />
            <img className='Fondocodigo' src={Position===2 ? TorreB : ''} />
            <img className='Fondocodigo' src={Position===3 ? PatioB : ''} />
            <App className='posicion'
                Position={Position}
                setposition={setposition}
            />
              <h1 className="Escanea">Escanea el siguiente codigo </h1>
              <h1 className="para">Para recorrer: </h1>
            <img className='toti' src={totiTour} />
            <div className='imagenes'>
                <Boton className='font' onClick={handleAddCategory} >Continuar</Boton>
            </div>

        </Div>
    )
}

const Div = styled.div`
background-color: #14525;
object-fit: cover;
height: 100vh;
margin-top: -11rem;
background-size: 1080px 1920px;
background-position: center;
z-index: 9999;
`;
const Boton = styled.button`
${'' /* margin-top: -20px; */}
position: absolute;
top: 1100px;
left: 37%;
  background-color: #FFB71B;
  padding: 1rem 5rem 1rem 5rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 34px;
  text-decoration: none;
  font-weight: 700;
`;
