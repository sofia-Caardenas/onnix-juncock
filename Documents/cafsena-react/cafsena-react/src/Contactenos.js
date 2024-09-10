import React, { useState } from 'react';
import './assets/css/contactenos.css';

const Contactenos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor.
    alert('Mensaje enviado');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div>


      <section className="contact-section">
        <h2>Contáctenos</h2>
        <p>Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="nombre" 
              placeholder="Nombre Completo" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Correo Electrónico" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="mensaje" 
              rows="5" 
              placeholder="Tu Mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              required 
            />
            <button type="submit">Enviar</button>
          </form>
          <br></br>          <br></br>
        </div>
      </section>

      
    </div>
  );
};

export default Contactenos;
