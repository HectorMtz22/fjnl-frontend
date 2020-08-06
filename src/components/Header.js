import React from 'react';

import './Header.css';

const Header = ({ classState }) => (
    <header className={classState}>
        <nav className="desktop-nav">
            <ul>
                <li><h2>Menú</h2>
                    <ul className="navhidden">
                        <li><a href="/concerts">Conciertos</a></li>
                        <li><a href="/gallery">Fotos</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul></li>
            </ul>
        </nav>
        <div className="flex">
            <a href="/"><img className="logo" src="icon.png" alt="LOGO"/></a>
            <h1 className="visible">Filarmónica Juvenil <br/> de Nuevo León</h1>
            <h1 className="invisible">Filarmónica Juvenil de Nuevo León</h1>
        </div>
    </header>
);

export default Header;