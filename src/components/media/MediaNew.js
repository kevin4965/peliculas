import React, { useState, useEffect } from 'react';
import { crearMedia } from '../../services/mediaService';
import Swal from 'sweetalert2';

export const MediaNew = ({ handleOpenModal, listarMedias }) => {

  const [valoresForm, setValoresForm] = useState({
    serial: '',
    titulo: '',
    sinopsis: '',
    urlPelicula: '',
    portadaUrl: '',
    anioEstreno: '',
    generoPrincipal: '',
    directorPrincipal: '',
    productora: '',
    tipo: ''
  });

  const {
    serial,
    titulo,
    sinopsis,
    urlPelicula,
    portadaUrl,
    anioEstreno,
    generoPrincipal,
    directorPrincipal,
    productora,
    tipo
  } = valoresForm;

  const handleOnChange = (e) => {
    setValoresForm({
      ...valoresForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCrearMedia = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Guardando...'
      });
      Swal.showLoading();

      await crearMedia(valoresForm);

      Swal.fire({
        icon: 'success',
        title: 'Media creada con éxito',
        showConfirmButton: false,
        timer: 1500
      });

      setValoresForm({
        serial: '',
        titulo: '',
        sinopsis: '',
        urlPelicula: '',
        portadaUrl: '',
        anioEstreno: '',
        generoPrincipal: '',
        directorPrincipal: '',
        productora: '',
        tipo: ''
      });

      listarMedias();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al crear la media',
        text: 'Por favor intenta nuevamente.'
      });
    }
  };

  return (
    <div className="container-fluid mt-4">
      <form onSubmit={handleCrearMedia}>
        {/* Aquí continúa el formulario */}
        <button className="btn btn-primary mb-3">Guardar</button>
      </form>
    </div>
  );
};
