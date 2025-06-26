import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    if (!producto || typeof producto !== 'object' || !('id' in producto)) return;

    setCarrito(prevCarrito => {
      const color = 'colorSeleccionado' in producto ? producto.colorSeleccionado : null;

      const productoExistenteIndex = prevCarrito.findIndex(item => 
        item.id === producto.id && 
        ((item.colorSeleccionado === color) || 
         (item.colorSeleccionado == null && color == null))
      );

      if (productoExistenteIndex >= 0) {
        return prevCarrito.map((item, index) => {
          if (index !== productoExistenteIndex) return item;
          
          const nuevaCantidad = item.cantidad + (producto.cantidad || 1);
          const maxCantidad = 'existencia' in producto ? producto.existencia : Infinity;
          
          return {
            ...item,
            cantidad: Math.min(nuevaCantidad, maxCantidad)
          };
        });
      }
      
      return [
        ...prevCarrito, 
        {
          ...producto,
          cantidad: Math.min(
            producto.cantidad || 1, 
            'existencia' in producto ? producto.existencia : Infinity
          ),
          colorSeleccionado: color
        }
      ];
    });
  };

  const eliminarProducto = (id, color) => {
    setCarrito(prevCarrito => 
      prevCarrito.filter(item => 
        item.id !== id || 
        (color !== undefined && item.colorSeleccionado !== color)
      )
    );
  };

  const total = carrito.reduce(
    (sum, item) => sum + (item.oferta || item.precio) * (item.cantidad || 1), 
    0
  );

  return (
    <CarritoContext.Provider 
      value={{ 
        carrito, 
        agregarProducto, 
        eliminarProducto,
        total 
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;