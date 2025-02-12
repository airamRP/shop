import { useForm } from "react-hook-form" 

export function Contacto() {

  const {register, handleSubmit} = useForm()

  const enviar = (data) => {
    console.log('Enviado', data)
    
  }
  
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>

      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Nombre"
          {...register('nombre')}
        />
        <input
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        <input
          type="phone"
          placeholder="Teléfono"
          {...register('telefono')}
        />
        <button className="enviar" type="submit">Enviar</button>
      </form>
    </div>
  )
}
