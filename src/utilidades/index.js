/**
 * Esta función calcula el precio total de una nueva order
 * @param {Array} productos productos en carrito: arrya de objetos 
 * @returns {number} Precio Total
 */
export const precioTotal = (productos) =>{
    let suma = 0
    productos.forEach(producto => suma += producto.precio)
    return suma
}