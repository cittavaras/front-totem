import clienteAxios from "../axios";


export const obtenerBusca = async () => {

    const { data } = await clienteAxios('/imagenes/');
    // console.log(data);
    const busca = data.filter(imagen => imagen._id === "6410cb5d1ff45dca3098171f")
        .filter(({ active }) => {
            return active === true;
        });

    return busca

}