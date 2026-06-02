import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import usuarioImg from '../assets/iconos/usuario.jpg';
import carritoImg from '../assets/iconos/carrito.png'; 
import logolubckerImg from '../assets/iconos/logolubcker.png';

const Navbar = () => {
  // Un solo estado controla qué menú está abierto ('usuario', 'carrito', 'lateral' o null)
  const [menuActivo, setMenuActivo] = useState(null);

  // Función simple para abrir uno y cerrar los demás automáticamente
  const alternarMenu = (menu) => {
    setMenuActivo(menuActivo === menu ? null : menu);
  };

  return (
    <>
      <nav className="navbar">
        
        {/* PARTE IZQUIERDA: Menú hamburguesa y Logo */}
        <div className="navbar-left">
          <div className="hamburger" onClick={() => alternarMenu('lateral')}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          {/* Logo envuelto en un Link para que al hacerle clic te regrese al Inicio */}
          <Link to="/" className="logo-lubcker" onClick={() => setMenuActivo(null)}>
            <img src={logolubckerImg} alt="Logo" className="logo-lubcker-img" />
          </Link>
        </div>

        {/* PARTE CENTRAL: Buscador */}
        <div className="navbar-center">
          <input type="text" placeholder="Buscar..." className="search-bar" />
        </div>

        {/* PARTE DERECHA: Iconos con ventanas animadas */}
        <div className="navbar-right">
          
          {/* BOTÓN DE USUARIO */}
          <div className="icon-box">
            <img src={usuarioImg} alt="Usuario" className="nav-icon-login" onClick={() => alternarMenu('usuario')} />
            
            <div className={`ventanita-flotante ${menuActivo === 'usuario' ? 'abierto' : ''}`}>
              <button className="btn-primario">Iniciar Sesión</button>
              <button className="btn-secundario">Registrarse</button>
              {/* Opción directa al historial desde el perfil del usuario */}
              <Link to="/historial" onClick={() => setMenuActivo(null)} style={{ textDecoration: 'none' }}>
                <button className="btn-secundario" style={{ marginTop: '8px' }}>Mi Historial</button>
              </Link>
            </div>
          </div>

          {/* BOTÓN DE CARRITO */}
          <div className="icon-box">
            <img src={carritoImg} alt="Carrito" className="nav-icon-carrito" onClick={() => alternarMenu('carrito')} />
            <span className="numero-carrito">0</span>
            
            <div className={`ventanita-flotante ${menuActivo === 'carrito' ? 'abierto' : ''}`}>
              <h4>Tu Carrito</h4>
              <p className="carrito-vacio">No hay productos todavía.</p>
              <button className="btn-primario">Ver Carrito</button>
            </div>
          </div>

        </div>
      </nav>

      {/* MENÚ LATERAL ANIMADO */}
      <div className={`menu-lateral ${menuActivo === 'lateral' ? 'abierto' : ''}`}>
        <button className="btn-cerrar" onClick={() => setMenuActivo(null)}>X</button>
        <ul>
          {/* Enlaces de navegación interactivos */}
          <li>
            <Link to="/" onClick={() => setMenuActivo(null)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              Inicio
            </Link>
          </li>
          <li>Productos</li>
          <li>Categorías</li>
          <li>
            <Link to="/historial" onClick={() => setMenuActivo(null)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              Historial de Compras
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
