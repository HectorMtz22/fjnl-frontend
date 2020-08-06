import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer1">
                    <p className="titulo">&copy; 2020. Todos los derechos reservados</p>
                </footer>
                <footer className="footernone">
                    <a href="/#notices" className="btnfooter">
                        <img src="img/notices.png" alt="Notices" className="iconfooter"/>
                        <h2 className="titulo">Noticias</h2>
                    </a>
                    <Link to="/concerts" className="btnfooter">
                        <img src="img/concerts.png" alt="Concerts" className="iconfooter"/>
                        <h2 className="titulo">Conciertos</h2>
                    </Link>
                    <Link to="/gallery" className="btnfooter">
                        <img src="img/gallery.png" alt="Gallery" className="iconfooter"/>
                        <h2 className="titulo">Fotos</h2>
                    </Link>
                    <Link to="/contact" className="btnfooter">
                        <img src="img/contact.png" alt="Contact" className="iconfooter"/>
                        <h2 className="titulo">Contacto</h2>
                    </Link>
            </footer>
            </div>
        )
    }
}
