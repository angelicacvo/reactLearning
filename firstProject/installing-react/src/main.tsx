import { StrictMode } from 'react'
// createRootimporta la base de react (ES EL ROOT, 
// se conecta directamente con el index.html)
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //Modo estricto para controlar la manera en 
  // la que funcionan los componentes
  // Crea componente, lo renderiza y lo vuelve a cargar
  <StrictMode>
    {/* renderiza el componente App (SPA) */}
    <App />
  </StrictMode>,
)
