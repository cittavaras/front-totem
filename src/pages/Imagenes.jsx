import React, { useRef, useEffect, useState } from 'react';
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
  // var carouselRef = useRef(null);
  var videoRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  var i=-1;
  //var inter=60000;
  const [currentSlide, setCurrentSlide] = useState(0);
  //const [intervalz, setIntervalz] = useState(77056)
  const handleMoveNext = (newSlide) => {
    const nextIndex = newSlide + 1;
    //setCurrentSlide(nextIndex);
    if (carouselRef.current) {

      console.log("Next Index",nextIndex);
      setSelectedIndex(nextIndex);
     
    }
  };
  const handleSlideChange = (newSlide) => {
    //setCurrentSlide(newSlide);
    //WHY DOES IT WORK WITH THAT????
    setSelectedIndex(newSlide);
    clearTimeout(intervalRef.current);
    console.log("New Slide", newSlide);
    var video = document.querySelectorAll('.carousel video');;
    //setCurrentIndex(index);
    //var numSlides=1
    //console.log("the instance",carouselInstance)
    //if (carouselRef) {
    
      //numSlides = carouselRef.current.getSlides().length;
      //console.log("num_slides",numSlides)
      //console.log("test")
    //}
    //var retime=Math.max(2, Math.min(15, 21 - numSlides))
    //console.log("retime",retime)
    if (video && video.length>0) {
      //console.log("video id",video[1].id)
      if (video[1].id == newSlide) {
        //intervalRef.current = setTimeout(() =>{ setSelectedIndex(newSlide+1);},(video[1].duration*1000));
        //console.log("vidDuration",video[1].duration*1000);
        video[1].play();
        
      } else {
        
        intervalRef.current = setTimeout(() =>{ handleMoveNext(newSlide)},(6000));
        video[1].pause();
        video[1].currentTime=0;
        
      }
    }else{intervalRef.current = setTimeout(() =>{ handleMoveNext(newSlide)},(6000));}
  };
  
  const handleVideoEnd = () => {
    setSelectedIndex(selectedIndex+1)
    console.log("New Index",selectedIndex+1);
  };
  useEffect(() => {
    intervalRef.current = setTimeout(() =>{ handleMoveNext(0)},(6000));
    console.log('Component mounted!');
  }, []);

  const [imagenes, setimagenes] = useState([])

  useEffect(() => {
    
    
    const cargarImagenes = async () => {
      const resultado = await obtenerImagenes()
      setimagenes(resultado)
    }
    cargarImagenes();

    const interval = setInterval(() => {
      cargarImagenes();
    }, 6000);

    return () => clearInterval(interval);
  }, [])
  return (
    <>
      <Div className='div-carrusel'>
        <Head />
        <div className='centrar-carrusel'>
          <Carousel   ref={carouselRef} autoPlay={false} infiniteLoop={true} showIndicators={true} showArrows={false} showStatus={false} showThumbs={false} onChange={handleSlideChange} selectedItem={selectedIndex}>
            {imagenes.length > 0 &&
              imagenes.filter((imagen) => {
                return !(imagen._id === "6410caf71ff45dca30981717" || imagen._id === "6410cb5d1ff45dca3098171f" || imagen._id === "6410cb8d1ff45dca30981724" || imagen._id === "6410cbaa1ff45dca3098172a" || imagen._id === "6410cbd71ff45dca30981730");
              }).map((imagen) => {i=i+1; 
                return (
                  <CardImagenes key={imagen._id} imagen={imagen} ref={videoRef} carruselID={i} cs={selectedIndex} handleVideoEnd={handleVideoEnd} />
                )
              })
            }
          </Carousel>
        </div>

        <div>
          <Link className='btn-border' to='inicio' />
          <Button className='btn-inicio' to='inicio' >PRESIONAR AQUÍ PARA COMENZAR</Button>
        </div>
        <div className='radio-div'></div>
      </Div>
      <Footer />

    </>
  )
}


export default Imagenes