import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMediaPorId, actualizarMedia } from '../../services/mediaService'; // Cambia el nombre del servicio
import { Swal } from 'sweetalert2';

export const MediaUpdate = () => {
    const { mediaId = '' } = useParams();
    const [media, setMedia] = useState();
    const [valoresForm, setValoresForm] = useState({});
    const { serial = '', titulo = '', sinopsis = '', url = '', 
            imagen = '', fechaCreacion = '', fechaActualizacion = '', 
            añoEstreno = '', generoPrincipal = '', directorPrincipal = '', 
            productora = '', tipo = '' } = valoresForm;

    const getMedia = async () => {
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await getMediaPorId(mediaId);
            console.log(data);
            setMedia(data);
            setValoresForm({
                serial: data.serial,
                titulo: data.titulo,
                sinopsis: data.sinopsis,
                url: data.url,
                imagen: data.imagen,
                fechaCreacion: data.fechaCreacion,
                fechaActualizacion: data.fechaActualizacion,
                añoEstreno: data.añoEstreno,
                generoPrincipal: data.generoPrincipal,
                directorPrincipal: data.directorPrincipal,
                productora: data.productora,
                tipo: data.tipo,
            });
            Swal.close();
        } catch (error) {
            console.log(error);
            Swal.close();
        }
    };

    useEffect(() => {
        getMedia();
    }, [mediaId]);

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        const mediaActualizado = {
            serial,
            titulo,
            sinopsis,
            url,
            imagen,
            fechaCreacion,
            fechaActualizacion,
            añoEstreno,
            generoPrincipal,
            directorPrincipal,
            productora,
            tipo,
        };

        console.log(mediaActualizado);

        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await actualizarMedia(mediaId, mediaActualizado);
            Swal.close();
            Swal.fire('Éxito', 'Media actualizado correctamente', 'success');
        } catch (error) {
            console.log(error);
            Swal.close();
            let mensaje;
            if (error && error.response && error.response.data) {
                mensaje = error.response.data;
            } else {
                mensaje = "Ocurrió un error, por favor intente de nuevo";
            }
            Swal.fire('Error', mensaje, 'error');
        }
    };

    return (
        <div className='container-fluid mt-3 mb-2'>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>Actualizar Media</h5>
                </div>  
                <div className='card-body'>
                    <form onSubmit={handleOnSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Serial</label>
                                    <input type="text" name='serial' 
                                        value={serial}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Título</label>
                                    <input type="text" name='titulo' 
                                        value={titulo}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className="form-label">Sinopsis</label>
                            <textarea name='sinopsis' 
                                value={sinopsis}
                                onChange={handleOnChange}
                                required 
                                className='form-control'></textarea>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">URL de la Película</label>
                                    <input type="url" name='url' 
                                        value={url}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Imagen de Portada</label>
                                    <input type="text" name='imagen' 
                                        value={imagen}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="mb-3">
                                    <label className="form-label">Fecha de Creación</label>
                                    <input type="date" name='fechaCreacion' 
                                        value={fechaCreacion}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="mb-3">
                                    <label className="form-label">Fecha de Actualización</label>
                                    <input type="date" name='fechaActualizacion' 
                                        value={fechaActualizacion}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="mb-3">
                                    <label className="form-label">Año de Estreno</label>
                                    <input type="number" name='añoEstreno' 
                                        value={añoEstreno}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Género Principal</label>
                                    <input type="text" name='generoPrincipal' 
                                        value={generoPrincipal}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Director Principal</label>
                                    <input type="text" name='directorPrincipal' 
                                        value={directorPrincipal}
                                        onChange={handleOnChange}
                                        required 
                                        className='form-control' />
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className="form-label">Productora</label>
                            <input type="text" name='productora' 
                                value={productora}
                                onChange={handleOnChange}
                                required 
                                className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label className="form-label">Tipo</label>
                            <input type="text" name='tipo' 
                                value={tipo}
                                onChange={handleOnChange}
                                required 
                                className='form-control' />
                        </div>

                        <button className="btn btn-primary">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
