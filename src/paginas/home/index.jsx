import {useContext} from 'react'
import Layout from "../../Componentes/layout"
import Card from "../../Componentes/card"
import DetalleProducto from '../../Componentes/detalleProducto'
import { CarroComprasContext } from "../../context"

function Home() {
  const context = useContext(CarroComprasContext)

  const vistaRenderizada = () =>{
    if (context.filteredItems?.length > 0){
        return(
          context.filteredItems?.map(item =>(
            <Card key={item.id} data={item}/>
            ))
        )
      } else{
        return(
          <div>Ese producto no existe :(</div>
        )
      }
      
    }
  
  return (
      <Layout>
        <div className='justify-items-center mt-14'>
          <img className='w-12' src="/logonamararcoiris.png" alt="" />
          <h1 className="font-medium text-xl text-pink-400">NAMAR</h1>
          <p>Los productos que vas a amar</p>
        </div>
        <input
        type="text"
        placeholder='Busca un producto'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event)=> context.setBusquedaTitulo(event.target.value)}/>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
          vistaRenderizada()
          }
        </div>
        <DetalleProducto/>
      </Layout>
  )
}

export default Home