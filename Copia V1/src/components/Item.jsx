import { Link } from "react-router-dom";


export function Item({ producto }) {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <div>
        <h4>{producto.nombre}</h4>

        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria.nombre}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}
