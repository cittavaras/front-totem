import React, { useEffect, useState } from 'react';
import CardImagenes from '../components/Imagenes_carrusel/CardImagenes';
import { obtenerImagenes } from '../helpers/getImagenes'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Imagenes_carrusel/carrusel.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/ui/Footer';
import { Head } from '../components/ui/Head'
import fondo from './image/FrenteAVaras.png'


const Button = styled(Link)`
/* margin-bottom: 3rem; */
`;

const Div = styled.div`
    background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
  margin-top: -11rem;
 background-size: 1080px 1920px;
 background-position: center;
`;


const Imagenes = () => {

  const [imagenes, setimagenes] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerImagenes()
      setimagenes(resultado)
    }
    cargarImagenes();

    const interval = setInterval(() => {
      cargarImagenes();
    }, 60000);

    return () => clearInterval(interval);
  }, [])
  return (
    <>
      <Div className='div-carrusel'>
        <Head />
        <div className='centrar-carrusel'>
          <Carousel autoPlay={true} infiniteLoop={true} interval={6000} showIndicators={true} showArrows={false} showStatus={false} showThumbs={false}   >
            {imagenes.length > 0 &&
              imagenes.map((imagen) => {
                return (
                  <CardImagenes key={imagen._id} imagen={imagen} />


                )
              })
            }

          </Carousel>
        </div>

        <div className='borde-div'>
          <Button className='btn-inicio' to='inicio' >COMENZAR</Button>
        </div>
        <div className='radio-div'></div>
      </Div>
      <Footer />

    </>
  )
}


export default Imagenes