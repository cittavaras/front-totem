import fondo from './img/frentesedeblur.png';
import './examen.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TarjetaExamen } from './TarjetaExamen';
import useOpciones from '../../hooks/useOpciones';
import { useEffect } from 'react';



export const Examenbus = () => {

    const { rutExamen, setRutExamen, tituloAlumno } = useOpciones();

    
    const nav = useNavigate();
    const handleClick = (e) => {
        setRutExamen(e)
        nav('buscaexamen')
    }
    useEffect(() => {
        console.log('carga de examenes')
        console.log(tituloAlumno)
        return () => {
            setRutExamen([''])
        }
    }, [rutExamen])

    console.log(rutExamen)
    return (
        <Cont >
            <div className='container'>
                <img />
                <h1>{`${tituloAlumno.Nombre_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno}`}</h1>
                <ol className='d-flex flex-column justify-content-center'>
                    <h3>Selecciona el exámen que necesites encontrar:</h3>
                    {rutExamen.length > 0 ?
                        rutExamen.map((rutExamen, index) => (
                            <div key={index + 1} onClick={(e) => handleClick({ ...rutExamen }, e)}>
                                <TarjetaExamen {...rutExamen} />
                                
                            </div>
                        )) : (<p>NO TIENES EXAMENES</p>)
                    }
                </ol>
            </div>
        </Cont>
    )
}
const Cont = styled.div` 
  background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
  background-size: 1080px 1920px;
  background-position: center; 
  `;