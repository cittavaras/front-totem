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
        const dia = datetime.toLocaleDateString('es-MX', {weekday:'long'}) 
        const fecha = datetime.getDate();
        const mes = datetime.toLocaleDateString('es-MX', {month:'short'}) 


        return `${hour}:${minute} ${dia} ${fecha} ${mes}`;
    };

    useEffect(() => {
        const cl = setInterval(() => {
            span.current.innerHTML = `${time()}`;
        }, 1000);
        return () => clearInterval(cl);
    }, [])

    const weather = useWeather();

    return (
        <div className="weather">
            <span className="timeLocation" ref={span}>
                {time()}
            </span>

            <Span className="">{weather.temp_c}°<FontAwesomeIcon icon={faCloudSun} /></Span>

        </div>
    )
}


const Span = styled.span`
display: flex:  
`;
