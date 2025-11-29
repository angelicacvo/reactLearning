# Crear Proyecto React desde Cero - Guía Completa

## Paso 1: Instalar Node.js

1. Ve a https://nodejs.org
2. Descarga la versión LTS
3. Instala (Next, Next, Next)
4. Verifica en terminal:
```bash
node --version
npm --version
```

## Paso 2: Crear Proyecto

```bash
# Navegar a tu carpeta
cd C:\Users\TuUsuario\Desktop

# Crear proyecto con Vite
npm create vite@latest mi-proyecto -- --template react-ts

# Entrar al proyecto
cd mi-proyecto

# Instalar dependencias
npm install

# Abrir en VSCode
code .
```

## Paso 3: Instalar Dependencias Esenciales

```bash
# React Router (navegación entre páginas)
npm install react-router-dom

# Material-UI (componentes bonitos)
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

# Opcional - Axios (alternativa a fetch)
npm install axios
```

## Paso 4: Estructura de Carpetas

Crea esta estructura en `src/`:
```
src/
├── App.tsx
├── App.css
├── main.tsx
├── index.css
├── components/
│   └── Layout/
│       ├── Layout.tsx
│       └── Layout.css
├── pages/
│   ├── LoginPage.tsx
│   ├── LoginPage.css
│   ├── DashboardPage.tsx
│   └── DashboardPage.css
├── services/
│   └── api.ts
└── hooks/
    └── useFetch.ts
```

## Paso 5: Configurar Router

En `src/App.tsx`:
```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          user ? <Navigate to="/dashboard" /> : <LoginPage onLogin={setUser} />
        } />
        <Route path="/dashboard" element={
          user ? <DashboardPage user={user} /> : <Navigate to="/login" />
        } />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Paso 6: Crear Página de Login

En `src/pages/LoginPage.tsx`:
```tsx
import { useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: (user: any) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock - Luego conectarás con tu backend
    if (email && password) {
      onLogin({ 
        id: 1, 
        name: 'Usuario', 
        email 
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
```

En `src/pages/LoginPage.css`:
```css
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  width: 100%;
  max-width: 400px;
}

.login-form h1 {
  margin-bottom: 24px;
  text-align: center;
}

.login-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.login-form button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
}

.login-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
```

## Paso 7: Crear Dashboard

En `src/pages/DashboardPage.tsx`:
```tsx
import './DashboardPage.css';

interface DashboardPageProps {
  user: any;
}

export function DashboardPage({ user }: DashboardPageProps) {
  return (
    <div className="dashboard">
      <h1>Bienvenido, {user?.name}</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>10</h3>
          <p>Proyectos</p>
        </div>
        <div className="stat-card">
          <h3>25</h3>
          <p>Tareas</p>
        </div>
        <div className="stat-card">
          <h3>5</h3>
          <p>Usuarios</p>
        </div>
      </div>
    </div>
  );
}
```

En `src/pages/DashboardPage.css`:
```css
.dashboard {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard h1 {
  margin-bottom: 32px;
  color: #1f2937;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.stat-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
}

.stat-card h3 {
  font-size: 48px;
  margin-bottom: 8px;
  color: #667eea;
}

.stat-card p {
  color: #6b7280;
  font-size: 16px;
}
```

## Paso 8: Limpiar CSS Global

En `src/index.css`:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: #f3f4f6;
}
```

En `src/App.css`:
```css
#root {
  width: 100%;
  min-height: 100vh;
}
```

## Paso 9: Ejecutar Proyecto

```bash
npm run dev
```

Abre: http://localhost:5173

## Paso 10: Git (Opcional pero Recomendado)

```bash
git init
git add .
git commit -m "Initial commit"

# Crear repo en GitHub y luego:
git remote add origin URL_DE_TU_REPO
git push -u origin main
```

## Siguiente: Conectar con Backend

Una vez que tengas esto funcionando, sigue con `CONECTAR_BACKEND.md`

## Checklist

- [ ] Node.js instalado
- [ ] Proyecto creado con Vite
- [ ] Dependencias instaladas
- [ ] Estructura de carpetas creada
- [ ] Router configurado
- [ ] LoginPage funcional
- [ ] DashboardPage funcional
- [ ] CSS aplicado
- [ ] Proyecto corriendo en localhost:5173
- [ ] Git inicializado (opcional)
