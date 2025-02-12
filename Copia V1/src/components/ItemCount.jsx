export default function ItemCount({cantidad, increase, decrease, agregar}) {
  
  return (
    <>
    {
      cantidad ? 
        <div className="item-count">
        <button onClick={decrease}>-</button>
        <p>{cantidad}</p>
        <button onClick={increase}>+</button>
      </div>
      : 
        <button className="agregar-al-carrito" onClick={agregar}>Agregar al carrito</button>
    }
    </>
  )
}
