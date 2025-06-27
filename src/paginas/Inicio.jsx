import { productos } from '../datos/productos';
import { Producto } from '../componentes/Producto';
import { Carrito } from '../componentes/Carrito';
import { BotonWhatsApp } from '../componentes/BotonWhatsApp';
import { Navegacion } from '../componentes/Navegacion';
import logo from '/assets/logo-namar-watermark.png';

export const Inicio = () => {
  return (
    <>
      <header className="text-center">
        <div className='flex justify-center'>
          <img className='w-10 h-auto' src={logo} alt="Logo Namar" />
        </div>
        <h1 className="titulo-tienda">Namar</h1>
        <p className='subtitulo-tienda'>Los regalos que vas a amar</p>
      </header>

      <Navegacion/>

      <main className="contenedor">
        <div className='text-center mb-8'>
          <p className='text-3xl text-sky-800'>Bienvenido a nuestra tienda!</p>
        </div>

        <div className="grid-productos">
          {productos.map((producto) => (
            <div 
              key={producto.id} 
              className="hover:shadow-lg transition-shadow"
              style={{ cursor: 'pointer' }}
            >
              <Producto producto={producto} />
            </div>
          ))}
        </div>
      </main>
      
      <Carrito />
      <BotonWhatsApp />
    </>
  );
};