import { axiosInstance } from "../helper/axios_config";

// Obtener todos los directores
const getDirectores = () => {
    return axiosInstance.get('director', {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

// Crear un nuevo director
const crearDirector = (data) => {
    return axiosInstance.post('director', data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

// Actualizar un director existente
const actualizarDirector = (directorId, data) => {
    return axiosInstance.put(`director/${directorId}`, data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

export {
    getDirectores, crearDirector, actualizarDirector
}
