import { productos } from '../datos/productos';
import { Producto } from '../componentes/Producto';
import { Carrito } from '../componentes/Carrito';
import { BotonWhatsApp } from '../componentes/BotonWhatsApp';
import {Navegacion} from '../componentes/Navegacion'

export const Inicio = () => {
  return (
    <>
      <header>
        <div className='flex justify-center'>
          <img className='w-10' src="../../assets/logo-namar-watermark.png" alt="Logo tienda de regalos Namar" />
        </div>
        
        <h1 className="titulo-tienda">Namar</h1>
        <p className='subtitulo-tienda'>Los regalos que vas a amar</p>
      </header>
      <Navegacion/>
      <main className="contenedor">
        <div>
          <p className='flex justify-center text-3xl text-sky-800'>Bienvenido a nuestra tienda!</p>
        </div>
        <div className="grid-productos">
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </main>
      
      <Carrito />
      <BotonWhatsApp />
    </>
  );
};