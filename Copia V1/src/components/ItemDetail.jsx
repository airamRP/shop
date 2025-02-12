import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CardContext } from "../context/CardContext";

export function ItemDetail({ producto }) {

  const { carrito, agregarProducto, eliminarProducto, modificarCantidad } = useContext(CardContext)
  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {
    const existeProducto = carrito.find(prod => prod.id === producto.id)
    if (existeProducto) {
      setCantidad(existeProducto.cantidad)
    } else {
      setCantidad(0)
    }
      
  }, [producto.id, carrito])

  const handleIncrease = () => {
    // Todo: si cantidad > stock (nada / desactivar +)
    modificarCantidad(producto.id, cantidad + 1)
    // setCantidad(cantidad + 1)
  }

  const handleDecrease = () => {
    if (cantidad > 1) {
      modificarCantidad(producto.id, cantidad - 1)
    } else {
      eliminarProducto(producto.id)
    }
    // setCantidad(cantidad - 1)
  }

  const handleAgregar = () => {
    agregarProducto(producto, 1)
    // setCantidad(1)
  }

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={producto.imagen} alt={producto.nombre} />
        <div>
          <h3 className="titulo">{producto.nombre}</h3>
          <p className="descripcion">{producto.descripcion}</p>
          <p className="categoria">{producto.categoria?.nombre}</p>
          <p className="precio">${producto.precio}</p>
          <ItemCount
            cantidad={cantidad}
            increase={handleIncrease}
            decrease={handleDecrease}
            agregar={handleAgregar}
          />
        </div>
      </div>
    </div>
  )
}
