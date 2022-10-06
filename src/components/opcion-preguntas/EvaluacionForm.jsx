import React, { useState } from "react";
import useOpciones from "../../hooks/useOpciones";
import { useNavigate } from "react-router-dom";
import { enviarEvaluacion } from "../../helpers/getPreguntas";
import './preguntas.css';
import { BiSmile } from "react-icons/bi";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import totiHead from './icons/toti-decabeza.png'
import App from "./estrellas";

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
      <img className="totiHead" src={totiHead} />
      <form className="form-eva" action="" onSubmit={handleEnviar}>
        <p className="p-exp">Que tan conforme quedaste</p>
        <p className="p-lograste">segun tu experiencia previa</p>
        <ul>
          <div className="div-eva">
            <App></App>
          </div>
        </ul>

        <button className="btn-enviar" type="submit">Enviar</button>
      </form>
    </>
  );
};

export default EvaluacionForm;
