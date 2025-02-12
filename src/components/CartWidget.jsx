import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../context/CardContext'

export function CartWidget() {
  const {cantidadCarrito} = useContext(CardContext)

  return (
    <Link className="menu-link" to="/carrito">
      Carrito
      <span className='carrito'> {cantidadCarrito()}</span>
    </Link>
  )
}
