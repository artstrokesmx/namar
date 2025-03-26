import { useContext } from "react"
import { Link } from "react-router-dom"

import Layout from "../../Componentes/layout"
import { CarroComprasContext } from "../../context"
import OrdersCard from "../../Componentes/ordersCard"

function MisOrdenes() {
  const context = useContext(CarroComprasContext)

  return (
      <Layout>
        <div className="flex w-80 items-center justify-center relative mb-4">
          <h1 className="font-medium text-xl">Mis órdenes</h1>
        </div>
        {
          context.pedido.map((pedido,index)=>(
            <Link key={index} to = {`/misordenes/${index}`}>
              <OrdersCard
              precioTotal={pedido.precioTotal} productosTotales={pedido.productosTotales}/>
            </Link>
            
          ))
        }
        
      </Layout>
  )
}

export default MisOrdenes