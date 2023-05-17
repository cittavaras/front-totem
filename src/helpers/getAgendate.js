import clienteAxios from "../axios";


export const obtenerAgendate = async () => {

    const { data } = await clienteAxios('/imagenes/');
    // console.log(data);
    const agendate = data.filter(imagen => imagen._id === "6410caf71ff45dca30981717")
        .filter(({ active }) => {
            return active === true;
        });

    return agendate

}