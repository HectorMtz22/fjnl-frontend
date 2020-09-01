import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState("");

  useEffect(() => {
    function listener() {
      let scroll = window.scrollY;
      scroll > 0 ? setScrolled(" header_scrolled") : setScrolled("");
    }
    window.addEventListener("scroll", listener, { passive: true });
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  if (isMobile) {
    return (
      <header className="header_mobile">
        <Link to="/">
          <img src="/icon.png" alt="Logo" />
        </Link>
        <h2>Filarmónica Juvenil de Nuevo León</h2>
      </header>
    );
  } else {
    return (
      <header className={`header_desktop ${scrolled}`}>
        <div>
          <Link to="/">
            <img src="/icon.png" alt="Logo" />
          </Link>
          <h1>
            Filarmónica Juvenil <br /> de Nuevo León
          </h1>
        </div>
        <nav>
          <button>
            <h2>Menú</h2>
          </button>
          <aside className="navhidden">
            <li>
              <Link to="/concerts">Conciertos</Link>
            </li>
            <li>
              <Link to="/gallery">Fotos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </aside>
        </nav>
      </header>
    );
  }
};

export default Header;
