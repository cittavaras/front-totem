import './carrusel.css';

const CardImagenes = ({ imagen }) => {

  const { path } = imagen;
  return (
  <div className='img-carrusel'>
 
        <img src={path} alt="" />
  
  </div>
  )
}

export default CardImagenes