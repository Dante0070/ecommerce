import { useState } from 'react';
import './Carrusel.css';

import fotoProducto from '../assets/productos/ele.jpg'; 

const Carrusel = () => {
  const [fotoActual, setFotoActual] = useState(0);

  const irAtras = () => {
    if (fotoActual === 0) {
      setFotoActual(2);
    } else {
      setFotoActual(fotoActual - 1);
    }
  };

  const irSiguiente = () => {
    if (fotoActual === 2) {
      setFotoActual(0);
    } else {
      setFotoActual(fotoActual + 1);
    }
  };

  return (
    <div className="contenedor-inicio">
      
      {/* SECCIÓN 1: EL CARRUSEL DE PRODUCTOS PRINCIPALES */}
      <div className="carrusel-grande">
        {/* Flecha izquierda */}
        <button className="flecha-carrusel izq" onClick={irAtras}>❮</button>
        
        {/* Mostramos la foto correspondiente */}
        <div className="espacio-foto-carrusel">
          {fotoActual === 0 && (
            <div className="item-carrusel">
              <img src={fotoProducto} alt="Limpiador de Manos Industrial" />
              <div className="etiqueta-producto"> NOMBRE DLE PRODUCTO </div>
            </div>
          )}
          {fotoActual === 1 && (
            <div className="item-carrusel">
              <img src={fotoProducto} alt="Desengrasante de Motores" />
              <div className="etiqueta-producto"> NOMBRE DLE PRODUCTO </div>
            </div>
          )}
          {fotoActual === 2 && (
            <div className="item-carrusel">
              <img src={fotoProducto} alt="Kits de Limpieza" />
              <div className="etiqueta-producto"> NOMBRE DLE PRODUCTO </div>
            </div>
          )}
        </div>

        {/* Flecha derecha */}
        <button className="flecha-carrusel der" onClick={irSiguiente}>❯</button>
      </div>

      {/* SECCIÓN 2: FILA DE TRES BOTONES / CATEGORÍAS */}
      <div className="fila-categorias">
        <button className="boton-categoria"> NOMBRE DLE PRODUCTO </button>
        <button className="boton-categoria"> NOMBRE DLE PRODUCTO </button>
        <button className="boton-categoria"> NOMBRE DLE PRODUCTO </button>
      </div>

    </div>
  );
};

export default Carrusel;
