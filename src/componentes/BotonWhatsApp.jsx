import { useContext } from 'react';
import { CarritoContext } from '../contextos/CarritoContext';

export const BotonWhatsApp = () => {
  const { carrito, total } = useContext(CarritoContext);

  // LA FUNCIÓN GENERAR MENSAJE ESTÁ DEFINIDA AQUÍ DENTRO DEL COMPONENTE
  const generarMensaje = () => {
    if (carrito.length === 0) {
      return "¡Hola Namar! Quiero información sobre tus productos.";
    }

    const listaProductos = carrito.map(item => {
      const precioUnitario = (item.oferta !== undefined && item.oferta !== null) ? item.oferta : item.precio;
      const precioSeguro = precioUnitario ?? 0;
      const subtotalItem = precioSeguro * item.cantidad;
      return `• ${item.nombre}${item.colorSeleccionado ? ` (${item.colorSeleccionado})` : ''} - ${item.cantidad} x $${precioSeguro.toFixed(2)} = $${subtotalItem.toFixed(2)}`;
    }).join('%0A');

    return `¡Hola Namar! Quiero comprar:%0A%0A${listaProductos}%0A%0ATotal: $${total.toFixed(2)}`;
  };

  // Y SE USA AQUÍ EN EL RETURN DEL COMPONENTE
  return (
    <div className='flex justify-center  bg-green-500 text-white py-2 px-4 rounded'>
      <a className='flex items-center justify-center'
      href={`https://wa.me/XXXXXXXXXXX?text=${encodeURIComponent(generarMensaje())}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Comprar por WhatsApp
    </a>
    </div>
    
  );
};