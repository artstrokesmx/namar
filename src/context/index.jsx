import { createContext,useState,useEffect } from "react";

export const CarroComprasContext = createContext()

export const CarroComprasProvider = ({children}) =>{

    //carrito de compras incrementar cantidad
    const [count, setCount] = useState(0)

    //detalle de producto, abrir cerrar panel
    const [isDetalleProductoAbierto, setisDetalleProductoAbierto] = useState(false)
    const detalleProductoAbierto = () => setisDetalleProductoAbierto(true)
    const detalleProductoCerrado = () => setisDetalleProductoAbierto(false)

    //checkout, abrir cerrar panel
    const [isCheckoutSideMenuAbierto, setisCheckoutSideMenuAbierto] = useState(false)
    const checkoutSideMenuAbierto = () => setisCheckoutSideMenuAbierto(true)
    const checkoutSideMenuCerrado = () => setisCheckoutSideMenuAbierto(false)

    //Detalle de producto muestra producto
    const [productoAMostrar, setProductoAMostrar] = useState({})

    // Carrito de compras Agraga productos al carro
    const [productosEnCarrito, setProductosEnCarrito] = useState([])

    //Carrito de compras Pedido

    const [pedido, setPedido] = useState([])

    //obtener productos

    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Traer productos por titulo
    const [busquedaTitulo, setBusquedaTitulo] = useState(null)
    const [busquedaCategoria, setBusquedaCategoria] = useState(null)
    

    useEffect(()=>{
        fetch('/Api/productos.json')
        .then(response => response.json())
        .then(data => setItems(data))
      },[])

    //Función para búsqueda

    const filtrarItemsPorTitulo = (items,busquedaTitulo) => {
        return items?.filter(item => item.titulo.toLowerCase().includes(busquedaTitulo.toLowerCase()))
    }

    const filtrarItemsPorCategoria = (items,busquedaCategoria) => {
        return items?.filter(item => item.categoria.nombre.toLowerCase().includes(busquedaCategoria.toLowerCase()))
    }

    const filtrarPor = (buscaTipo,items,busquedaTitulo,busquedaCategoria) => {
        if (buscaTipo ==='POR_TITULO'){
           return filtrarItemsPorTitulo(items,busquedaTitulo)
        }
        if (buscaTipo ==='POR_CATEGORIA'){
            return filtrarItemsPorCategoria(items,busquedaCategoria)
        }
        if (buscaTipo === 'POR_TITULO_Y_CATEGORIA') {
            const itemsFiltradosPorCategoria = filtrarItemsPorCategoria(items, busquedaCategoria);
            return itemsFiltradosPorCategoria.filter(item => item.titulo.toLowerCase().includes(busquedaTitulo.toLowerCase()));
          }

        if (!buscaTipo){
            return items
        }
    }

    useEffect(()=>{ 
        if (busquedaTitulo && busquedaCategoria) setFilteredItems(filtrarPor('POR_TITULO_Y_CATEGORIA',items,busquedaTitulo,busquedaCategoria))
        if (busquedaTitulo && !busquedaCategoria) setFilteredItems(filtrarPor('POR_TITULO',items,busquedaTitulo,busquedaCategoria))
        if (!busquedaTitulo && busquedaCategoria) setFilteredItems(filtrarPor('POR_CATEGORIA',items,busquedaTitulo,busquedaCategoria))
        if (!busquedaTitulo && !busquedaCategoria) setFilteredItems(filtrarPor(null,items,busquedaTitulo,busquedaCategoria))
    },[items, busquedaTitulo, busquedaCategoria])

    return(
        <CarroComprasContext.Provider value={{
            count,
            setCount,
            detalleProductoAbierto,
            detalleProductoCerrado,
            isDetalleProductoAbierto,
            productoAMostrar,
            setProductoAMostrar,
            productosEnCarrito,
            setProductosEnCarrito,
            isCheckoutSideMenuAbierto,
            checkoutSideMenuAbierto,
            checkoutSideMenuCerrado,
            pedido,
            setPedido,
            items,
            setItems,
            busquedaTitulo,
            setBusquedaTitulo,
            filteredItems,
            busquedaCategoria,
            setBusquedaCategoria
        }}>
            {children}
        </CarroComprasContext.Provider>
    )
}