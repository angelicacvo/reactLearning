# React Cheat Sheet

## Componente Básico

```tsx
export function MiComponente() {
  return <div>Hola</div>;
}
```

## Props

```tsx
interface Props {
  nombre: string;
  edad: number;
}

export function Saludo({ nombre, edad }: Props) {
  return <div>Hola {nombre}, tienes {edad} años</div>;
}

// Usar: <Saludo nombre="Ana" edad={25} />
```

## useState

```tsx
const [contador, setContador] = useState(0);
const [nombre, setNombre] = useState('');
const [usuario, setUsuario] = useState<User | null>(null);

// Actualizar
setContador(contador + 1);
setContador(prev => prev + 1);  // Mejor forma
setNombre('Juan');
setUsuario({ id: 1, name: 'Ana' });
```

## useEffect

```tsx
// Al montar
useEffect(() => {
  console.log('Componente montado');
}, []);

// Al cambiar variable
useEffect(() => {
  console.log('id cambió:', id);
}, [id]);

// Cleanup
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(timer);
}, []);
```

## Fetch de Datos

```tsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data))
    .finally(() => setLoading(false));
}, []);
```

## Formularios

```tsx
const [form, setForm] = useState({ name: '', email: '' });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(form);
};

return (
  <form onSubmit={handleSubmit}>
    <input 
      value={form.name}
      onChange={e => setForm({...form, name: e.target.value})}
    />
    <button type="submit">Enviar</button>
  </form>
);
```

## Listas

```tsx
const items = ['a', 'b', 'c'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

## Condicionales

```tsx
// If simple
{mostrar && <div>Visible</div>}

// If-else
{usuario ? <Dashboard /> : <Login />}

// Switch-case
{status === 'loading' && <Spinner />}
{status === 'error' && <Error />}
{status === 'success' && <Datos />}
```

## Eventos

```tsx
<button onClick={() => console.log('click')}>Click</button>
<input onChange={e => setValor(e.target.value)} />
<form onSubmit={handleSubmit}>
<div onMouseEnter={() => setHover(true)}>
```

## React Router

```tsx
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>

// Navegación
<Link to="/about">Ir a About</Link>

// Programática
const navigate = useNavigate();
navigate('/dashboard');
```

## Custom Hook

```tsx
function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usar
const [user, setUser] = useLocalStorage('user', null);
```

## Tipos Comunes

```tsx
interface User {
  id: number;
  name: string;
  email: string;
  active?: boolean;  // Opcional
}

type Status = 'idle' | 'loading' | 'success' | 'error';

interface ApiResponse<T> {
  data: T;
  message: string;
}
```
