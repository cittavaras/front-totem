import './carrusel.css';
import React, { useEffect } from 'react';

const CardImagenes = ({ imagen, carruselID, cs, handleVideoEnd}) => {


  const { path } = imagen;
  return (
  <div className='img-carrusel'>
    {!path.endsWith('.mp4') ?(
    <img src={path} alt="" />):(
      
      <video autoplay id={carruselID} src={path} alt="" width="100%" height="100%" muted={carruselID !== cs} preload="auto" playsinline  onEnded={handleVideoEnd}/>
      
    )
    }
  </div>
  )
}

export default CardImagenes