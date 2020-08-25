import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState("");

  useEffect(() => {
    function listener() {
      let scroll = window.scrollY;
      scroll > 200 ? setScrolled(" header_scrolled") : setScrolled("");
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
          <a href="/">
            <img src="icon.png" alt="LOGO" />
          </a>
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
              <a href="/concerts">Conciertos</a>
            </li>
            <li>
              <a href="/gallery">Fotos</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </aside>
        </nav>
      </header>
    );
  }
};

export default Header;
