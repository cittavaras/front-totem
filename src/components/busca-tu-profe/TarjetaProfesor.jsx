
import './findStyles.css';

export const TarjetaProfesor = ({ nombre_docente, Nom_Asignatura, HorInic, Final }) => {
    return (
        <div className='contenedor'>
            <li className='lista-contenedor'>
                <h1 className='titulo-docente-tarjeta'>{nombre_docente}</h1>
                <h2 className='titulo-asignatura'>{Nom_Asignatura}</h2>
                <h1 className='hora'>{HorInic} </h1>
                <h1 className='horas'>{Final} </h1>     
                <h2 className='l'>-</h2>       
            </li>
        </div>
    )
}