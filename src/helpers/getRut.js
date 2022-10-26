
export const getAlumno = async (rutAlumnos = '') => {

    console.log(rutAlumnos)
    const url = `https://totem.ivaras.cl:7002/api/alumnos/${rutAlumnos}`;
    const resp = await fetch(url);
    console.log(resp)
    const { alumno, docente } = await resp.json();
    const respAlumno = {
        Nombre_Alumno: alumno[0].Nombre_Alumno,
        Apellido_Paterno_Alumno: alumno[0].Apellido_Paterno_Alumno,
        Apellido_Materno_Alumno: alumno[0].Apellido_Materno_Alumno
    }
    console.log(respAlumno, docente)
    return { respAlumno, docente };
}