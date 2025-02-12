import { toCapital } from "../logic/toCapital"
import { Item } from "./Item"

export function ItemList({ productos, categoria }) {
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(categoria)}</h2>
      <div className="productos">
        {
          productos.map((producto) => {
            return (
              <Item key={producto.id} producto={producto} />
            )
          })
        }
      </div>
    </div>
  )
}
