
export const getExamen = async (rutAlumno = '194064942') => {

    const url = `https://totem.ivaras.cl:7002/api/exams/${rutAlumno}`;
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
   return{result};
}