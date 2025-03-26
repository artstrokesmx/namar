import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'



import { CarroComprasContext } from "../../context"

const Card = (data) =>{
    const context = useContext(CarroComprasContext)

    const muestraProducto =(detalleProducto)=>{
        context.detalleProductoAbierto()
        context.setProductoAMostrar(detalleProducto)
    }

    const agregaProductosAlCarrito = (evento,detalleProducto) =>{
        evento.stopPropagation()
        context.setCount(context.count + 1)
        context.setProductosEnCarrito([...context.productosEnCarrito,detalleProducto])
        context.checkoutSideMenuAbierto()
        context.detalleProductoCerrado()
    }

    const renderIcon = (id) =>{
        const isInCard = context.productosEnCarrito.filter(producto => producto.id === id).length > 0

        if(isInCard){
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="w-6 h-6 text-white"/>
                </div>
            )
        } else{
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(evento)=>agregaProductosAlCarrito(evento,data.data)}>
                    <PlusIcon className="w-6 h-6 text-black"/>
                </div>
            )
        }
    }

    return (
        <div
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={()=> muestraProducto(data.data)} >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.categoria.nombre}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.imagenes[0]} alt={data.data.titulo} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.titulo}</span>
                <span className="text-lg font-medium">${data.data.precio}</span>
            </p>
        </div>
    )
}

export default Card