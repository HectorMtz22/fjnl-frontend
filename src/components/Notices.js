import React from "react";
import { Link } from "react-router-dom";
//import {isMobile} from 'react-device-detect';
export default function Notices() {
  return (
    <main className="main">
      <main className="banner">
        <h1>Nueva Normalidad</h1>
        <main className="img_scrolling">
          <img src="/img/notices/banner2.jpg" className="img_slides" alt="" />
          <img src="/img/notices/banner1.jpg" className="img_slides" alt="" />
          <img src="/img/notices/banner3.jpg" className="img_slides" alt="" />
          <img src="/img/notices/banner4.jpg" className="img_slides" alt="" />
          <img src="/img/notices/banner5.jpg" className="img_slides" alt="" />
        </main>
      </main>
      <main className="body">
        <main className="about">
          <p>
            La Filarmónica Juvenil de Nuevo León es una Orquesta formada por
            jóvenes talento unidos por la pasión de hacer música. Con más de 30
            años de trayectoria, la Filarmónica se ha convertido en el principal
            semillero cultural de Nuevo León; nuestro orgullo es fomentar la
            cultura día con día, promoviendo la educación musical y ejerciendo
            valores universales.
          </p>
        </main>
        <section className="main-notices">
          <main className="notice">
            {/* eslint-disable-next-line */}
            <a id="notices">
              <h1>Noticias</h1>
            </a>
          </main>
          <main className="notice notice-1">
            <a
              href="https://www.facebook.com/FilarmonicaJuvenilDeNuevoLeon17/photos/a.620665751604477/1069597060044675/?type=3&theater"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/notices/200101.jpg" alt="" />
            </a>
          </main>
          <main className="notice">
            <a
              href="https://www.facebook.com/FilarmonicaJuvenilDeNuevoLeon17/photos/a.620665751604477/1051302215207493/?type=3&theater"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/notices/191213.jpg" alt="" />
            </a>
          </main>
          <main className="notice">
            <a
              href="https://www.facebook.com/FilarmonicaJuvenilDeNuevoLeon17/photos/a.620665751604477/1050503335287381/?type=3&theater"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/notices/191212.jpg" alt="" />
            </a>
          </main>
        </section>
        <aside className="sidebar">
          <Link to="/concerts">
            <h2>Conciertos</h2>
          </Link>
          <Link to="/gallery">
            <h2>Fotos</h2>
          </Link>
          <Link to="/contact">
            <h2>Contacto</h2>
          </Link>
        </aside>
      </main>
    </main>
  );
}
