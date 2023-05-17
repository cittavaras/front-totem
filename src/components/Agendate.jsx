import styled from "styled-components";
import { Link } from "react-router-dom";

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 2;
`;

const Agendate = ({ imagen }) => {

    const { path } = imagen;
    return (
        <Enlace className="enlaces" to="agendate">
            <img src={path} alt="icono" />
            Agendate con Varas
        </Enlace>
    )
}

export default Agendate