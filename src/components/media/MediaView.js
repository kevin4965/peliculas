import React, { useEffect, useState } from "react";
import { getMedias } from "../../services/mediaService"; // Ajusta la ruta según tu estructura de carpetas
import { MediaCard } from "./MediaCard.js"; // Cambia el nombre según el nuevo componente
import { MediaNew } from "./MediaNew"; // Cambia el nombre según el nuevo componente

export const MediaView = () => {
  
  const [medias, setMedias] = useState([]);
  const [openModal, setOpenModal] = useState(false); 

  const listarMedias = async () => {
    try {
      const { data } = await getMedias(); // Cambia a la función que obtenga los medios
      console.log(data);
      setMedias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMedias();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          medias.map((media) => {
            return <MediaCard key={media._id} media={media} />; // Cambia a MediaCard
          })
        }
      </div>
      {
        openModal ? (
          <MediaNew 
            handleOpenModal={handleOpenModal}
            listarMedias={listarMedias} // Actualiza la función para listar medios
          />
        ) : (
          <button type="button" className="btn btn-primary agr" onClick={handleOpenModal}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )
      }
    </div>
  );
};


