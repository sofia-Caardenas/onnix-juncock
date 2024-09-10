import React, { useState, useEffect } from 'react';
import './assets/css/cliente.css'; // Importa tu CSS

const ClientePanel = () => {
  const [content, setContent] = useState(''); // Estado para manejar el contenido dinámico
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);

    const savedOrderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrderHistory(savedOrderHistory);
  }, []);

  const showProfile = () => {
    setContent(
      <div className="profile">
        <h2>Perfil de Usuario</h2>
        <p><strong>Nombre:</strong> kate herrera</p>
        <p><strong>Email:</strong> kate_h@gmail.com</p>
        <p><strong>Teléfono:</strong> 318 3888099</p>
        <button onClick={editProfile}>Editar Perfil</button>
      </div>
    );
  };

  const editProfile = () => {
    setContent(
      <div className="profile">
        <h2>Editar Perfil</h2>
        <form id="editProfileForm" onSubmit={handleEditProfile}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" defaultValue="kate herrera" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" defaultValue="kate_h@gmail.com" required />
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" defaultValue="318 3888099" required />
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    );
  };

  const handleEditProfile = (event) => {
    event.preventDefault();
    showProfile();
  };

  const showMenu = () => {
    const menuItems = [
      { name: 'Empanada de carne', price: 8000, imageUrl: '../src/assets/img/empanada.png' },
      { name: 'Buñuelo relleno', price: 6000, imageUrl: '../src/assets/img/buñuelo.png' },
      // Agrega más productos aquí...
    ];

    setContent(
      <section className="menu-section" id="menu">
        <h2 className="section-title">Lo más vendido</h2>
        <div className="products">
          {menuItems.map((item, index) => (
            <div className="product" key={index}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="product-title">{item.name}</div>
              <div className="product-price">${item.price}</div>
              <a href="#" className="product-button" onClick={() => addToCart(item)}>Añadir al carrito</a>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert('Producto añadido al carrito');
  };

  const showCart = () => {
    setContent(
      <section className="cart-section">
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <p>No tienes productos en el carrito.</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-details">
                  <img src={item.imageUrl} alt={item.name} className="product" />
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <button onClick={() => removeFromCart(index)} className="remove-button">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && <button className="order-button" onClick={placeOrder}>Realizar Pedido</button>}
      </section>
    );
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const placeOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      status: 'En preparación',
      customerName: 'kate herrera',
      customerEmail: 'kate_h@gmail.com',
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setCart([]);
    alert('Pedido realizado con éxito');
  };

  const checkOrderStatus = () => {
    const activeOrders = orders.filter(order => order.status !== 'Entregado');
    setContent(
      <section className="order-status">
        <h2 className="section-title">Estado de los Pedidos</h2>
        {activeOrders.length === 0 ? (
          <p>No tienes pedidos realizados.</p>
        ) : (
          <ul className="order-list">
            {activeOrders.map((order, index) => (
              <li key={index} className="order-item">
                <h3>Pedido #{order.id}</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      <div className="item-details">
                        <img src={item.imageUrl} alt={item.name} className="item-image" />
                        <div className="item-info">
                          <span className="item-name">{item.name}</span>
                          <span className="item-price">${item.price}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <p><strong>Estado:</strong> <span>{order.status}</span></p>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  };

  const showOrderHistory = () => {
    setContent(
      <div>
        <h2>Historial de Pedidos</h2>
        <ul className="history-list">
          {orderHistory.map((order, index) => (
            <li key={index}>
              <h3>Pedido #{order.id}</h3>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} - ${item.price}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const logout = () => {
    alert('Cerrando sesión');
    window.location.href = '/login';
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a className="logo" href="#"><img src="../src/assets/img/logocafsenablanco.png" width="25%" height="100%" alt="Logo Onix" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="#" onClick={showProfile}>Perfil de Usuario</a></li>
            <li><a href="#" onClick={showMenu}>Ver Menú</a></li>
            <li><a href="#" onClick={showCart}>Carrito de compras</a></li>
            <li><a href="#" onClick={checkOrderStatus}>Pedidos</a></li>
            <li><a href="#" onClick={showOrderHistory}>Historial de Pedidos</a></li>
          </ul>
        </nav>
        <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
      </header>

      <div className="container">
        <h1 className="section-title">Panel de cliente</h1>
        <div id="content">
          {content || <p>Bienvenido al panel de cliente. Selecciona una opción del menú para comenzar.</p>}
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Onix. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default ClientePanel;
