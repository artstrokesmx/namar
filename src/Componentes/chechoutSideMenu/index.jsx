import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { XMarkIcon } from '@heroicons/react/24/solid'

import { CarroComprasContext } from "../../context"
import OrderCard from '../../Componentes/orderCard'
import {precioTotal} from '../../utilidades'

import "./estilos.css"

const CheckoutSideMenu = () =>{
    const context = useContext(CarroComprasContext)
    const borrarDeCarrito = (id) =>{
        const productosFiltrados = context.productosEnCarrito.filter(producto=> producto.id != id)
        context.setProductosEnCarrito(productosFiltrados)
    }

    const productosEnCheckout = () =>{
        const pedidoPorAnadir = {
            fecha: '12.02.25',
            productos: context.productosEnCarrito,
            productosTotales: context.productosEnCarrito.length,
            precioTotal: precioTotal(context.productosEnCarrito)
        }
        context.setPedido ([...context.pedido, pedidoPorAnadir])
        context.setProductosEnCarrito([])
        context.setBusquedaTitulo(null)
    }

    return(
        <aside 
            className={`${context.isCheckoutSideMenuAbierto ? "flex": "hidden"} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Mi orden</h2>
                <div>
                <XMarkIcon
                className="size-6 text-black cursor-pointer"
                onClick={()=> context.checkoutSideMenuCerrado()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.productosEnCarrito.map(producto=>(
                    <OrderCard
                        key={producto.id}
                        id={producto.id}
                        titulo={producto.titulo}
                        imageUrl={producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : "https://via.placeholder.com/300"}
                        precio={producto.precio}
                        borrarDeCarrito={borrarDeCarrito}
                    />

                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium'>$ {precioTotal(context.productosEnCarrito)}</span>
                </p>
                <Link to='/misordenes/ultima'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={()=>productosEnCheckout()}>Checkout</button>
                </Link>
                
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu