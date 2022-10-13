import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import useOpciones from "../../hooks/useOpciones";
import { useNavigate } from "react-router-dom";
import "./preguntas.css";

function App() {
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
  return (
    <div className="App">
     
      <ReactStars
        size={111}
        half={false}
        onChange={newRating => {
          console.log(newRating);

        }}
      />
    </div>
  );
}

export default App;