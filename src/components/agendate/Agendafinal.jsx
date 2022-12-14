import React from 'react'
import './agenda.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import fondo from './icons/background.png';
import TotiHead from '../ui/TotiHead';
import circulo from './icons/circulo.png';
import qr from './icons/agendateqr.png';


export const Agendafinal = () => {
  const navigate = useNavigate();

  const servicios = [
    '-AGENDA ORIENTACIÓN PSICOLÓGICA',
    
    '-ASESORÍA EN CURRICULUM VITAE',

    '-COORDINADOR CIE',

    '-COORDINADORES DE CARRERA',

    '-CANCHA SEDE',

    '-COORDINACIÓN DE PRÁCTICAS',

    '-DIRECTOR DE SEDE',

    '-DIRECTOR(A)DE CARRERA ',

    '-JEFE DE PROGRAMA TRANSVERSALES',

    '-SUBDIRECTOR ACADÉMICO',

    '-SUBDIRECTOR DE DESARROLLO ESTUDIANTIL'
  ]

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 30000);
  }, []);

  return (
    <>
      <img className='fondosA' src={fondo} />
      <div>
        <img className='circulo' src={circulo} />
        <img className='qr' src={qr} />
        <h1 className="Escanea">Escanea el siguiente codigo para</h1>
        <h1 className="Luego">luego agendar:</h1>\
        <div className="Fondo-agenda">
          <h1 className="services"> Servicios </h1>
        </div>
        <div className='servicio' >
          {servicios.map((servicio) => (<p className='list'>{servicio}</p>))}
        </div>


        <TotiHead></TotiHead>
      </div>
    </>
  );
};
