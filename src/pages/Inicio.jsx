import styled from "styled-components";
import { Link } from "react-router-dom";
import fondo from '../pages/image/FrenteAVaras.png'
import tour from '../pages/image/TOURVIRTUAL.png'
import Toti from "../components/ui/Toti";
import { crearClick } from "../helpers/getClicks";
import { useEffect, useState } from "react";
import Iconos from '../components/Iconos';
import { obtenerEncuentra } from "../helpers/getEncuentra";
import Agendate from "../components/Agendate";
import { obtenerAgendate } from "../helpers/getAgendate";
import Busca from "../components/Busca";
import { obtenerBusca } from "../helpers/getBusca";
import Frecuentes from "../components/Frecuentes";
import { obtenerFrecuentes } from "../helpers/getFrecuentes";
import Tour from "../components/Tour"
import { obtenerTour } from "../helpers/getTour";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
 background-size: 1080px 1920px;
 background-position: center;

`;

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 2;
`;

const P = styled.p`
  font-size: 3rem;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;

const C = styled.p`
 font-family: sans-serif;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const Inicio = () => {

  const [imagenes, setimagenes] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerEncuentra()
      setimagenes(resultado)
    }
    cargarImagenes();

  }, [])

  const [agendate, setagendate] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerAgendate()
      setagendate(resultado)
    }
    cargarImagenes();

  }, [])

  const [busca, setbusca] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerBusca()
      setbusca(resultado)
    }
    cargarImagenes();

  }, [])

  const [frecuentes, setfrecuentes] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerFrecuentes()
      setfrecuentes(resultado)
    }
    cargarImagenes();

  }, [])

  const [tour, settour] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerTour()
      settour(resultado)
    }
    cargarImagenes();

  }, [])

  const [tourQr, setTourQr] = useState(false);

  if (tourQr) {
    setTimeout(() => { setTourQr(!tourQr); }, 60000)
  }

  const onClickTour = () => {


    setTourQr(!tourQr);
  }


  const vistaInicio = {
    idVista: 1,
    nombreVista: "VISTA INICIO"
  };


  useEffect(() => {
    crearClick(vistaInicio);
  }, []);

  return (
    <>
      <Container className="">
        <P className="p-inicio">¿En qué te puedo ayudar?</P>
        <C className="sub-title">Selecciona una categoría:</C>
        <Div className="marco">
          <ul className="listaEnlace">
            {frecuentes.map(imagen => (
              <li>
                <Frecuentes key={imagen._id} imagen={imagen} />
              </li>
            ))}
            {imagenes.map(imagen => (
              <li>
                <Iconos key={imagen._id} imagen={imagen} />
              </li>
            ))}
            {tour.map(imagen => (
              <li>
                <Tour key={imagen._id} imagen={imagen} />
              </li>
            ))}
            {agendate.map(imagen => (
              <li>
                <Agendate key={imagen._id} imagen={imagen} />
              </li>
            ))}
            {busca.map(imagen => (
              <li>
                <Busca key={imagen._id} imagen={imagen} />
              </li>
            ))}
          </ul>
        </Div>
        <Toti />
      </Container>
    </>

  );
};

export default Inicio;
