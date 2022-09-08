import totiTour from './img/toti-tour.png'
import EdificioB from "./img/Fondos/EdificioB.png";
import styled from 'styled-components';
import "./tourvirtual.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import App from "./Scrolltour"

export const VistaTour = () => {

    const navigate = useNavigate();
    
    const handleAddCategory = () => {
        navigate('/inicio/evaluacion')
    }

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 30000);
    }, [])

    return (
        <Div>  
            <App className='posicion' />
         <img src={EdificioB} />
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
