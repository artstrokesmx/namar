import { Link } from 'react-router-dom';

export const Producto = ({ producto }) => {
  return (
    <div className="producto">
      
      <div className="imagen-producto">
          <img src={`/assets/${producto.imagenes[0]}`} alt={producto.nombre} />
        </div>
      <div className="info-producto">
        <Link to={`/producto/${producto.id}`}>
        <h3>{producto.nombre}</h3>
      </Link>
        
        <div className="precio">
          {producto.oferta ? (
            <>
              <span className="precio-tachado">${producto.precio}</span>
              <span className="precio-oferta">${producto.oferta}</span>
            </>
          ) : (
            <span>${producto.precio}</span>
          )}
        </div>
        <Link to={`/producto/${producto.id}`}>
        <button className="btn btn-carrito">
          Ver producto
        </button>
      </Link>
        
      </div>
    </div>
  );
};