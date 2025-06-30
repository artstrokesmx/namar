import { useContext, useState } from 'react';
import {CarritoContext} from '../contextos/CarritoContext'
import { Link } from 'react-router-dom';

export const Carrito = () => {
  const { carrito, eliminarProducto, total } = useContext(CarritoContext);
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Botón flotante para abrir carrito
      <button 
        className="btn-abrir-carrito"
        onClick={() => setVisible(true)}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          background: 'var(--color-primario)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 999,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}
      >
        🛒 {carrito.length > 0 && <span className="contador-carrito">{carrito.length}</span>}
      </button> */}

      {/* Panel del carrito */}
      {visible && (
        <div className="carrito-contenedor">
          <div className="carrito-header">
            <h3>Tu Carrito</h3>
            <button 
              onClick={() => setVisible(false)}
              className="btn-cerrar"
            >
              ×
            </button>
          </div>

          {carrito.length === 0 ? (
            <p className="carrito-vacio">No hay productos en el carrito</p>
          ) : (
            <>
              <ul className="lista-carrito">
                {carrito.map((item) => (
                  <li key={`${item.id}-${item.colorSeleccionado}`} className="item-carrito">
                    <div className="info-item">
                      <h4>{item.nombre}</h4>
                      {item.colorSeleccionado && (
                        <div className="color-item">
                          <span 
                            className="muestra-color"
                            style={{ 
                              backgroundColor: 
                              //                  item.colorSeleccionado === 'azul' ? '#1b3c73' : 
                              //                 item.colorSeleccionado === 'rosa' ? '#ffcad4' : 
                              //                 item.colorSeleccionado === 'rojo' ? '#c70039' : '#f0f0f0'
                                      item.colorSeleccionado === 'amarillo' ? '#edb832' :
                                      item.colorSeleccionado === 'azul' ? '#1b3c73' :
                                      item.colorSeleccionado === 'azul jeans' ? '#7a889d':
                                      item.colorSeleccionado === 'dorado' ? '#d2872c':
                                      item.colorSeleccionado === 'ginda' ? '#a94d58':
                                      item.colorSeleccionado === 'gris' ? '#777873':
                                      item.colorSeleccionado === 'morado' ? '#812b85':
                                      item.colorSeleccionado === 'rosa' ? '#c70039' : 
                                      item.colorSeleccionado === 'plateado' ? '#f45ad2':
                                      item.colorSeleccionado === 'negro' ? '#000000':
                                      item.colorSeleccionado === 'rojo' ? '#c70039' : '#f0f0f0'
                            }}
                          />
                          {item.colorSeleccionado}
                        </div>
                      )}
                      <div className="precio-item">
                        {item.oferta ? (
                          <>
                            <span className="precio-unitario">${item.oferta} c/u</span>
                            <span className="precio-tachado">${item.precio}</span>
                          </>
                        ) : (
                          <span className="precio-unitario">${item.precio} c/u</span>
                        )}
                      </div>
                      <div className="cantidad-item">Cantidad: {item.cantidad}</div>
                      <div className="subtotal-item">Subtotal: ${item.oferta ? item.oferta * item.cantidad : item.precio * item.cantidad}</div>
                    </div>
                    <button 
                      onClick={() => eliminarProducto(item.id, item.colorSeleccionado)}
                      className="btn-eliminar"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>

              <div className="carrito-footer">
                <div className="total-carrito">
                  Total: <span>${total}</span>
                </div>
                <Link 
                  to="/carrito" 
                  className="btn btn-ver-carrito"
                  onClick={() => setVisible(false)}
                >
                  Ver carrito completo
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};