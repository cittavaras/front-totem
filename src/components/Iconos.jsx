import styled from "styled-components";
import { Link } from "react-router-dom";

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 2;
`;

const Iconos = ({ imagen }) => {

  const { path } = imagen;
  return ( 
    <Enlace className="enlaces" to="encuentratuprofe">
          <img src={path} alt="icono" />
          Encuentra tu Profe
    </Enlace>
  )
}

export default Iconos