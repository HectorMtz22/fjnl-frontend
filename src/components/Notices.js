import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Notices.css';

export default class Notices extends Component {
    render() {
        return (
            <main className="main">
                <main className="banner">
                    <h1>Prepárate para lo que viene en 2020</h1>
                </main>
                <main className="body">
                    <main className="about">
                        <p>La Filarmónica Juvenil de Nuevo León es una Orquesta formada por jóvenes talento unidos por la pasión de hacer música. Con más de 30 años de trayectoria, la Filarmónica se ha convertido en el principal semillero cultural de Nuevo León; nuestro orgullo es fomentar la cultura día con día, promoviendo la educación musical y ejerciendo valores universales.</p>
                    </main>
                    <section className="main-notices">
                        <main className="notice">
                            {/* eslint-disable-next-line */}
                            <a  id="notices">
                            <h1>Noticias</h1>
                            </a>
                        </main>
                        <main className="notice notice-1">
                            <a href="https://www.facebook.com/FilarmonicaJuvenilDeNuevoLeon17/photos/a.620665751604477/1069597060044675/?type=3&theater" target="_blank" rel="noopener noreferrer">
                                <img src="img/notices/200101.jpg" alt=""/>
                            </a>
                        </main>
                        <main className="notice">
                            <a href="https://www.facebook.com/FilarmonicaJuvenilDeNuevoLeon17/photos/a.620665751604477/1051302215207493/?type=3&theater" target="_blank" rel="noopener noreferrer">
                                <img src="img/notices/191213.jpg" alt=""/>
                            </a>
                        </main>
                        <main className="notice">
                            <a href="https://www.facebook.com/FilarmonicaJuvenilDeNuevoLeon17/photos/a.620665751604477/1050503335287381/?type=3&theater" target="_blank" rel="noopener noreferrer">
                                <img src="img/notices/191212.jpg" alt=""/>
                            </a>
                        </main>
                    </section>
                    <aside className="sidebar">
                        <Link to="/concerts" className="sidebar-link">
                            <h2>Conciertos</h2>
                        </Link>
                        <Link to="/gallery" className="sidebar-link">
                            <h2>Fotos</h2>
                        </Link>
                        <Link to="/contact" className="sidebar-link">
                            <h2>Contacto</h2>
                        </Link>
                    </aside>
                </main>
            </main>
        )
    }
}
