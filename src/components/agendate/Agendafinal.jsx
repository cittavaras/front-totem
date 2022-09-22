import React from 'react'
import "./agenda.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import fondo from "./icons/background.png";
import TotiHead from '../ui/TotiHead';
import circulo from "./icons/circulo.png";
import qr from "./icons/agendateqr.png";


export const Agendafinal = () => {
  const navigate = useNavigate();

  const servicios = [
    '-Agenda Orientacion Psicologica',
    '-Asesoría en curriculum vitae',
    '-Coordinador CIE',
    '-Coordinadores de carrera',
    '-Cancha sede',
    '-Coordinacion de practicas',
    '-Director de sede',
    '-Director(a)de carrera ',
    '-jefe de programa transervales',
    '-Subdirector académico',
    '-Subdirector de desarrollo Estudiantil'
  ]

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 30000);
  }, []);

  return (
    <>
      <img className='a' src={fondo} />
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
