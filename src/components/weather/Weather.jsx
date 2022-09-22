import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import "./weather.css";
import { useWeather } from "../../hooks/useWeather";
import styled from "styled-components";

export const Weather = () => {


    const span = useRef();

    const time = () => {
        const datetime = new Date();
        let hour = datetime.getHours();
        const minute = ('0' + datetime.getMinutes()).slice(-2);

        const horas = `${hour}:${minute}`;


        return horas;
    };
    const fechas = () => {
        const fecha = new Date();
        const day = fecha.toLocaleDateString('es-MX', { weekday: 'short' })
        const num = fecha.getDate();
        const mes = fecha.toLocaleDateString('es-MX', { month: 'short' })


        return `${day} ${num} ${mes}`;
    }

    useEffect(() => {
        const cl = setInterval(() => {
            span.current.innerHTML = `${fechas()}`;
        }, 1000);
        return () => clearInterval(cl);
    }, [])

    const weather = useWeather();

    return (
        <div className="weather">
            <span className="timeLocation" ref={span}>
                {time()}
            </span>
            <span className="dateLocation" ref={span}>
                {fechas()}
            </span>
            <span className='clima'>{weather.temp_c}°<FontAwesomeIcon icon={faCloudSun} /></span>

        </div>
    )
}
