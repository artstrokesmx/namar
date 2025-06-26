import { CarritoProvider } from '../contextos/CarritoContext';

// Este componente solo envuelve children con el Provider
// para mantener compatibilidad con Fast Refresh
const CarritoProviderWrapper = ({ children }) => {
  return <CarritoProvider>{children}</CarritoProvider>;
};

export default CarritoProviderWrapper;