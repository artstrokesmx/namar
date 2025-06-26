import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import { Categorias } from './componentes/Categorias'
import { CarritoPagina } from './paginas/CarritoPagina'
import { Navegacion } from './componentes/Navegacion'

function App() {
  return (
    <Router basename="/namar">
      <Navegacion />
      <Routes>
        <Route index element={<Inicio />} /> {/* Ruta exacta para /namar/ */}
        <Route path="/" element={<Inicio />} />
        <Route path="/categorias/:categoria" element={<Categorias />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<CarritoPagina />} />
        <Route path="*" element={<Inicio />} /> {/* Fallback */}
      </Routes>
    </Router>
  )
}

export default App