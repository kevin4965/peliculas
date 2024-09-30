import { axiosInstance } from "../helper/axios_config";

// Obtener géneros
const getGeneros = () => {
    return axiosInstance.get('genero', {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

// Crear un nuevo género
const crearGenero = (data) => {
    return axiosInstance.post('genero', data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

// Actualizar un género existente
const actualizarGenero = (data, generoId) => {
    return axiosInstance.put(`genero/${generoId}`, data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

export {
    getGeneros, crearGenero, actualizarGenero
}
