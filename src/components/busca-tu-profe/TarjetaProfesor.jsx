
import './findStyles.css';

export const TarjetaProfesor = ({ Instruct_den, Nom_Asignatura, HorInic, Final }) => {
    return (
        <div className='contenedor'>
            <li className='lista-contenedor'>
                <h1 className='titulo-docente-tarjeta'>{Instruct_den}</h1>
                <h2 className='titulo-asignatura'>{Nom_Asignatura}</h2>
                <h1 className='hora'>{HorInic} </h1>
                <h1 className='horas'>{Final} </h1>     
                <h2 className='l'>-</h2>       
            </li>
        </div>
    )
}