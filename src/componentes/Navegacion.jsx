import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../contextos/CarritoContext';


export const Navegacion = () => {
  const { carrito } = useContext(CarritoContext);
  const categorias = ['todos', 'mochilas', 'maletas', 'bolsas', 'ropa'];

  return (
    <nav className="navegacion-principal">
      <div className="contenedor-pestanas">
        {/* Pestaña de Categorías */}
        <div className="dropdown">
          <button className="btn-pestana">
            Categorías ▼
          </button>
          <div className="dropdown-content">
            {categorias.map(cat => (
              <Link 
                key={cat} 
                to={`/categorias/${cat}`}
                className="dropdown-item"
              >
                {cat === 'todos' ? 'Ver todo' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>

        {/* Pestaña de Contacto */}
        <a 
          href="mailto:contacto@namar.com" 
          className="btn-pestana"
        >
          Contacto
        </a>

        {/* Pestaña de Carrito */}
        <Link to="/carrito" className="btn-pestana btn-carrito">
          🛒 Carrito {carrito.length > 0 && (
            <span className="contador-carrito">{carrito.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};