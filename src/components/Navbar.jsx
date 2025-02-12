import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const Navbar = () => {
  return (
    <nav className="nav header">
      <Link to='/' className="logo"><h1>Logo</h1></Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link className="menu-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="menu-link" to="/productos">Productos</Link>
        </li>

        <li className="nav-item">
          <Link className="menu-link" to="/productos/ropa">Ropa</Link>
        </li>

        <li className="nav-item">
          <Link className="menu-link" to="/productos/accesorios">Accesorios</Link>
        </li>

        <li className="nav-item">
          <Link className="menu-link" to="/productos/tecnología">Tecnología</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="menu-link" to="/nosotros">Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link className="menu-link" to="/contacto">Contacto</Link>
        </li> */}
        <li><CartWidget /></li>
      </ul>
    </nav>

  )
}
