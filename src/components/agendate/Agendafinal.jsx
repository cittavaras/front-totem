import React from 'react'
import "./agenda.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import fondo from "./icons/background.png";
import TotiHead from '../ui/TotiHead';
import circulo from "./icons/circulo.png";
import qr from "./icons/agendateqr.png";


export const Agendafinal = () => {
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 90000);
  }, []);

  return (
    <>
    <img className='' src={fondo} />
      <div>
      <img className='circulo' src={circulo} />
      <img className='qr' src={qr} />
      <h1 className="Escanea">Escanea el siguiente codigo para</h1>
      <h1 className="Luego">luego agendar:</h1>
        <div className="Fondo-agenda">
          <h1 className="service">Servicios</h1>
        </div>
        
        
        <TotiHead></TotiHead>
      </div>
    </>
  );
};
