import { useContext } from "react"
import Layout from "../../Componentes/layout"
import { Link } from "react-router-dom"
import {ChevronLeftIcon} from '@heroicons/react/24/solid'
import { CarroComprasContext } from "../../context"
import OrderCard from "../../Componentes/orderCard"

function MiOrden() {
  const context = useContext(CarroComprasContext)
  const guiaActual = window.location.pathname
  let index = guiaActual.substring(guiaActual.lastIndexOf('/')+ 1)
  if (index === 'ultima') index = context.pedido?.length -1

  return (
      <Layout>
        <div className="flex w-80 items-center justify-center relative mb-2">
          <Link to='/misordenes' className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
          </Link>
          <h1>Mi Orden</h1>
        </div>
        <div className='fles flex-col w-80'>
            {
                context.pedido?.[index]?.productos.map(producto=>(
                    <OrderCard
                        key= {producto.id}
                        id={producto.id}
                        titulo={producto.titulo}
                        imageUrl={producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : "https://via.placeholder.com/300"}
                        precio={producto.precio}
                    />

                ))
            }
            </div>
      </Layout>
  )
}

export default MiOrden