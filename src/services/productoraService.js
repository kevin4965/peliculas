import { axiosInstance } from "../helper/axios_config";

// Obtener todas las productoras
const getProductoras = () => {
    return axiosInstance.get('productoras', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Crear una nueva productora
const crearProductora = (data) => {
    return axiosInstance.post('productoras', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Actualizar una productora existente
const actualizarProductora = (productoraId, data) => {
    return axiosInstance.put(`productoras/${productoraId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Asegúrate de exportar todas las funciones
export {
    getProductoras,
    crearProductora,
    actualizarProductora
}
