import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { CarroComprasContext } from "../../context"

const NavBar = ()=>{
    const context = useContext(CarroComprasContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                    to='/'
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                    <div className="flex items-center">
                        <img className="w-10" src="../../../public/logonamararcoiris.png" alt="" />
                        Namar
                    </div>
                        
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    onClick={()=>context.setBusquedaCategoria()}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/maletas'
                    onClick={()=>context.setBusquedaCategoria('maletas')}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Maletas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/vasos'
                    onClick={()=>context.setBusquedaCategoria('vasos')}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Vasos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/ropa'
                    onClick={()=>context.setBusquedaCategoria('ropa')}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Ropa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/mochilas'
                    onClick={()=>context.setBusquedaCategoria('mochilas')}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Mochilas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/bolsas'
                    onClick={()=>context.setBusquedaCategoria('bolsas')}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Bolsas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/otro'
                    onClick={()=>context.setBusquedaCategoria('otro')}
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Otro
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    namar@gmail.com
                </li>
                <li>
                    <NavLink
                    to='/misordenes'
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Mis Ordenes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/micuenta'
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        micuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/signin'
                    className ={ ({isActive})=>
                        isActive ? activeStyle : undefined
                }>
                        Sing In
                    </NavLink>
                </li>
                <li className="flex justify-center items-center gap-1">
                        <ShoppingCartIcon className="h6 w-6 text-black"/>
                        <div>
                            {context.productosEnCarrito.length}
                        </div> 
                </li>
            </ul>
        </nav>
    )
}

export default NavBar