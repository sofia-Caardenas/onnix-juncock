import React from 'react';
import { Link } from 'react-router-dom';
import logocafsena from './assets/img/logocafsena.png';

function Header() {
  return (
    <header className="header">
      <div className="menu">
        <Link to="/" className="logo">
          <img src={logocafsena} alt="Logo Onix" />
        </Link>
        <nav className="navbar">
          <ul>
            <li><Link to="/"><h1>Inicio</h1></Link></li>
            <li><a href="#metodosdepago"><h1>Métodos de pago</h1></a></li>
            <li><Link to="/contactenos"><h1>Contáctenos</h1></Link></li>
            <li><Link to="/nosotros"><h1>Nosotros</h1></Link></li>
            <li><Link to="/login"><h1>Ingresar</h1></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
