import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CarroComprasContext } from "../../context";
import "./estilos.css";

const DetalleProducto = () => {
    const context = useContext(CarroComprasContext);

    // Verifica si hay un producto seleccionado antes de intentar acceder a sus propiedades
    const producto = context.productoAMostrar;

    return (
        <aside className={`${context.isDetalleProductoAbierto ? "flex" : "hidden"} detalle-producto flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detalle</h2>
                <XMarkIcon className="size-6 text-black cursor-pointer" onClick={() => context.detalleProductoCerrado()} />
            </div>
            
            {producto && producto.imagenes && producto.imagenes.length > 0 ? (
                <figure className='px-6'>
                    <img 
                        className='w-full aspect-square object-cover rounded-lg' 
                        src={producto.imagenes[0]} 
                        alt={producto.titulo || 'Imagen del producto'} 
                    />
                </figure>
            ) : (
                <p className="text-center text-gray-500">No hay imagen disponible</p>
            )}
            
            {producto && (
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>$ {producto.precio}</span>
                    <span className='font-medium text-2md'>{producto.titulo}</span>
                    <span className='font-light text-sm'>{producto.descripcion}</span>
                </p>
            )}
        </aside>
    );
};

export default DetalleProducto;
