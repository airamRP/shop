import { createContext } from "react";

export const CardContext = createContext()

/* export const CardProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const cantidadCarrito = () => carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }


  return (
    <CardContext.Provider value={{ carrito, setCarrito, cantidadCarrito, precioTotal, vaciarCarrito }}>
      {children}
    </CardContext.Provider>
  )
} */