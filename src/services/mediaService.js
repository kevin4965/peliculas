import { axiosInstance } from "../helper/axios_config";

// Obtener lista de media
const getMedias = () => {
    return axiosInstance.get('media', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Crear un nuevo elemento de media
const crearMedia = (data) => {
    return axiosInstance.post('media', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Actualizar un elemento de media existente
const actualizarMedia = (mediaId, data) => {
    return axiosInstance.put(`media/${mediaId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getMedias, // Exporta como getMedias
    crearMedia,
    actualizarMedia
}
