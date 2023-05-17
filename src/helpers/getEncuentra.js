import clienteAxios from "../axios";


export const obtenerEncuentra = async () => {

    const { data } = await clienteAxios('/imagenes/');
    // console.log(data);
    const imagenes = data.filter(imagen => imagen._id === "6410cb8d1ff45dca30981724")
        .filter(({ active }) => {
            return active === true;
        });

    return imagenes

}