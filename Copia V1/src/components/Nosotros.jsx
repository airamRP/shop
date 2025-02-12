import { useEffect } from "react"

export function Nosotros() {

  useEffect(() => {
    const clickear = () => {
      console.log('click')
    }

    window.addEventListener('click', clickear)

    return () => {
      window.removeEventListener('click', clickear)
    }
  }, [])


  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Esta es el componente Nosotros</p>
    </div>
  )
}
