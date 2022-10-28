

export const TarjetaExamen = ({ NOMBRE_DE_ASIGNATURA, }) => {
    return (
        <div className='ContainerExamen'>
            <li className='Container-Examen'>
               <h1 className='titulo-Examen '>{NOMBRE_DE_ASIGNATURA}</h1>
            </li>
        </div>
    )
}
