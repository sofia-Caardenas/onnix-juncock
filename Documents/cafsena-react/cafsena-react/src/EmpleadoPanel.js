import React, { useState, useEffect } from 'react';
import '../assets/css/empleado.css'; // Importa el CSS
import logoblanco from '../assets/img/logocafsenablanco.png'; // Importa la imagen del logo

const EmpleadoPanel = () => {
    const [content, setContent] = useState(<WelcomeContent />);
    const [orders, setOrders] = useState(() => {
        return JSON.parse(localStorage.getItem('orders')) || [];
    });

    const showProfile = () => {
        setContent(<ProfileContent editProfile={editProfile} />);
    };

    const editProfile = () => {
        setContent(<EditProfileContent saveProfile={showProfile} />);
    };

    const showStockUpdate = () => {
        setContent(<StockUpdateContent />);
    };

    const showOrders = () => {
        setContent(<OrderListContent orders={orders} updateOrderStatus={updateOrderStatus} />);
    };

    const updateOrderStatus = (orderId, newStatus) => {
        const updatedOrders = orders.map(order => {
            if (order.id === orderId) {
                order.status = newStatus;
            }
            return order;
        });

        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        alert(`El estado del pedido ha sido actualizado a: ${newStatus}`);
        showOrders();
    };

    const logout = () => {
        alert('Sesión cerrada');
        window.location.href = '/login';
    };

    useEffect(() => {
        // Set initial welcome content on page load
        setContent(<WelcomeContent />);
    }, []);

    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logoblanco} alt="Logo Onix" style={{ width: '25%', height: '100%' }} />
                </div>
                <nav>
                    <ul>
                        <li><a href="#" onClick={showProfile}>Perfil de empleado</a></li>
                        <li><a href="#" onClick={showStockUpdate}>Ver Stock</a></li>
                        <li><a href="#" onClick={showOrders}>Ver pedidos</a></li>
                    </ul>
                </nav>
                <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
            </header>

            <div className="container">
                <h1 className="section-title">Panel de empleado</h1>
                <div id="content">
                    {content}
                </div>
            </div>

            <footer>
                <p>&copy; 2024 Onix. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

const WelcomeContent = () => (
    <div>
        <h2>Bienvenido al panel de empleado</h2>
        <p>Selecciona una opción del menú para comenzar.</p>
    </div>
);

const ProfileContent = ({ editProfile }) => (
    <div className="profile">
        <h2>Perfil de Usuario</h2>
        <p><strong>Nombre:</strong> kate_h</p>
        <p><strong>Email:</strong> kate_h@gmail.com</p>
        <p><strong>Teléfono:</strong> 318 3888099</p>
        <button onClick={editProfile}>Editar Perfil</button>
    </div>
);

const EditProfileContent = ({ saveProfile }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        saveProfile();
    };

    return (
        <div className="profile">
            <h2>Editar Perfil</h2>
            <form id="editProfileForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" defaultValue="kate_h" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" defaultValue="kate_h@gmail.com" required />
                <label htmlFor="phone">Teléfono:</label>
                <input type="tel" id="phone" name="phone" defaultValue="318 3888099" required />
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

const StockUpdateContent = () => (
    <div>
        <h2>Ver Stock</h2>
        {/* Aquí puedes agregar el contenido dinámico del stock, como en el ejemplo original */}
    </div>
);

const OrderListContent = ({ orders, updateOrderStatus }) => (
    <div>
        <h2>Pedidos de Clientes</h2>
        <ul className="order-list">
            {orders.map(order => (
                <li key={order.id}>
                    <h3>Pedido #{order.id}</h3>
                    <p><strong>Estado:</strong>
                        <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        >
                            <option value="En preparación">En preparación</option>
                            <option value="En camino">En camino</option>
                            <option value="Entregado">Entregado</option>
                        </select>
                    </p>
                    <ul>
                        {order.items.map((item, index) => (
                            <li key={index}>{item.product} - ${item.price}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
);

export default EmpleadoPanel;
