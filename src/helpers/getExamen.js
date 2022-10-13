
export const getAlumno = async (rutAlumno = '') => {

    const url = `https://totem.ivaras.cl:7002/api/alumnos/${rutAlumno}`;
    const resp = await fetch(url);
    const { alumno, examen } = await resp.json();
    const respAlumno = {
        Nombre_Alumno: alumno[0].Nombre_Alumno,
        Apellido_Paterno_Alumno: alumno[0].Apellido_Paterno_Alumno,
        Apellido_Materno_Alumno: alumno[0].Apellido_Materno_Alumno,
        FECHA_EXAMENES: examen[0].FECHA_EXAMENES,

    }
    console.log(respAlumno, examen)
    return { respAlumno, examen };
}