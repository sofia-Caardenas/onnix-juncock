import React, { useState, useEffect } from 'react';
import '../assets/css/administrador.css';
import logo from '../assets/img/logocafsenablanco.png';

const Administrador = () => {
  // Estados para las tablas
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan Perez', email: 'juan.perez@example.com', telefono: '3001234567', direccion: 'Calle 123 #45-67', fechaRegistro: '2024-01-15' },
    { id: 2, nombre: 'Maria Gomez', email: 'maria.gomez@example.com', telefono: '3102345678', direccion: 'Carrera 12 #34-56', fechaRegistro: '2024-02-20' }
  ]);

  const [productos, setProductos] = useState([
    { id: 1, title: 'Café Americano', description: 'Café negro sin azúcar', price: 5000, category: 'Bebidas', image: '20', dateAdded: '2024-03-01' },
    { id: 2, title: 'Café Latte', description: 'Café con leche', price: 6000, category: 'Bebidas', image: '20', dateAdded: '2024-03-05' }
  ]);

  const [pedidos, setPedidos] = useState([
    { id: 1, userId: 1, orderDate: '2024-04-01', status: 'Recibido', total: 10000 },
    { id: 2, userId: 2, orderDate: '2024-04-02', status: 'En Preparacion', total: 12000 }
  ]);

  const [historial, setHistorial] = useState([
    { id: 1, userId: 1, orderId: 1, orderDate: '2024-04-01', status: 'Recibido', total: 10000 },
    { id: 2, userId: 2, orderId: 2, orderDate: '2024-04-02', status: 'En Preparacion', total: 12000 }
  ]);

  // Función para mostrar una sección
  const showSection = (sectionId) => {
    document.querySelectorAll('.menu-section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  };

  // Simulación de tabla de datos
  const fillTable = (tableId, data) => {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = ''; // Limpia el contenido de la tabla
    data.forEach(item => {
      let row = '<tr>';
      for (const key in item) {
        if (key !== 'id') row += `<td>${item[key]}</td>`;
      }
      row += `
        <td>
          <button onClick={() => editItem(${item.id})}>Editar</button>
          <button onClick={() => deleteItem(${item.id})}>Eliminar</button>
        </td>
      `;
      row += '</tr>';
      tbody.innerHTML += row;
    });
  };

  useEffect(() => {
    fillTable('usuarios-table', usuarios);
    fillTable('productos-table', productos);
    fillTable('pedidos-table', pedidos);
    fillTable('historial-table', historial);
  }, []);

  // Funciones de acciones
  const addItem = (list, setList, newItem) => setList([...list, newItem]);
  const editItem = (id) => console.log('Editar', id);
  const deleteItem = (id) => console.log('Eliminar', id);

  // Función de cierre de sesión
  const logout = () => {
    alert('Cerrando sesión');
    window.location.href = '/login';
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a className="logo"><img src={logo} width="25%" height="100%" alt="Logo Onix" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="#usuarios" onClick={() => showSection('usuarios')}>Usuarios</a></li>
            <li><a href="#productos" onClick={() => showSection('productos')}>Productos</a></li>
            <li><a href="#pedidos" onClick={() => showSection('pedidos')}>Pedidos</a></li>
            <li><a href="#historial" onClick={() => showSection('historial')}>Historial</a></li>
          </ul>
        </nav>
        <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
      </header>

      <div className="container">
        <h1 className="section-title">Panel de administración</h1>
        <div id="content">
          <p>Bienvenido al panel de administrador. Selecciona una opción del menú para comenzar.</p>
        </div>

        {/* Tablas */}
        <div id="usuarios" className="menu-section" style={{ display: 'none' }}>
          <h2>Usuarios</h2>
          <table id="usuarios-table"><tbody></tbody></table>
        </div>

        <div id="productos" className="menu-section" style={{ display: 'none' }}>
          <h2>Productos</h2>
          <table id="productos-table"><tbody></tbody></table>
        </div>

        <div id="pedidos" className="menu-section" style={{ display: 'none' }}>
          <h2>Pedidos</h2>
          <table id="pedidos-table"><tbody></tbody></table>
        </div>

        <div id="historial" className="menu-section" style={{ display: 'none' }}>
          <h2>Historial</h2>
          <table id="historial-table"><tbody></tbody></table>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Onix. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Administrador;
