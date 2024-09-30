import React, { useState, useEffect } from 'react';
import { getGeneros, crearGenero, actualizarGenero } from '../../services/generoService';
import Swal from 'sweetalert2';
import moment from 'moment';

export const GenerosView = () => {
  const [valoresForm, setValoresForm] = useState({ nombre: '', estado: '' });
  const [generos, setGeneros] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState(null);

  // Función para listar los géneros
  const listarGeneros = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await getGeneros();
      setGeneros(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'No se pudo cargar los géneros.', 'error');
      Swal.close();
    }
  };

  useEffect(() => {
    listarGeneros();
  }, []);

  // Manejo de cambios en el formulario
  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  // Crear o actualizar género
  const handleCrearGenero = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();

      if (generoSeleccionado) {
        await actualizarGenero(valoresForm, generoSeleccionado);
        setGeneroSeleccionado(null);
      } else {
        await crearGenero(valoresForm);
      }

      setValoresForm({ nombre: '', estado: '' });
      listarGeneros();
      Swal.fire('Éxito', 'Género guardado correctamente.', 'success');
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'No se pudo guardar el género.', 'error');
      Swal.close();
    }
  };

  // Manejo de la selección del género para actualizar
  const handleActualizarGenero = (genero) => {
    setValoresForm({ nombre: genero.nombre, estado: genero.estado });
    setGeneroSeleccionado(genero._id);
  };

  return (
    <div className='container-fluid mt-4'>
      <form onSubmit={handleCrearGenero}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input 
                required 
                name='nombre' 
                value={valoresForm.nombre} 
                type="text" 
                className="form-control"
                onChange={handleOnChange} 
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select 
                required 
                name='estado' 
                value={valoresForm.estado} 
                className="form-select" 
                onChange={handleOnChange}
              >
                <option value="">--SELECCIONE--</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mb-3">Guardar</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope='row'>#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            generos.length > 0 && generos.map((genero, index) => (
              <tr key={genero._id}>
                <th scope='row'>{index + 1}</th>
                <td>{genero.nombre}</td>
                <td>{genero.estado}</td>
                <td>{moment(genero.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
                <td>{moment(genero.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
                <td>
                  <button 
                    className='btn btn-success btn-sm me-2' 
                    onClick={() => handleActualizarGenero(genero)}
                  >
                    Actualizar
                  </button>
                  <button className='btn btn-danger btn-sm'>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
