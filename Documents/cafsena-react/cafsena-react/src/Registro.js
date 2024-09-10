import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/css/registro.css"; // Importa los estilos del registro

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer la lógica para registrar el usuario o guardar los datos en una base de datos
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Contraseña:", password);

    // Redirigir al login después del registro
    navigate("/login");
  };

  return (
    <div className="registro-container">
      <h2>Regístrate ♥</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre Completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <a className="volver" href="/login">Volver</a>
    </div>
  );
};

export default Registro;
