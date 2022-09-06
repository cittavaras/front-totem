import React from "react";
import styled from "styled-components";
import './preguntas.css';



const CardResultado = ({ resultado, handleClick, respuestaF , active}) => {
  // console.log(resultado)
  // const {pregunta} = resultado;
  return (
    <>
      {resultado.length > 0 &&
        resultado.map(({ pregunta, respuesta, _id }) => {
          return (
            <div key={_id}>
              <p>{pregunta}</p>
              <button onClick={(e) => handleClick({ _id, pregunta }, e)}>
                {active && respuestaF.id === _id ? <p>Cerrar</p> : <p>Ver</p>}
              </button>
              {active && <p>{respuestaF.id === _id ? respuesta : ""}</p>}
            </div>
          );
        })}
    </>
  );
};


export default CardResultado;
