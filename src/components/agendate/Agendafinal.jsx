import React from 'react'
import "./agenda.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import fondo from "./icons/background.png";

export const Agendafinal = () => {
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 9000000);
  }, []);

  return (
    <>
      <div>

        <img className='background' src={fondo} />
        <div className="letra-color">
          <h1 className="title-agenda">Descubre una nueva manera de agendar los </h1>
          <h1 className="title-servicios">servicios que te ofrece Antonio Varas </h1>
        </div>

      </div>
    </>
  );
};
