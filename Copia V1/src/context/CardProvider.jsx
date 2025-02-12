import { useEffect, useState } from "react"
import { CardContext } from "./CardContext"

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || []

export const CardProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const cantidadCarrito = () => carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  // Producto Detail
  const agregarProducto = (producto, cantidad) => {
    const nuevoProducto = { ...producto, cantidad }
    setCarrito([...carrito, nuevoProducto])
  }

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(prod => prod.id !== id)
    setCarrito(nuevoCarrito)
  }

  const modificarCantidad = (id, cantidad) => {
    const nuevoCarrito = [...carrito]
    const foundProduct = nuevoCarrito.find(prod => prod.id === id)
    foundProduct.cantidad = cantidad
    setCarrito(nuevoCarrito)
  }

  return (
    <CardContext.Provider value={
      {
        carrito,
        setCarrito,
        cantidadCarrito,
        precioTotal,
        vaciarCarrito,
        agregarProducto,
        eliminarProducto,
        modificarCantidad
      }
    }>
      {children}
    </CardContext.Provider>
  )
}