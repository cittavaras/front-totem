import fondo from './img/frentesedeblur.png'
import React from 'react'
import './examen.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const Examenbus = () => {
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 30000);
    }, []);
    return (
        <>
            <img className='a' src={fondo} />
            <div className='Aaa'>
                <h1>aaaaa</h1>
            </div>
        </>
    )
    }