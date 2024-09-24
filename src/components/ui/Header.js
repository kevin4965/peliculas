import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Peliculas</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" activeClassName='active' to="/generos">
                Genero
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName='active' to="/directores">
                Director
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName='active' to="/productoras">
                Productora
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName='active' to="/tipos">
                Tipo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName='active' to="/media">
                Media
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

