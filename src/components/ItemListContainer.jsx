import { useEffect, useState } from "react"
import { pedirDatos } from "../logic/pedirDatos"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"


export function ItemListContainer() {
  const [productos, setProductos] = useState([])

  const categoria = useParams().categoria
  const tituloCategoria = categoria ?? 'Productos'

  useEffect(() => {
    pedirDatos()
      .then(res => {
        if (categoria) {
          setProductos(res.filter(producto =>
            producto.categoria.nombre.toUpperCase() === categoria.toUpperCase()))
        } else {
          setProductos(res)
        }
      })
  }, [categoria])


  return (
    <div className="item-list-container">
      <ItemList productos={productos} categoria={tituloCategoria} />
    </div>
  )
}
