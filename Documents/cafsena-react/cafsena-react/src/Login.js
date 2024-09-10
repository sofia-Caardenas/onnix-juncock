import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/css/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("cliente");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Aquí deberías almacenar el token en localStorage o en un estado global
        localStorage.setItem('token', data.token);
        
        // Redirigir basado en el rol
        switch (role) {
          case "cliente":
            navigate("/ClientePanel");
            break;
          case "administrador":
            navigate("/administrador");
            break;
          case "empleado":
            navigate("/empleado");
            break;
          default:
            alert("Rol no válido");
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Por favor, intente de nuevo más tarde.");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <label htmlFor="role">Rol</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="cliente">Cliente</option>
            <option value="empleado">Empleado</option>
            <option value="administrador">Administrador</option>
          </select>
          <button type="submit">Iniciar sesión</button>
        </form>
        <a href="/registro">¿No tienes Cuenta? Regístrate</a>
        <a className="volver" href="/">Volver</a>
      </div>
    </div>
  );
};

export default Login;