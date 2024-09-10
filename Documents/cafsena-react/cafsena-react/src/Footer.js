import React from 'react';
import facebook from './assets/img/Facebook.jpg';
import twitter from './assets/img/Twitter.jpg';
import instagram from './assets/img/Instagram.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="link">
          <h3>Contacto</h3>
          <ul>
            <li><a href="tel:3183888099">Teléfono: 318-3888099</a></li>
            <li><a href="mailto:Onix@soy.sena.edu.co">Email: Onix@soy.sena.edu.co</a></li>
            <li>Dirección: Calle 52 No 13-65</li>
          </ul>
        </div>
        <div className="link">
          <h3>Síguenos en</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" width="40" /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" width="40" /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" width="40" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
