import { useState } from "react"

export function Contacto() {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(nombre, email)
  }

  function handleNombre(e) {
    setNombre(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleNombre}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={handleEmail}
        />
        <button className="enviar" type="submit">Enviar</button>
      </form>
    </div>
  )
}
