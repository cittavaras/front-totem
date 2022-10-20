
export const getExamen = async (rutExamen = '') => {

    const url = `https://totem.ivaras.cl:7002/api/exams/${rutExamen}`;
    const resp = await fetch(url);
    const result = await resp.json();

    console.log(result);

    return { result };
}