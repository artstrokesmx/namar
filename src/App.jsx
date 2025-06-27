import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import { Categorias } from './componentes/Categorias'
import { CarritoPagina } from './paginas/CarritoPagina'
import  {DetalleProducto } from './paginas/DetalleProducto'

function App() {
  return (
    <Router basename="/namar">
      <Routes>
        <Route index element={<Inicio />} /> {/* Ruta exacta para /namar/ */}
        <Route path="/" element={<Inicio />} />
        <Route path="/categorias/:categoria" element={<Categorias />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<CarritoPagina />} />
        <Route path="*" element={<Inicio />} /> {/* Fallback */}
      </Routes>
    </Router>
  )
}

export default App