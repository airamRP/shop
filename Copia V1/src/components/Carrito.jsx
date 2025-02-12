import { useContext, Fragment } from "react"
import { CardContext } from "../context/CardContext"

export function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext)

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {
        carrito.map((prod) => (
          <Fragment key={prod.id}>
            <p>Id: {prod.id}</p>
            <h3>{prod.nombre}</h3>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total: $ {prod.precio * prod.cantidad}</p>
          </Fragment>
        ))
      }
      {
        carrito.length > 0 ?
          <>
            <h2>Precio total: {precioTotal()}</h2>
            <button onClick={() => vaciarCarrito()}>Vaciar</button>
          </> :
          <h4>El carrito está vaío</h4>


      }

    </div>
  )
}
