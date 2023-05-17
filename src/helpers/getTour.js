import clienteAxios from "../axios";


export const obtenerTour = async () => {

    const { data } = await clienteAxios('/imagenes/');
    // console.log(data);
    const tour = data.filter(imagen => imagen._id === "6410cbd71ff45dca30981730")
        .filter(({ active }) => {
            return active === true;
        });

    return tour

}