import React, { useState, useEffect } from 'react';
import { getProductoras, crearProductora, actualizarProductora } from '../../services/productoraService'; 


import Swal from 'sweetalert2';
const moment = require('moment');

export const ProductorasView = () => {
  const [valoresForm, setValoresForm] = useState({});
  const [productoras, setProductoras] = useState([]);
  const { nombre = '', estado = '', slogan = '', descripcion = '' } = valoresForm;
  const [productoraSeleccionada, setProductoraSeleccionada] = useState(null);

  const listarProductoras = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const resp = await getProductoras();
      setProductoras(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
    listarProductoras();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  const handleCrearProductora = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();

      if (productoraSeleccionada) {
        // Si hay una productora seleccionada, actualiza
        await actualizarProductora(valoresForm, productoraSeleccionada);
        setProductoraSeleccionada(null); // Resetear
      } else {
        // Si no hay productora seleccionada, crea una nueva
        await crearProductora(valoresForm);
      }

      setValoresForm({ nombre: '', estado: '', slogan: '', descripcion: '' });
      listarProductoras();
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  const handleActualizarProductora = async (e, productora) => {
    e.preventDefault();
    setValoresForm({
      nombre: productora.nombre,
      estado: productora.estado,
      slogan: productora.slogan,
      descripcion: productora.descripcion,
    });
    setProductoraSeleccionada(productora._id);
  };

  return (
    <div className='container-fluid mt-4'>
      <form onSubmit={(e) => handleCrearProductora(e)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input required name='nombre' value={nombre} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select required name='estado' value={estado} className="form-select" onChange={(e) => handleOnChange(e)}>
                <option value="">--SELECCIONE--</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Slogan</label>
              <input required name='slogan' value={slogan} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea required name='descripcion' value={descripcion} className="form-control"
                onChange={(e) => handleOnChange(e)} />
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
            <th scope='col'>Slogan</th>
            <th scope='col'>Descripción</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productoras.length > 0 && productoras.map((productora, index) => {
              return (
                <tr key={productora._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{productora.nombre}</td>
                  <td>{productora.estado}</td>
                  <td>{productora.slogan}</td>
                  <td>{productora.descripcion}</td>
                  <td>{moment(productora.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
                  <td>{moment(productora.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
                  <td>
                    <button className='btn btn-success btn-sm me-2' onClick={(e) => handleActualizarProductora(e, productora)}>Actualizar</button>
                    <button className='btn btn-danger btn-sm'>Eliminar</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}



