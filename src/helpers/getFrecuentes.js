import clienteAxios from "../axios";


export const obtenerFrecuentes = async () => {

    const { data } = await clienteAxios('/imagenes/');
    // console.log(data);
    const frecuentes = data.filter(imagen => imagen._id === "6410cbaa1ff45dca3098172a")
        .filter(({ active }) => {
            return active === true;
        });

    return frecuentes

}