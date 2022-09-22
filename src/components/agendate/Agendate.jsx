import React from 'react'
import agenda from "./icons/agendaicons.png";
import fondo from "./icons/background.png";
import totiup from "./icons/totiup.png"
import totileft from "./icons/totileft.png"
import totiright from "./icons/totiright.png"
import "./agenda.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Agendate = () => {
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 60000);
  }, []);


  return (
    <>
      <img className='a' src={fondo} />
      <div className='all'>
        <img className="agenda" src={agenda} />
        <img className='totiup' src={totiup} />
        <img className='totileft' src={totileft} />
        <img className='totiright' src={totiright} />
        <div className="letra-color">
          <h1 className="title-agenda">Descubre una nueva manera de agendar los </h1>
          <h1 className="title-servicios">servicios que te ofrece Antonio Varas </h1>
        </div>
      </div>
      <Link to=":agendafinal">
        <button className="bton">Continuar</button>
      </Link>
    </>
  );
};
