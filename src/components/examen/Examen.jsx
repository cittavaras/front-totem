import fondo from './img/frentesedeblur.png'
import React from 'react'
import './examen.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import exam from './img/exam.png'
import { getExamen } from '../../helpers/getExamen';
import { useState } from 'react';
export const Examen = () => {
    const navigate  = useNavigate();
    const [rutExamen, setRutExamen] = useState([]);
    const getExamen = async ()=> {
        const newexamen = await getExamen (rutAlumno);
        setRutExamen(newexamen);
    }

    getExamen();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 30000);
    }, []);
    return (
        <>
            <img className='a' src={fondo} />
            <div className='Aaa'>
                <img className='b' src={exam}/>
                <h1 className='ac'>INGRESA tu RUT</h1>
                
            </div>
            
        </>
    )}