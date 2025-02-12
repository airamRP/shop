import { useState } from "react"

export function Contacto() {

  const [campos, setCampos] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    console.log(campos)
  }

  function handleCampos(e) {
    setCampos({
      ...campos,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleCampos}
          name="nombre"
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={handleCampos}
          name="email"
        />
        <input
          type="phone"
          placeholder="Teléfono"
          onChange={handleCampos}
          name="tfno"
        />
        <button className="enviar" type="submit">Enviar</button>
      </form>
    </div>
  )
}
