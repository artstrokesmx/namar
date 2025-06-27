import { useParams, useNavigate } from 'react-router-dom';
import { productos } from '../datos/productos';
import { useContext, useState } from 'react';
import { CarritoContext } from '../contextos/CarritoContext';

export const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarProducto } = useContext(CarritoContext);
  const producto = productos.find(p => p.id === parseInt(id));
  const [cantidad, setCantidad] = useState(1);
  const [colorSeleccionado, setColorSeleccionado] = useState(producto?.colores?.[0] || null);
  const [imagenActual, setImagenActual] = useState(0);

  if (!producto) return <div>Producto no encontrado</div>;

  const handleAgregarCarrito = () => {
    if (cantidad > producto.existencia) {
      alert(`Solo quedan ${producto.existencia} unidades disponibles`);
      return;
    }
    agregarProducto({ ...producto, cantidad, colorSeleccionado });
  };

  return (
    <div className="detalle-producto contenedor">
      <div className="grid-detalle">
        {/* Galería de imágenes */}
        <div className="galeria">
          <div className="imagen-principal">
            <img 
              src={`/namar/assets/productos/${producto.imagenes[imagenActual]}`} 
              alt={producto.nombre} 
              className="imagen-producto"
              onError={e => e.target.src = '/namar/assets/productos/default.jpg'}
            />
          </div>
          <div className="miniaturas">
            {producto.imagenes.map((img, index) => (
              <img
                key={index}
                src={`/namar/assets/productos/${img}`}
                alt={`Vista ${index + 1}`}
                onClick={() => setImagenActual(index)}
                className={index === imagenActual ? 'miniatura-activa' : ''}
              />
            ))}
          </div>
        </div>

        {/* Info del producto */}
        <div className="info-detalle">
          <h1>{producto.nombre}</h1>

          <div className="precio-detalle">
            {producto.oferta ? (
              <>
                <span className="precio-tachado">${producto.precio}</span>
                <span className="precio-oferta">${producto.oferta}</span>
              </>
            ) : (
              <span>${producto.precio}</span>
            )}
          </div>

          <p className="descripcion">{producto.descripcion}</p>

          {producto.colores && (
            <div className="selector-colores">
              <h3>Color:</h3>
              <div className="colores">
                {producto.colores.map(color => (
                  <div 
                    key={color}
                    className={`color-option ${colorSeleccionado === color ? 'seleccionado' : ''}`}
                    style={{ 
                      backgroundColor: color === 'amarillo' ? '#edb832' :
                                      color === 'azul' ? '#1b3c73' :
                                      color === 'azul jeans' ? '#7a889d':
                                      color === 'dorado' ? '#d2872c':
                                      color === 'ginda' ? '#a94d58':
                                      color === 'gris' ? '#777873':
                                      color === 'morado' ? '#812b85':
                                      color === 'rosa' ? '#c70039' : 
                                      color === 'plateado' ? '#f45ad2':
                                      color === 'negro' ? '#000000':
                                      color === 'rojo' ? '#c70039' : '#f0f0f0'
                    }}
                    onClick={() => setColorSeleccionado(color)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="selector-cantidad">
            <h3>Cantidad:</h3>
            <div className="contador">
              <button 
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                disabled={cantidad <= 1}
              >-</button>
              <span>{cantidad}</span>
              <button 
                onClick={() => setCantidad(Math.min(producto.existencia, cantidad + 1))}
                disabled={cantidad >= producto.existencia}
              >+</button>
            </div>
            <p className="existencias">Disponibles: {producto.existencia}</p>
          </div>

          <button 
            onClick={handleAgregarCarrito}
            className="btn btn-carrito"
          >
            Añadir al carrito (${producto.oferta ? producto.oferta * cantidad : producto.precio * cantidad})
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <button 
        onClick={() => navigate('/')}
        className="btn-regresar"
        style={{
          background: 'var(--color-primario)',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '6px',
          marginTop: '15px',
          marginBottom: '20px',
          marginRight: '0px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        ← Inicio
      </button>
      </div>
    </div>
  );
};