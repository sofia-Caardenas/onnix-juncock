import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contactenos from './Contactenos';
import Nosotros from './Nosotros';
import Login from './Login';
import Inicio from './Inicio'; // La página principal

function App() {
  return (
    <Router>
      <Header /> {/* Mostrar el header en todas las rutas */}
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer /> {/* Mostrar el footer en todas las rutas */}
    </Router>
  );
}

export default App;
