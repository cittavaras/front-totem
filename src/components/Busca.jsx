import styled from "styled-components";
import { Link } from "react-router-dom";

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 2;
`;

const Busca = ({ imagen }) => {

    const { path } = imagen;
    return (
        <Enlace className="enlaces" to="examen">
            <img src={path} alt="icono" />
            Búsca Tu Examen
        </Enlace>
    )
}

export default Busca