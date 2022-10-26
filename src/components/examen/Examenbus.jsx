import fondo from './img/frentesedeblur.png';
import './examen.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TarjetaExamen } from './TarjetaExamen';
import useOpciones from '../../hooks/useOpciones';
import { useEffect } from 'react';
import { getAlumno } from '../../helpers/getRut';
import { useState } from 'react';



export const Examenbus = () => {

    const { rutExamen, setRutExamen, rutAlumnos } = useOpciones();

    const [title, setTitle] = useState({ Nombre_alumno: '', Apellido_Paterno: '', Apellido_Materno: '' })
    const nav = useNavigate();

    const handleClick = (e) => {
        setRutExamen(e)
        nav('buscaexamen')
    }
    useEffect(() => {
        getAlumno(rutAlumnos).then((respAlumno) => {
            setTitle({
                Nombre_Alumno: respAlumno.Nombre_Alumno,
                Apellido_Paterno_Alumno: respAlumno.Apellido_Paterno_Alumno,
                Apellido_Materno_Alumno: respAlumno.Apellido_Materno_Alumno
            })
        })
        console.log('carga de examenes')
        console.log(rutExamen,title, rutAlumnos)
        return () => {
            setRutExamen([''])
        }
    }, [rutExamen])

   
    return (
        <Cont >
            <div className='container'>
                <img />
                <h1>{`${title.Nombre_Alumno} ${title.Apellido_Paterno_Alumno} ${title.Apellido_Materno_Alumno}`}</h1>
                <ol className='d-flex flex-column justify-content-center'>
                    <h3 className='seleexamen'>Selecciona el exámen que necesites encontrar:</h3>
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