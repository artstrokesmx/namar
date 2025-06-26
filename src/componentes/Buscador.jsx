import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Buscador = ({ onSearch = () => {}, onFilter = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categorias = ['todos', 'mochilas', 'bolsas', 'thermos', 'vasos', 'tazas', 'ropa'];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Llama a la función solo si existe
  };

  const handleFilterClick = (categoria) => {
    onFilter(categoria); // Llama a la función solo si existe
  };

  return (
    <div className="filtros-buscador">
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button>🔍</button>
      </div>

      <div className="categorias">
        {categorias.map((categoria) => (
          <Link 
            key={categoria}
            to={categoria === 'todos' ? '/' : `/categoria/${categoria}`}
            className="btn-categoria"
            onClick={() => handleFilterClick(categoria)}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};