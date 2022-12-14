import React, { useState } from "react";
import useOpciones from "../../hooks/useOpciones";
import { useNavigate } from "react-router-dom";
import { enviarEvaluacion } from "../../helpers/getPreguntas";
import './preguntas.css';
import totiHead from './icons/toti-decabeza.png'
import App from "./estrellas";
import ReactStars from "react-rating-stars-component";
import reactStars from "react-rating-stars-component";
const EvaluacionForm = () => {

  const { preguntaSeleccionada, setPreguntaSeleccionada, categoriaEvaluacion, setCategoriaEvaluacion } = useOpciones();
  const navigate = useNavigate();
  console.log(categoriaEvaluacion)
  const [evaluacion, setEvaluacion] = useState({
    pregunta: "",
    respuesta: "",
    correo: "",
  });

  const [active, setActive] = useState(false);

  console.log(preguntaSeleccionada)


  const { correo } = evaluacion;

  const handleInputChange = (e) => {
    setEvaluacion({ ...evaluacion, correo: e.target.value });
  };

  const handleClick = ({ target }) => {
    if (target.value === "NO") {
      setEvaluacion({
        pregunta: preguntaSeleccionada.pregunta,
        respuesta: target.value,
      });
      setActive(true);
      return;
    }
    setEvaluacion({ pregunta: preguntaSeleccionada.pregunta, respuesta: target.value });
    setActive(false);
  };

  const handleEnviar = async (e) => {
    e.preventDefault();

    await enviarEvaluacion({ ...evaluacion, categoria: categoriaEvaluacion })
    setPreguntaSeleccionada({})
    setCategoriaEvaluacion('')
    navigate("/inicio");
  };
  return (
    <>

      <form className="form-eva" action="" onSubmit={handleEnviar}>
        <p className="p-exp">Que tan conforme quedaste</p>
        <p className="p-lograste">segun tu experiencia previa</p>
        <ul>
          <div className="div-eva">
            <li className='lista-eva'>
              <div className="App">
              <ReactStars
                size={111}
                half={false}
                onChange={newRating => {
                  console.log(newRating);
                  <input onClick={(e) => handleClick(e)} value={newRating} readOnly />
                  
                }}
                />
            </div></li>
            <h1 className="estre">Nada conforme</h1>
            <h1 className="estre1">Bastante</h1>
            <h1 className="estre2">Muy conforme</h1>
          </div>
        </ul>

        <button className="btn-enviar" type="submit">Enviar</button>
      </form>
    </>
  );
};

export default EvaluacionForm;
