import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { CarritoContext } from '../contextos/CarritoContext';

export const Producto = ({ producto }) => {
  // const { agregarProducto } = useContext(CarritoContext);
  
  const imagenPrincipal = producto.imagenes?.[0] || 'default-product.jpg';

  return (
    <div className="producto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      <Link 
        to={`/productos/${producto.id}`}
        className="block group"
        aria-label={`Ver detalles de ${producto.nombre}`}
      >
        <div className="imagen-producto relative h-48 overflow-hidden">
          <img 
            src={`/namar/public/assets/${imagenPrincipal}`} 
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="info-producto p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {producto.nombre}
          </h3>
        </div>
      </Link>
    
      <div className="p-4 pt-0">
        <div className="precio mb-3">
          {producto.oferta ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 line-through">${producto.precio}</span>
              <span className="text-red-600 font-bold text-lg">${producto.oferta}</span>
            </div>
          ) : (
            <span className="text-gray-800 font-bold text-lg">${producto.precio}</span>
          )}
        </div>

        <div className="flex gap-2">
          <Link 
            to={`/producto/${producto.id}`}
            className="btn-ver bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors flex-1 text-center"
          >
            Ver detalles
          </Link>
          
          {/* <button 
            onClick={(e) => {
              e.stopPropagation();
              agregarProducto({...producto, cantidad: 1});
            }}
            className="btn-carrito bg-amber-500 text-white py-2 px-3 rounded hover:bg-amber-600 transition-colors"
            aria-label="Añadir al carrito"
          >
            🛒
          </button> */}
        </div>
      </div>
    </div>
  );
};