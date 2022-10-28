import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import useOpciones from '../../hooks/useOpciones';
import fondo from './img/sedeblur.png'
import gotaR from './img/gotaverdeR.png';
import gotaL from './img/gotaverdeL.png';
import { useNavigate } from 'react-router-dom';

const Salas = () => {
  const [imagen, setImagen] = useState(false)
  const { asignatura, setCategoriaEvaluacion } = useOpciones();
  const { Aula, Nom_Asignatura, Final, HorInic } = asignatura;
  const sala = Aula.replace('AV-', '').trim();
  const navigate = useNavigate()
  const handleEnter = () => {
    setImagen(true)
    console.log('1')
  }

  const handleLeave = () => {
    setImagen(false)
    console.log('2')
  }
  const handleAddCategory = () => {
    setCategoriaEvaluacion('Encuentra a tu profe')
    navigate('/inicio/evaluacion')
  }
  return (
    <Fondo>
      <Div onTouchEnd={handleLeave}>
        <Asigantura>
          <p>{Nom_Asignatura}</p>
          <p>Se realiza en:</p>
        </Asigantura>

        <ContenedorHorario>
          <Horario className='btn-font'>{HorInic} - {Final}</Horario>
          <img src={gotaL} alt="" />

          <A>
            <NA className='btn-font'>{Nom_Asignatura} </NA>
            <NA className='btn-font'>Sala: {sala}</NA>
          </A>
          <img src={gotaR} alt="" />
        </ContenedorHorario>

        <Img
          ampliar={imagen}
          onTouchStart={handleEnter}
          src={`https://totem.ivaras.cl:7002/salas/${sala}.png`} alt="" />
        <Boton
          className='btn-font'
          onClick={handleAddCategory} >Salir</Boton>

      </Div>
    </Fondo>

  )
}
const A = styled.div`
    font-size: 2rem;
    background-color:rgba(41, 204, 0, 0.5);
    border: 5px solid #29CC00;
    border-radius: 18px;
    padding: 2px 10px 0.1rem 10px;
`;
const Boton = styled.button`
margin-top: -25px;
  background-color: #FFB71B;
  padding: 1rem 5rem 1rem 5rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  color: black;
  font-weight: 800;
  font-size: 24px;
  text-decoration: none;
  font-weight: 700;
`;
const NA = styled.p`
font-family: sans-serif;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
`
const Horario = styled.p`
  color: rgba(41, 204, 0);
  font-family: sans-serif;
  width: auto;
  font-size: 20px;
`;
const ContenedorHorario = styled.div`
  display:flex; 
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
  gap: 1rem;
  margin-bottom: 4rem;
`;
const Fondo = styled.div`
  background-image: url(${fondo});
  object-fit: cover;
  min-height: 100vh;
  background-size: 1080px 1920px;
  background-repeat: no-repeat;
  background-position: center;
`;
const Div = styled.div`
  display: flex  ;
  background-color:rgba(0, 0, 0, 0.28);
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Asigantura = styled.div`
  color: white;
  font-family: sans-serif;
  font-weight: 700;
  height: auto;
  background: rgba(255, 183, 27, 0.5);
  border-radius: 20px 20px 0px 20px;
  padding: 1rem 4rem 10px 4rem;
  margin-top:10rem;
`;
const Img = styled.img`
  width: 50%;  
  transform: ${props => props.ampliar ? 'scale(1.9)' : 'none'};
`;
export default Salas