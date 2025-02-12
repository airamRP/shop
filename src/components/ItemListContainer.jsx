import { useEffect, useState } from "react"
// import { pedirDatos } from "../logic/pedirDatos"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export function ItemListContainer() {
  const [productos, setProductos] = useState([])

  const categoria = useParams().categoria
  const tituloCategoria = categoria ?? 'Productos'

  useEffect(() => {
    const productosRef = collection(db, 'Shop')
    // const q = query(productosRef, where('categoria.id', '==', categoria))
    const q = categoria ?
      query(productosRef, where('categoria.id', '==', categoria)) :
      productosRef
    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      setProductos(data)
    })

    /* const productosRef = collection(db, 'Shop')

    getDocs(productosRef).then((querySnapshot) => {
      console.log(querySnapshot)
    }) */
    /* const documentos = querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    if (categoria) {
      const productosFiltrados = documentos.filter(doc => doc.categoria === categoria)
      setProductos(productosFiltrados)
    } else {
      setProductos(documentos */

  }, [categoria])


  return (
    <div className="item-list-container">
      <ItemList productos={productos} categoria={tituloCategoria} />
    </div>
  )
}
