import styled from "styled-components";
import { Link } from "react-router-dom";

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 2;
`;

const Tour = ({ imagen }) => {

    const { path } = imagen;
    return (
        <Enlace className="enlaces" to="tour">
            <img src={path} alt="icono" />
            Tour Virtual
        </Enlace>
    )
}

export default Tour