import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import slider1 from './assets/img/slider1.png'; // Importa tus imágenes del slider
import slider2 from './assets/img/slider2.png';
import slider3 from './assets/img/slider3.png';
import slider4 from './assets/img/slider4.png';
import index from './assets/css/index.css'
import carneAsada from './assets/img/carneasada.png';
import costillasCerdo from './assets/img/costillas de cerdo.png';
import bandejaPaisa from './assets/img/bandeja paisa.png';
import chuletaValluna from './assets/img/chuleta valluna.png';
import frijolada from './assets/img/frijolada.png';
import pescado from './assets/img/pescado.png';
import empanada from './assets/img/empanada.png';
import buñuelo from './assets/img/buñuelo.png';
import arepaDeHuevo from './assets/img/arepadehuevo.png';
import hamburguesa from './assets/img/hamburguesa.png';
import cafe from './assets/img/cafe.png';
import panDeBono from './assets/img/pan de bono.png';
import nequi from './assets/img/nequi.jpg'; // Importa las imágenes de los métodos de pago
import daviplata from './assets/img/daviplata.png';
import efectivo from '../src/assets/img/efectivo.png';

function Inicio() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <Slider slideIndex={slideIndex} />
      <ProductSection title="Platos del día" products={platosDelDia} />
      <ProductSection title="Lo más vendido" products={masVendidos} />
      <MetodosPago />
    </>
  );
}

function Slider({ slideIndex }) {
  const slides = [
    { img: slider1, caption: "¡Bienvenidos a Onix!" },
    { img: slider2, caption: "¡Relájate y disfruta!" },
    { img: slider3, caption: "Disfruta de nuestros cafés y más." },
    { img: slider4, caption: "Experimenta con nuestros sabores." }
  ];

  return (
    <div className="slider-frame">
      <ul className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <li key={index} className="slide">
            <img src={slide.img} alt={`Slide ${index + 1}`} />
            <p className="caption">{slide.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductSection({ title, products }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="products">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
}

function ProductCard({ imgSrc, title, price }) {
  return (
    <div className="product">
      <img src={imgSrc} alt={title} />
      <div className="product-title">{title}</div>
      <div className="product-price">${price}</div>
      <Link to="/login" className="product-button">Comprar ahora</Link>
    </div>
  );
}

function MetodosPago() {
  return (
    <section className="section" id="metodosdepago">
      <h2>MÉTODOS DE PAGO</h2>
      <div className="servicios-group">
        <img className="servicios-1" src={nequi} alt="Método de Pago 1" />
        <img className="servicios-1" src={daviplata} alt="Método de Pago 2" />
        <img className="servicios-1" src={efectivo} alt="Método de Pago 3" />
      </div>
    </section>
  );
}

// Datos para los productos
const platosDelDia = [
  { imgSrc: carneAsada, title: "Carne Asada", price: "8.000" },
  { imgSrc: costillasCerdo, title: "Costillas de cerdo con salsa BBQ", price: "8.000" },
  { imgSrc: bandejaPaisa, title: "Bandeja Paisa", price: "8.000" },
  { imgSrc: chuletaValluna, title: "Chuleta Valluna", price: "8.000" },
  { imgSrc: frijolada, title: "Frijolada", price: "8.000" },
  { imgSrc: pescado, title: "Mojarra Frita", price: "8.000" }
];

const masVendidos = [
  { imgSrc: empanada, title: "Empanada de Carne", price: "8.000" },
  { imgSrc: buñuelo, title: "Buñuelos rellenos de arequipe", price: "6.000" },
  { imgSrc: arepaDeHuevo, title: "Arepa de Huevo", price: "5.000" },
  { imgSrc: hamburguesa, title: "Hamburguesa tres carnes", price: "9.000" },
  { imgSrc: cafe, title: "Café con deditos de queso", price: "4.000" },
  { imgSrc: panDeBono, title: "Pan de Bono con trozitos de chocolate", price: "6.000" }
];

export default Inicio;
