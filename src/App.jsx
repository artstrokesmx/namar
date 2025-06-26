import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './paginas/Inicio';
import { Categorias } from './componentes/Categorias';
import { CarritoPagina } from './paginas/CarritoPagina';
import {DetalleProducto} from './paginas/DetalleProducto'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/namar/" element={<Inicio />} />
        <Route path="/categorias/:categoria" element={<Categorias />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<CarritoPagina />} />
      </Routes>
    </Router>
  );
}

export default App;