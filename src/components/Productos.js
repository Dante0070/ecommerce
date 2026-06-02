import Producto from "./Producto";
import './Productos.css';

const Productos = () => {

  const productos = [
    { id: 1, nombre: "Guantes", precio: 2000 },
    { id: 2, nombre: "Aceite", precio: 5000 },
    { id: 3, nombre: "Filtro", precio: 3000 },
    { id: 4, nombre: "Destornillador", precio: 3500 },
    { id: 5, nombre: "Llave inglesa", precio: 4500 }
  ];

  return (
    <div className="contenedor-productos">

      <h2 className="titulo-productos">Productos</h2>

      <div className="productos">
        {
          productos.map(producto => (
            <Producto key={producto.id} producto={producto} />
          ))
        }
      </div>

    </div>
  );
}

export default Productos;