# EMPEZAR AQUÍ - Guía Rápida

## Si es tu PRIMER proyecto React, ve a: CREAR_DESDE_CERO.md
## Si ya tienes este proyecto descargado, continúa aquí:

## 1. Levantar el Proyecto

```bash
cd c:\Users\angie\Desktop\EstudioAutonomo\React\secondProject
npm install
npm run dev
```

Abre: http://localhost:5173

## 2. Credenciales de Login

- **Admin**: admin@empresa.com / admin123
- **Usuario**: user@empresa.com / user123

## 3. Estructura del Proyecto

```
src/
├── App.tsx              # Router principal
├── pages/              # Páginas de la app
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── ProjectsPage.tsx
│   ├── TeamPage.tsx
│   └── AdminPage.tsx
├── components/
│   └── Layout/         # Navbar + estructura
└── hooks/
    └── useFetch.ts     # Para llamadas API
```

## 4. Comandos Importantes

```bash
npm run dev          # Iniciar servidor
npm run build        # Compilar para producción
npm run preview      # Ver versión de producción
npm install [paquete] # Instalar dependencia
```

## 5. Conectar con Backend

### En tu componente:
```tsx
import { useFetch } from '../hooks/useFetch';

function MiComponente() {
  const { data, loading, error } = useFetch<TuTipo>('http://tu-backend/api/endpoint');
  
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{/* Usa data aquí */}</div>;
}
```

### Alternativa con fetch directo:
```tsx
const enviarDatos = async () => {
  const response = await fetch('http://tu-backend/api/endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dato: 'valor' })
  });
  const resultado = await response.json();
};
```

## 6. Agregar Nueva Página

1. Crea archivo: `src/pages/MiPagina.tsx`
```tsx
export function MiPagina() {
  return <div>Mi Contenido</div>;
}
```

2. Agrega ruta en `App.tsx`:
```tsx
import { MiPagina } from './pages/MiPagina';

// Dentro de <Routes>:
<Route path="mi-ruta" element={<MiPagina />} />
```

3. Agrega al navbar en `Layout.tsx`:
```tsx
<NavLink to="/mi-ruta">Mi Página</NavLink>
```

## 7. Variables de Entorno

Crea `.env`:
```
VITE_API_URL=http://localhost:3000
```

Úsalas:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 8. Solución Rápida a Errores

- **Puerto ocupado**: Ctrl+C y `npm run dev` de nuevo
- **Módulo no encontrado**: `npm install`
- **Cambios no se ven**: Refresca navegador con Ctrl+F5
- **CORS en backend**: Asegúrate de tener `cors` habilitado

## 9. Deploy

```bash
npm run build
# Los archivos están en /dist
# Sube esa carpeta a tu hosting
```
