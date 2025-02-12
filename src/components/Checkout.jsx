import { useContext, useState } from "react"
import { CardContext } from "../context/CardContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export function Checkout() {
  const [pedidoId, setPedidoId] = useState('')

  const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext)

  const { register, handleSubmit } = useForm()

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    }

    const pedidosRef = collection(db, 'Pedidos')
    addDoc(pedidosRef, pedido)
      .then((doc) => {
        console.log('Pedido guardado')
        setPedidoId(doc.id)
        vaciarCarrito()
      })
  }

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Compra realizada</h1>
        <p>El id de su pedido es: {pedidoId}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>

      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Nombre"
          {...register('nombre')}
        />
        <input
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        <input
          type="phone"
          placeholder="Teléfono"
          {...register('telefono')}
        />
        <button className="enviar" type="submit">Comprar</button>
      </form>
    </div>
  )
}
