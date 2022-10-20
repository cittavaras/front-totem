import fondo from './img/frentesedeblur.png';
import './examen.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import human from './img/human.png'
import { Examen } from './Examen';

export const Buscaexamen = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/");
    //     }, 30000);
    // }, []);

    return (
        <>
            <img className='a' src={fondo} />
            <div className='Aaa'>
                <img className='c' src={human} />
                <h1 className='nom'>aaa</h1>
                <h1 className='ac'>Selecciona el exámen que necesites encontrar:</h1>

            </div>

        </>
    )
}