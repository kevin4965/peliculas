import { axiosInstance } from "../helper/axios-config";

const getMarcas = () => {
    return axiosInstance.get('marca', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const crearMarca = (data) => {
    return axiosInstance.post('marca', data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const actualizarMarca = (data, marcaId) => {
    return axiosInstance.put(`marca/${marcaId}`, data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getMarcas, crearMarca, actualizarMarca
}