import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CarroComprasProvider } from '../../context'

import Home from '../home'
import MiCuenta from '../micuenta'
import MisOrdenes from '../misordenes'
import MiOrden from '../orden'
import SignIn from '../signin'
import NotFound from '../notfound'
import Navbar from '../../Componentes/navbar'
import CheckoutSideMenu from '../../Componentes/chechoutSideMenu'

import './App.css'

const RutasApp = ()=>{
  let rutas = useRoutes([
    {path:'/', element: <Home />},
    {path:'/maletas', element: <Home />},
    {path:'/mochilas', element: <Home />},
    {path:'/bolsas', element: <Home />},
    {path:'/vasos', element: <Home />},
    {path:'/ropa', element: <Home />},
    {path:'/otros', element: <Home />},
    {path:'/micuenta', element: <MiCuenta />},
    {path:'/misordenes', element: <MisOrdenes />},
    {path:'/misordenes/ultima', element: <MiOrden />},
    {path:'/misordenes/:id', element: <MiOrden />},
    {path:'/miorden', element: <MiOrden />},
    {path:'/signin', element: <SignIn />},
    {path:'/*', element: <NotFound />},

  ])

  return rutas
}

const App = () => {
  return (
    <CarroComprasProvider>
      <BrowserRouter>
        <RutasApp/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </CarroComprasProvider>
  )
}

export default App
