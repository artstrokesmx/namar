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
      const precioUnitario = item.oferta !== undefined ? item.oferta : item.precio;
      const subtotalItem = precioUnitario * item.cantidad;
      return `• ${item.nombre}${item.colorSeleccionado ? ` (${item.colorSeleccionado})` : ''} - ${item.cantidad} x $${precioUnitario.toFixed(2)} = $${subtotalItem.toFixed(2)}`;
    }).join('%0A');

    return `¡Hola Namar! Quiero comprar:%0A%0A${listaProductos}%0A%0ATotal: $${total.toFixed(2)}`;
  };

  // Y SE USA AQUÍ EN EL RETURN DEL COMPONENTE
  return (
    <div className='flex justify-center'>
      <a className=''
      href={`https://wa.me/XXXXXXXXXXX?text=${encodeURIComponent(generarMensaje())}`}
      target="_blank"
      rel="noopener noreferrer"
      // Añade clases o estilos si es necesario
    >
      Enviar por WhatsApp
    </a>
    </div>
    
  );
};