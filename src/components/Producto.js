import './Producto.css';

const Producto = ({ producto }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button>Agregar al carrito </button>
      <hr />
    </div>
  );
}

export default Producto;