
export const getExamen = async (rutAlumnos = '') => {

    const url = `https://totem.ivaras.cl:7002/api/exams/${rutAlumnos}`;
    const resp = await fetch(url);
    const result = await resp.json();

    // console.log(result);

    return { result };
}