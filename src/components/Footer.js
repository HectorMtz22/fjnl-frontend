import React from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";

const Footer = () => {
  if (isBrowser) {
    return (
      <footer className="footer_desktop">
        <p>
          <a href="https://hectormtz22.github.io/">Made by: HMtzdev </a>
          &copy; 2020
        </p>
      </footer>
    );
  } else {
    return (
      <footer className="footer_mobile">
        <Link to="/">
          <i className="far fa-bell"></i>
          <h2>Noticias</h2>
        </Link>
        <Link to="/concerts">
          <i className="far fa-folder"></i>
          <h2>Conciertos</h2>
        </Link>
        <Link to="/gallery">
          <i className="far fa-image"></i>
          <h2>Fotos</h2>
        </Link>
        <Link to="/contact">
          <i className="far fa-user-circle"></i>
          <h2>Contacto</h2>
        </Link>
      </footer>
    );
  }
};

export default Footer;
