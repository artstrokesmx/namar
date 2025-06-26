import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import correcto de createRoot
import './estilos/index.css'; // Ruta corregida (sin ../src)
import App from './App';
import CarritoProviderWrapper from './providers/CarritoProvider';

// 1. Obtenemos el elemento root del DOM
const container = document.getElementById('root');

// 2. Creamos la raíz solo si el elemento existe
if (container) {
  const root = createRoot(container); // Usamos createRoot del import correcto
  
  // 3. Renderizamos la aplicación
  root.render(
    <StrictMode> {/* StrictMode ahora está siendo usado correctamente */}
      <CarritoProviderWrapper>
        <App />
      </CarritoProviderWrapper>
    </StrictMode>
  );
}