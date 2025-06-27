import { useContext } from 'react';
import { CarritoContext } from '../contextos/CarritoContext';
import { Link } from 'react-router-dom';
import { BotonWhatsApp } from '../componentes/BotonWhatsApp';

export const CarritoPagina = () => {
  const { carrito, eliminarProducto, total } = useContext(CarritoContext);

  return (
    <div className="pagina-carrito contenedor">
      <h1>Tu Carrito de Compras</h1>
      
      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <p>No hay productos en tu carrito</p>
          <Link to="/" className="btn">Seguir comprando</Link>
        </div>
      ) : (
        <>
          <div className="lista-carrito">
            {carrito.map((item) => (
              <div key={`${item.id}-${item.colorSeleccionado}`} className="item-carrito">
                <img 
                  src={`/namar/public/assets/productos/${item.imagenes[0]}`} 
                  alt={item.nombre}
                  className="imagen-item"
                />
                <div className="info-item">
                  <h3>{item.nombre}</h3>
                  {item.colorSeleccionado && (
                    <div className="color-item">
                      Color: <span 
                        className="muestra-color"
                        style={{ 
                          backgroundColor: item.colorSeleccionado === 'azul' ? '#1b3c73' : 
                                          item.colorSeleccionado === 'rosa' ? '#ffcad4' : 
                                          item.colorSeleccionado === 'rojo' ? '#c70039' : '#f0f0f0'
                        }}
                      />
                      {item.colorSeleccionado}
                    </div>
                  )}
                  <div className="precio-item">
                    {item.oferta ? (
                      <>
                        <span className="precio-oferta">${item.oferta} c/u</span>
                        <span className="precio-tachado">${item.precio}</span>
                      </>
                    ) : (
                      <span>${item.precio} c/u</span>
                    )}
                  </div>
                  <div className="cantidad-item">Cantidad: {item.cantidad}</div>
                  <div className="subtotal-item">
                    Subtotal: ${item.oferta ? item.oferta * item.cantidad : item.precio * item.cantidad}
                  </div>
                </div>
                <button 
                  onClick={() => eliminarProducto(item.id, item.colorSeleccionado)}
                  className="btn-eliminar"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="resumen-carrito">
            <h2>Resumen de compra</h2>
            <div className="total">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <BotonWhatsApp />
            <Link to="/" className="btn">Seguir comprando</Link>
          </div>
        </>
      )}
    </div>
  );
};