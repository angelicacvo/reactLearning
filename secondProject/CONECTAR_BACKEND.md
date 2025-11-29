# Conectar React con Backend - Guía Práctica

## Paso 1: Configurar Variables de Entorno

Crea archivo `.env` en la raíz:
```
VITE_API_URL=http://localhost:3000/api
```

## Paso 2: Crear Servicio de API

Crea `src/services/api.ts`:
```tsx
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
  // GET
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  },

  // POST
  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  },

  // PUT
  async put<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  },

  // DELETE
  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  }
};
```

## Paso 3: Usar en Componentes

### Ejemplo 1: Obtener Datos
```tsx
import { useState, useEffect } from 'react';
import { api } from '../services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<User[]>('/users')
      .then(data => setUsers(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando...</div>;
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### Ejemplo 2: Enviar Datos (Formulario)
```tsx
const [formData, setFormData] = useState({ name: '', email: '' });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const result = await api.post('/users', formData);
    console.log('Usuario creado:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <input 
      value={formData.name}
      onChange={e => setFormData({...formData, name: e.target.value})}
    />
    <button type="submit">Enviar</button>
  </form>
);
```

### Ejemplo 3: Actualizar
```tsx
const actualizarUsuario = async (id: number, datos: any) => {
  try {
    await api.put(`/users/${id}`, datos);
    alert('Actualizado');
  } catch (error) {
    console.error(error);
  }
};
```

### Ejemplo 4: Eliminar
```tsx
const eliminarUsuario = async (id: number) => {
  try {
    await api.delete(`/users/${id}`);
    alert('Eliminado');
  } catch (error) {
    console.error(error);
  }
};
```

## Paso 4: Manejar Autenticación

### Login
```tsx
const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  } catch (error) {
    console.error('Login falló:', error);
  }
};
```

### Agregar Token a Requests
Modifica `api.ts`:
```tsx
const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Usa getHeaders() en lugar de headers fijo
async post<T>(endpoint: string, data: any): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  // ...resto igual
}
```

## Paso 5: Configurar CORS en Backend

### Express.js:
```javascript
const cors = require('cors');
app.use(cors());
```

### NestJS:
```typescript
// main.ts
app.enableCors();
```

## Paso 6: Proxy para Desarrollo (Alternativa)

En `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
});
```

Ahora puedes usar `/api/users` en lugar de `http://localhost:3000/api/users`

## Checklist de Conexión

- [ ] Backend corriendo
- [ ] CORS habilitado en backend
- [ ] Variables de entorno configuradas
- [ ] Servicio API creado
- [ ] Endpoints funcionando en Postman/Thunder Client
- [ ] Frontend puede hacer fetch a backend
