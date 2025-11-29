# Plan para Mañana - Conectar Frontend + Backend

## Antes de Empezar (10 min)

1. Asegúrate que el backend esté corriendo
2. Prueba los endpoints en Postman/Thunder Client
3. Anota las URLs de tu backend

## Paso 1: Configurar Conexión (15 min)

### 1.1 Variables de Entorno
```bash
# Crear archivo .env en raíz del proyecto
echo VITE_API_URL=http://localhost:TU_PUERTO/api > .env
```

### 1.2 Crear Servicio API
Copia el código de `CONECTAR_BACKEND.md` sección "Paso 2" en `src/services/api.ts`

### 1.3 Habilitar CORS en Backend
```typescript
// main.ts (NestJS)
app.enableCors();
```

## Paso 2: Conectar Login (20 min)

En `src/pages/LoginPage.tsx`, reemplaza el mock por:

```tsx
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) throw new Error('Login falló');
    
    const data = await response.json();
    localStorage.setItem('token', data.token);
    onLogin(data.user);
  } catch (error) {
    alert('Error en login');
  } finally {
    setLoading(false);
  }
};
```

## Paso 3: Conectar Dashboard (30 min)

### 3.1 Obtener Proyectos Reales
```tsx
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/projects`, {
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  })
    .then(res => res.json())
    .then(data => setProjects(data))
    .catch(err => console.error(err));
}, []);
```

### 3.2 Obtener Estadísticas
```tsx
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/dashboard/stats`, {
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  })
    .then(res => res.json())
    .then(data => setStats(data));
}, []);
```

## Paso 4: CRUD de Proyectos (40 min)

### 4.1 Crear Proyecto
```tsx
const crearProyecto = async (proyecto: any) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(proyecto)
  });
  return response.json();
};
```

### 4.2 Actualizar Proyecto
```tsx
const actualizarProyecto = async (id: number, datos: any) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(datos)
  });
  return response.json();
};
```

### 4.3 Eliminar Proyecto
```tsx
const eliminarProyecto = async (id: number) => {
  await fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
};
```

## Paso 5: Manejo de Errores (15 min)

Envuelve todas las llamadas en try-catch:

```tsx
try {
  // tu fetch aquí
} catch (error) {
  console.error('Error:', error);
  alert('Algo salió mal');
}
```

## Paso 6: Testing (20 min)

1. Probar login con usuario real
2. Verificar que se muestre el dashboard con datos reales
3. Crear un proyecto nuevo
4. Editar un proyecto
5. Eliminar un proyecto
6. Probar con usuario sin permisos admin

## Checklist Final

- [ ] Backend corriendo
- [ ] CORS habilitado
- [ ] .env configurado
- [ ] Login funcional
- [ ] Dashboard muestra datos reales
- [ ] Puedes crear proyectos
- [ ] Puedes editar proyectos
- [ ] Puedes eliminar proyectos
- [ ] Errores se manejan bien
- [ ] Token se guarda en localStorage

## Si Algo Falla

1. Abre DevTools (F12) → Console
2. Ve a Network tab
3. Busca requests fallidos (en rojo)
4. Click en el request → Headers → ver detalles del error
5. Verifica que el endpoint y método sean correctos
