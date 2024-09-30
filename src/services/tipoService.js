import { axiosInstance } from "../helper/axios_config";

// Obtener todos los tipos de equipo
const getTipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

// Crear un nuevo tipo de equipo
const crearTipo = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

// Actualizar un tipo de equipo existente
const actualizarTipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });
}

export {
    getTipos, crearTipo, actualizarTipo
}
