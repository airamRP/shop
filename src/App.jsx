
import './css/main.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nosotros } from './components/Nosotros'
import { Contacto } from './components/Contacto'
import { CardProvider } from './context/CardProvider'
import { Carrito } from './components/Carrito'

function App() {

  return (

    <CardProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>

      </BrowserRouter>
    </CardProvider>
  )
}

export default App
