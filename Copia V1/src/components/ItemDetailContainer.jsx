import { useEffect, useState } from "react"
import { pedirItemPorId } from "../logic/pedirDatos"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const id = useParams().id

  useEffect(() => {
    pedirItemPorId(Number(id))
      .then(res => setProducto(res))
  }, [id])

  return (
    <>
      {producto && <ItemDetail producto={producto} />}
    </>
  )
}
