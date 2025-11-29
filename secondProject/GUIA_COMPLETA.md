# GUÍA COMPLETA - TODO LO QUE NECESITAS SABER

## ÍNDICE
1. [Crear Proyecto desde Cero](#1-crear-proyecto-desde-cero)
2. [Instalar Librerías](#2-instalar-librerías)
3. [Estructura de Carpetas](#3-estructura-de-carpetas)
4. [Configurar App.tsx](#4-configurar-apptsx)
5. [Crear Componentes](#5-crear-componentes)
6. [Material-UI](#6-material-ui)
7. [Páginas](#7-páginas)
8. [Conectar Backend](#8-conectar-backend)
9. [Deploy](#9-deploy)

---

## 1. CREAR PROYECTO DESDE CERO

```bash
# Abrir terminal y navegar a tu carpeta
cd C:\Users\TuUsuario\Desktop

# Crear proyecto
npm create vite@latest mi-app -- --template react-ts

# Entrar y instalar
cd mi-app
npm install

# Abrir VSCode
code .
```

---

## 2. INSTALAR LIBRERÍAS

```bash
# React Router (navegación)
npm install react-router-dom

# Material-UI (componentes UI)
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

# Axios (opcional, para APIs)
npm install axios
```

---

## 3. ESTRUCTURA DE CARPETAS

Crea esta estructura dentro de `src/`:

```
src/
├── App.tsx
├── App.css
├── main.tsx
├── index.css
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx
│   │   └── Layout.css
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   └── Card/
│       ├── Card.tsx
│       └── Card.css
├── pages/
│   ├── LoginPage.tsx
│   ├── LoginPage.css
│   ├── DashboardPage.tsx
│   ├── DashboardPage.css
│   ├── ProjectsPage.tsx
│   ├── ProjectsPage.css
│   ├── TeamPage.tsx
│   ├── TeamPage.css
│   ├── AdminPage.tsx
│   └── AdminPage.css
├── services/
│   └── api.ts
├── hooks/
│   └── useFetch.ts
└── types/
    └── index.ts
```

---

## 4. CONFIGURAR APP.TSX

```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { AdminPage } from './pages/AdminPage';
import { Layout } from './components/Layout/Layout';
import './App.css';

function App() {
  const [user, setUser] = useState<any>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          user ? <Navigate to="/dashboard" /> : <LoginPage onLogin={setUser} />
        } />
        
        <Route path="/" element={
          user ? <Layout user={user} onLogout={() => setUser(null)} /> : <Navigate to="/login" />
        }>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage user={user} />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          {user?.role === 'admin' && <Route path="admin" element={<AdminPage />} />}
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**App.css:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #fafafa;
}

#root {
  width: 100%;
  min-height: 100vh;
}
```

---

## 5. CREAR COMPONENTES

### 5.1 Layout (Navbar + Contenido)

**src/components/Layout/Layout.tsx:**
```tsx
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  user: any;
  onLogout: () => void;
}

export function Layout({ user, onLogout }: LayoutProps) {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">
          <span>📊</span>
          <span>Mi App</span>
        </div>
        
        <div className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/team">Equipo</NavLink>
          {user?.role === 'admin' && (
            <NavLink to="/admin">Admin</NavLink>
          )}
        </div>

        <div className="nav-user">
          <span>{user?.name}</span>
          <button onClick={onLogout}>Salir</button>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
```

**src/components/Layout/Layout.css:**
```css
.layout {
  min-height: 100vh;
  background: #f3f4f6;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 20px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-links a {
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.15);
}

.nav-links a.active {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

.nav-user {
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
}

.nav-user button {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.main-content {
  padding: 24px 40px;
  max-width: 100%;
}
```

### 5.2 Componente Reutilizable (Card)

**src/components/Card/Card.tsx:**
```tsx
import './Card.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
```

**src/components/Card/Card.css:**
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card-title {
  font-size: 18px;
  color: #1f2937;
  margin-bottom: 16px;
}

.card-content {
  color: #6b7280;
}
```

---

## 6. MATERIAL-UI

### 6.1 Importar Componentes

```tsx
import { 
  Button, 
  TextField, 
  Card, 
  CardContent,
  Typography,
  Box,
  Grid,
  Chip,
  Avatar,
  IconButton
} from '@mui/material';
```

### 6.2 Importar Iconos

```tsx
import { 
  Add, 
  Delete, 
  Edit, 
  Search,
  TrendingUp,
  People
} from '@mui/icons-material';
```

### 6.3 Ejemplos de Uso

**Button:**
```tsx
<Button 
  variant="contained" 
  startIcon={<Add />}
  onClick={() => console.log('click')}
>
  Crear
</Button>
```

**TextField:**
```tsx
<TextField
  label="Nombre"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  fullWidth
/>
```

**Card de Material-UI:**
```tsx
<Card sx={{ borderRadius: 3, boxShadow: 2 }}>
  <CardContent>
    <Typography variant="h6">Título</Typography>
    <Typography variant="body2">Contenido</Typography>
  </CardContent>
</Card>
```

**Box (contenedor flexible):**
```tsx
<Box sx={{ 
  display: 'flex', 
  gap: 2, 
  padding: 3,
  backgroundColor: '#f5f5f5'
}}>
  Contenido
</Box>
```

**Chip (etiquetas):**
```tsx
<Chip label="Activo" color="success" size="small" />
<Chip label="Pendiente" color="warning" />
```

**Avatar:**
```tsx
<Avatar sx={{ bgcolor: '#667eea' }}>AG</Avatar>
```

---

## 7. PÁGINAS

### 7.1 LoginPage

**src/pages/LoginPage.tsx:**
```tsx
import { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: (user: any) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock login - luego conectarás con backend
    setTimeout(() => {
      if (email === 'admin@empresa.com') {
        onLogin({ 
          id: 1, 
          name: 'Admin', 
          email, 
          role: 'admin' 
        });
      } else {
        onLogin({ 
          id: 2, 
          name: 'Usuario', 
          email, 
          role: 'user' 
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <Card sx={{ maxWidth: 400, width: '100%', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 700 }}>
            Login
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              sx={{ mb: 3 }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              disabled={loading}
              sx={{ 
                py: 1.5,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}
            >
              {loading ? 'Cargando...' : 'Entrar'}
            </Button>
          </form>

          <Box sx={{ mt: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="caption" sx={{ display: 'block' }}>
              Demo: admin@empresa.com / admin123
            </Typography>
            <Typography variant="caption">
              user@empresa.com / user123
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
```

**src/pages/LoginPage.css:**
```css
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}
```

### 7.2 DashboardPage

**src/pages/DashboardPage.tsx:**
```tsx
import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Chip, Avatar } from '@mui/material';
import { TrendingUp, Assignment, People, CalendarToday, Add } from '@mui/icons-material';
import './DashboardPage.css';

interface DashboardPageProps {
  user: any;
}

export function DashboardPage({ user }: DashboardPageProps) {
  const [stats] = useState([
    { icon: <Assignment />, value: 12, label: 'Proyectos', color: '#1976d2', trend: '+8%' },
    { icon: <People />, value: 24, label: 'Equipo', color: '#2e7d32', trend: '+3' },
    { icon: <CalendarToday />, value: 5, label: 'Deadlines', color: '#ed6c02', trend: '2 días' },
  ]);

  return (
    <Box className="dashboard">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Bienvenido, {user?.name} 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Resumen de tus proyectos y actividades
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Add />}
          sx={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            px: 3
          }}
        >
          Nuevo Proyecto
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 3, mb: 4 }}>
        {stats.map((stat, index) => (
          <Card key={index} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ bgcolor: `${stat.color}15`, p: 1.5, borderRadius: 2, color: stat.color }}>
                  {stat.icon}
                </Box>
                <Chip 
                  label={stat.trend} 
                  size="small" 
                  icon={<TrendingUp sx={{ fontSize: 16 }} />}
                  sx={{ bgcolor: '#d1fae5', color: '#065f46' }}
                />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mt: 2, mb: 0.5 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>Actividad Reciente</Typography>
          {[1, 2, 3].map((_, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Avatar sx={{ bgcolor: '#667eea' }}>U</Avatar>
              <Box>
                <Typography variant="body2">
                  <strong>Usuario</strong> completó una tarea
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Hace {i + 1} hora{i > 0 ? 's' : ''}
                </Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
```

**src/pages/DashboardPage.css:**
```css
.dashboard {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 7.3 ProjectsPage (Lista con fetch)

**src/pages/ProjectsPage.tsx:**
```tsx
import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Chip, TextField, InputAdornment } from '@mui/material';
import { Add, Search } from '@mui/icons-material';

interface Project {
  id: number;
  name: string;
  status: string;
  progress: number;
}

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data - luego fetch real
    setTimeout(() => {
      setProjects([
        { id: 1, name: 'Proyecto A', status: 'En Progreso', progress: 75 },
        { id: 2, name: 'Proyecto B', status: 'Completado', progress: 100 },
        { id: 3, name: 'Proyecto C', status: 'Planificación', progress: 30 },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Cargando...</div>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Proyectos
        </Typography>
        <Button variant="contained" startIcon={<Add />}>
          Crear Proyecto
        </Button>
      </Box>

      <TextField
        placeholder="Buscar proyectos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
        {filteredProjects.map(project => (
          <Card key={project.id} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {project.name}
              </Typography>
              <Chip 
                label={project.status} 
                size="small" 
                color={project.progress === 100 ? 'success' : 'primary'}
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                Progreso: {project.progress}%
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
```

---

## 8. CONECTAR BACKEND

### 8.1 Crear Servicio API

**src/services/api.ts:**
```tsx
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      }
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  },

  async post<T>(endpoint: string, data: any): Promise<T> {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  }
};
```

### 8.2 Usar en Componentes

```tsx
import { api } from '../services/api';

// En useEffect
useEffect(() => {
  api.get<Project[]>('/projects')
    .then(data => setProjects(data))
    .catch(error => console.error(error));
}, []);

// En función
const crearProyecto = async (datos: any) => {
  try {
    const result = await api.post('/projects', datos);
    console.log('Creado:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## 9. DEPLOY

### Vercel (Recomendado)
```bash
npm run build
# Sube la carpeta dist/ a vercel.com
```

### Netlify
```bash
npm run build
# Arrastra carpeta dist/ a netlify.com
```

---

## COMANDOS RÁPIDOS

```bash
npm run dev          # Iniciar desarrollo
npm run build        # Compilar
npm install paquete  # Agregar librería
git add .            # Git add
git commit -m "msg"  # Git commit
git push             # Git push
```

---

## CHECKLIST COMPLETO

- [ ] Node.js instalado
- [ ] Proyecto creado
- [ ] Dependencias instaladas
- [ ] Estructura de carpetas
- [ ] App.tsx configurado
- [ ] Layout creado
- [ ] LoginPage funcional
- [ ] DashboardPage con stats
- [ ] ProjectsPage con lista
- [ ] Material-UI funcionando
- [ ] CSS aplicado
- [ ] Backend conectado (opcional)
- [ ] Deploy hecho
