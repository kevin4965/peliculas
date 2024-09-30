import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const MediaCard = (props) => {

  const { media } = props;

  return (
    <div className="col">
      <div className="card">
        <img src={media.portadaUrl} className="card-img-top" alt="Imagen de Portada" />
        <div className="card-body">
          <h5 className="card-title">{media.titulo}</h5>
          <hr />
          <p className="card-text"><strong>Serial:</strong> {media.serial}</p>
          <p className="card-text"><strong>Sinopsis:</strong> {media.sinopsis}</p>
          <p className="card-text">
            <strong>URL de la Película:</strong> 
            <a href={media.urlPelicula} target="_blank" rel="noopener noreferrer">
              {media.urlPelicula}
            </a>
          </p>
          <p className="card-text"><strong>Año de Estreno:</strong> {media.anioEstreno}</p>
          <p className="card-text"><strong>Género Principal:</strong> {media.generoPrincipal}</p>
          <p className="card-text"><strong>Director Principal:</strong> {media.directorPrincipal}</p>
          <p className="card-text"><strong>Productora:</strong> {media.productora}</p>
          <p className="card-text"><strong>Tipo:</strong> {media.tipo}</p>
          <p className="card-text">
            <strong>Fecha de Creación:</strong> {moment(media.fechaCreacion).format('DD-MM-YYYY HH:mm')}
          </p>
          <p className="card-text">
            <strong>Fecha de Actualización:</strong> {moment(media.fechaActualizacion).format('DD-MM-YYYY HH:mm')}
          </p>
          <p className="card-text">
            <Link to={`/media/${media.id}`}>Ver más...</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

