import { useParams, Link } from 'react-router-dom';
import { productos } from '../datos/productos';
import {Producto} from '../componentes/Producto';
// import { Helmet } from 'react-helmet-async';

export const Categorias = () => {
  const { categoria } = useParams();
  const productosFiltrados = productos.filter(p => 
    categoria === 'todos' ? true : p.categoria === categoria
  );

  const categoriasDisponibles = [...new Set(productos.map(p => p.categoria))];

  return (
    <div className="pagina-categorias">
      {/* <Helmet>
        <title>{categoria ? `${categoria} | Namar` : 'Categorías | Namar'}</title>
      </Helmet> */}

      <h1 className="titulo-categoria">
        {categoria === 'todos' ? 'Todos nuestros productos' : `Categoría: ${categoria}`}
      </h1>

      <div className="contenedor-categorias">
        <div className="filtros">
          <h3>Filtrar por:</h3>
          <div className="lista-categorias">
            <Link to="/categorias/todos" className="categoria-item">
              Todos
            </Link>
            {categoriasDisponibles.map(cat => (
              <Link 
                key={cat} 
                to={`/categorias/${cat}`}
                className={`categoria-item ${cat === categoria ? 'activa' : ''}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>

        <div className="productos-categoria">
          {productosFiltrados.length > 0 ? (
            <div className="grid-productos">
              {productosFiltrados.map(producto => (
                <Producto key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            <p className="sin-productos">No hay productos en esta categoría</p>
          )}
        </div>
      </div>
    </div>
  );
};