# 🚀 GUÍA COMPLETA DE REACT DESDE CERO

> **¡Bienvenida!** Esta es tu guía paso a paso para aprender React con TypeScript. No necesitas saber nada de React para empezar. Vamos a ir muy despacio y explicando todo.

---

## 🎯 INICIO RÁPIDO

**¿Primera vez aquí?** 👉 Abre **[EMPEZAR_AQUI.md](./EMPEZAR_AQUI.md)** o **[INDICE.md](./INDICE.md)** para ver rutas de aprendizaje adaptadas a tu nivel.

**¿Necesitas consultar algo específico?** 👉 Revisa la tabla de contenidos abajo.

---

## 📋 TABLA DE CONTENIDOS

1. [¿Qué es React?](#-qué-es-react)
2. [Requisitos Previos](#-requisitos-previos)
3. [Paso 1: Instalación de Node.js](#-paso-1-instalación-de-nodejs)
4. [Paso 2: Crear tu Primer Proyecto de React](#-paso-2-crear-tu-primer-proyecto-de-react)
5. [Paso 3: Estructura del Proyecto](#-paso-3-estructura-del-proyecto)
6. [Paso 4: Ejecutar la Aplicación](#-paso-4-ejecutar-la-aplicación)
7. [Paso 5: Entender los Archivos Principales](#-paso-5-entender-los-archivos-principales)
8. [Paso 6: Crear tu Primer Componente](#-paso-6-crear-tu-primer-componente)
9. [Paso 7: Trabajar con Props](#-paso-7-trabajar-con-props)
10. [Paso 8: Usar Estado (useState)](#-paso-8-usar-estado-usestate)
11. [Paso 9: Hacer Peticiones a APIs (useEffect)](#-paso-9-hacer-peticiones-a-apis-useeffect)
12. [Paso 10: Crear Hooks Personalizados](#-paso-10-crear-hooks-personalizados)
13. [Paso 11: Estilos en React](#-paso-11-estilos-en-react)
14. [Comandos Importantes](#-comandos-importantes)
15. [Solución de Problemas Comunes](#-solución-de-problemas-comunes)
16. [Recursos Adicionales](#-recursos-adicionales)

---

## 🤔 ¿Qué es React?

**React** es una biblioteca de JavaScript para crear interfaces de usuario (páginas web interactivas). 

**¿Por qué es popular?**
- Componentizado: Divide la aplicación en piezas pequeñas y reutilizables
- Reactivo: Actualización automática cuando cambian los datos
- Comunidad grande: Muchos recursos y ayuda disponible

**¿Qué es TypeScript?**
- Es JavaScript con "superpoderes". Te ayuda a detectar errores antes de ejecutar el código.
- VS Code te ayudará sugiriendo código mientras escribes.

---

## Requisitos

### Instalación necesaria:

1. **Node.js** (versión 18 o superior)
2. **npm** (viene con Node.js)
3. **Visual Studio Code** (o cualquier editor de código)

### ✅ Conocimientos previos (no te asustes, con lo básico alcanza):

- HTML básico (etiquetas como `<div>`, `<h1>`, `<button>`)
- CSS básico (colores, tamaños)
- JavaScript básico (variables, funciones, arrays)

---

## 🔧 PASO 1: INSTALACIÓN DE NODE.JS

### ¿Qué es Node.js?
Es un programa que permite ejecutar JavaScript fuera del navegador. Lo necesitas para usar las herramientas de React.

### ¿Cómo instalarlo?

1. **Ve a**: [https://nodejs.org/](https://nodejs.org/)
2. **Descarga** la versión **LTS** (Long Term Support) - es la más estable
3. **Ejecuta el instalador** y sigue los pasos (Next, Next, Install)
4. **Verifica la instalación**:

   Abre PowerShell (o tu terminal) y escribe:

   ```powershell
   node --version
   ```

   Deberías ver algo como: `v20.10.0` (tu versión puede variar)

   Luego verifica npm:

   ```powershell
   npm --version
   ```

   Deberías ver algo como: `10.2.3`

✅ **Si ves esos números, ¡genial! Node.js está instalado.**

---

## 🎯 PASO 2: CREAR TU PRIMER PROYECTO DE REACT

### ¿Qué vamos a hacer?
Vamos a usar **Vite**, una herramienta moderna que crea proyectos de React súper rápido.

### Comandos paso a paso:

#### 1️⃣ Abre PowerShell o tu Terminal

#### 2️⃣ Navega a la carpeta donde quieres crear el proyecto

```powershell
cd C:\Users\TuUsuario\Desktop
```

> **💡 Tip**: Cambia `TuUsuario` por tu nombre de usuario de Windows.

#### 3️⃣ Crea el proyecto con este comando:

```powershell
npm create vite@latest mi-app-react -- --template react-ts
```

**¿Qué significa este comando?**
- `npm create vite@latest`: Usa Vite para crear un proyecto nuevo
- `mi-app-react`: El nombre de tu proyecto (puedes cambiarlo)
- `--template react-ts`: Queremos React con TypeScript

#### 4️⃣ Entra a la carpeta del proyecto:

```powershell
cd mi-app-react
```

#### 5️⃣ Instala las dependencias (librerías necesarias):

```powershell
npm install
```

Este comando descarga todas las librerías que React necesita. Puede tardar 1-2 minutos.

✅ **¡Ya tienes tu proyecto creado!**

---

## 📁 PASO 3: ESTRUCTURA DEL PROYECTO

Cuando abres tu proyecto en VS Code, verás esta estructura:

```
mi-app-react/
├── node_modules/          👈 Librerías instaladas (NO tocar esta carpeta)
├── public/                👈 Archivos públicos (imágenes, favicon)
├── src/                   👈 ⭐ AQUÍ TRABAJARÁS (código de tu app)
│   ├── assets/           👈 Imágenes, iconos, fuentes
│   ├── components/       👈 Tus componentes reutilizables
│   ├── hooks/            👈 Hooks personalizados
│   ├── App.tsx           👈 Componente principal
│   ├── App.css           👈 Estilos del componente principal
│   ├── main.tsx          👈 Punto de entrada (NO tocar mucho)
│   └── index.css         👈 Estilos globales
├── index.html            👈 HTML base
├── package.json          👈 Info del proyecto y dependencias
├── tsconfig.json         👈 Configuración de TypeScript
└── vite.config.ts        👈 Configuración de Vite
```

### 🔍 Archivos más importantes:

| Archivo | ¿Para qué sirve? |
|---------|------------------|
| `src/main.tsx` | Es la puerta de entrada. Monta tu app en el HTML |
| `src/App.tsx` | Tu componente principal. Aquí construyes tu app |
| `src/components/` | Carpeta donde crearás tus componentes |
| `package.json` | Lista todas las librerías que usa tu proyecto |

---

## ▶️ PASO 4: EJECUTAR LA APLICACIÓN

### Comando para arrancar el servidor de desarrollo:

```powershell
npm run dev
```

**¿Qué pasa cuando ejecutas esto?**
1. Vite compila tu código
2. Abre un servidor local (normalmente en `http://localhost:5173`)
3. Abre tu navegador y verás tu aplicación funcionando
4. **HOT RELOAD**: Cada vez que guardes un archivo, la página se actualiza sola

### Para detener el servidor:
Presiona `Ctrl + C` en la terminal.

✅ **Si ves una página con el logo de React, ¡funcionó!**

---

## 📖 PASO 5: ENTENDER LOS ARCHIVOS PRINCIPALES

### 🔹 `src/main.tsx` - Punto de Entrada

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Este código "monta" tu aplicación en el HTML
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Explicación línea por línea:**
- Línea 1-4: Importamos las librerías y archivos necesarios
- Línea 7: Buscamos un elemento con `id="root"` en el HTML
- Línea 8: `<App />` es tu componente principal (se renderiza aquí)
- `StrictMode`: Modo estricto que ayuda a detectar problemas

> **⚠️ NO TOQUES ESTE ARCHIVO** a menos que sepas lo que haces.

---

### 🔹 `src/App.tsx` - Tu Componente Principal

```tsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Mi Primera App de React</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  )
}

export default App
```

**Explicación:**
- Línea 1: Importamos el hook `useState`
- Línea 4: Declaramos el componente `App` (es una función)
- Línea 5: Creamos una variable de estado `count` (empieza en 0)
- Línea 7-14: Retornamos JSX (código que parece HTML pero es JavaScript)
- Línea 17: Exportamos el componente para usarlo en otros archivos

---

## 🧩 PASO 6: CREAR TU PRIMER COMPONENTE

### ¿Qué es un componente?
Es una pieza reutilizable de tu interfaz. Por ejemplo: un botón, una tarjeta, un formulario.

### Ejemplo: Crear un componente Button

#### 1️⃣ Crea la carpeta y el archivo:

```
src/
  components/
    Button/
      Button.tsx
      Button.css
```

#### 2️⃣ En `Button.tsx`:

```tsx
// Definimos qué "propiedades" (props) recibe este componente
interface ButtonProps {
  label: string;          // El texto del botón
  onClick: () => void;    // La función que se ejecuta al hacer click
  variant?: 'primary' | 'secondary'; // Tipo de botón (opcional)
}

import './Button.css'; // Importamos los estilos

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  // Construimos el nombre de la clase CSS dinámicamente
  const className = `btn btn-${variant}`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
```

#### 3️⃣ En `Button.css`:

```css
/* Estilos base para todos los botones */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Botón primario (azul) */
.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* Botón secundario (gris) */
.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}
```

#### 4️⃣ Usa el componente en `App.tsx`:

```tsx
import { Button } from './components/Button/Button'

function App() {
  return (
    <div>
      <h1>Mi App</h1>
      <Button 
        label="Haz click aquí" 
        onClick={() => alert('¡Hola!')} 
        variant="primary"
      />
    </div>
  )
}

export default App
```

✅ **Acabas de crear y usar tu primer componente reutilizable.**

---

## 🎁 PASO 7: TRABAJAR CON PROPS

### ¿Qué son las Props?
Son datos que pasas de un componente padre a un componente hijo.

**Piensa en ellas como argumentos de una función.**

### Ejemplo: Tarjeta de Usuario

#### 1️⃣ Crea `src/components/UserCard/UserCard.tsx`:

```tsx
// Definimos la estructura de las props
interface UserCardProps {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

import './UserCard.css';

export const UserCard = ({ name, email, age, isActive }: UserCardProps) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
      {/* Renderizado condicional */}
      {isActive ? (
        <span className="badge active">Activo</span>
      ) : (
        <span className="badge inactive">Inactivo</span>
      )}
    </div>
  );
};
```

#### 2️⃣ Úsalo en `App.tsx`:

```tsx
import { UserCard } from './components/UserCard/UserCard'

function App() {
  return (
    <div>
      <h1>Usuarios</h1>
      <UserCard 
        name="María García" 
        email="maria@example.com" 
        age={25} 
        isActive={true} 
      />
      <UserCard 
        name="Juan Pérez" 
        email="juan@example.com" 
        age={30} 
        isActive={false} 
      />
    </div>
  )
}

export default App
```

**Explicación:**
- Pasamos diferentes datos a cada `UserCard`
- El componente se reutiliza pero con diferente información
- TypeScript nos ayuda a no olvidar ninguna prop obligatoria

---

## 🔄 PASO 8: USAR ESTADO (useState)

### ¿Qué es el Estado?
Es la "memoria" de tu componente. Cuando el estado cambia, React vuelve a dibujar (renderizar) el componente.

### Ejemplo: Contador Simple

```tsx
import { useState } from 'react';

export const Counter = () => {
  // Declaramos estado: count es el valor, setCount es la función para cambiarlo
  const [count, setCount] = useState(0);

  // Funciones para modificar el estado
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
};
```

**Conceptos clave:**
- `useState(0)`: El valor inicial es 0
- `count`: Variable que guarda el valor actual
- `setCount`: ÚNICA forma de cambiar `count` (nunca hagas `count = 5`)
- Cada vez que llamas a `setCount`, React redibuja el componente

### Ejemplo: Input Controlado (Formulario)

```tsx
import { useState } from 'react';

export const NameForm = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Hola, {name}!</p>
    </div>
  );
};
```

**Explicación:**
- `value={name}`: El input muestra el valor del estado
- `onChange`: Cuando escribes, actualiza el estado
- Esto se llama "componente controlado"

---

## 🌐 PASO 9: HACER PETICIONES A APIs (useEffect)

### ¿Qué es useEffect?
Es un hook que ejecuta código cuando el componente se monta o cuando cambia alguna variable.

**Usos comunes:**
- Llamar a una API al cargar el componente
- Suscribirse a eventos
- Limpiar recursos

### Ejemplo: Obtener Usuarios de una API

```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Error al obtener usuarios');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // [] significa: "ejecuta esto solo una vez al montar"

  // Renderizado condicional
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

**Explicación:**
- `useEffect(() => {...}, [])`: Se ejecuta al montar el componente
- `async/await`: Esperamos la respuesta de la API
- `try/catch`: Manejamos errores
- `loading`, `error`, `users`: Tres estados para manejar diferentes escenarios

---

## 🎣 PASO 10: CREAR HOOKS PERSONALIZADOS

### ¿Para qué sirven?
Para reutilizar lógica entre componentes.

### Ejemplo: Hook para Fetch

#### 1️⃣ Crea `src/hooks/useFetch.ts`:

```tsx
import { useState, useEffect } from 'react';

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Error en la petición');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

#### 2️⃣ Úsalo en cualquier componente:

```tsx
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
}

export const UserList = () => {
  const { data: users, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

**Ventaja:** Ahora puedes usar `useFetch` en cualquier componente sin repetir código.

---

## 🎨 PASO 11: ESTILOS EN REACT

Hay varias formas de agregar estilos:

### 1️⃣ CSS Normal (archivo separado)

```tsx
import './Button.css';

export const Button = () => {
  return <button className="btn">Click</button>;
};
```

```css
/* Button.css */
.btn {
  padding: 10px 20px;
  background-color: blue;
  color: white;
}
```

### 2️⃣ CSS Modules (evita colisiones de nombres)

```tsx
import styles from './Button.module.css';

export const Button = () => {
  return <button className={styles.btn}>Click</button>;
};
```

### 3️⃣ Inline Styles (estilos en línea)

```tsx
export const Button = () => {
  return (
    <button style={{ 
      padding: '10px 20px', 
      backgroundColor: 'blue', 
      color: 'white' 
    }}>
      Click
    </button>
  );
};
```

### 4️⃣ Styled Components (librería externa)

Primero instala:
```powershell
npm install styled-components
```

```tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  
  &:hover {
    background-color: darkblue;
  }
`;

export const Button = () => {
  return <StyledButton>Click</StyledButton>;
};
```

**Recomendación para principiantes:** Empieza con CSS normal.

---

## ⚡ COMANDOS IMPORTANTES

### Comandos de npm:

| Comando | ¿Qué hace? |
|---------|------------|
| `npm install` | Instala todas las dependencias del proyecto |
| `npm install nombre-libreria` | Instala una librería nueva |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Crea una versión optimizada para producción |
| `npm run preview` | Previsualiza la versión de producción |

### Comandos de Git (para guardar tu código):

```powershell
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Mi primer commit"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/tu-repo.git

# Subir código
git push -u origin main
```

---

## 🚨 SOLUCIÓN DE PROBLEMAS COMUNES

### ❌ Error: "npm no se reconoce como comando"
**Solución:** Node.js no está instalado o no está en el PATH. Reinstala Node.js.

### ❌ Error: "Cannot find module..."
**Solución:** Ejecuta `npm install` para instalar las dependencias.

### ❌ La página no se actualiza cuando cambio el código
**Solución:** 
1. Guarda el archivo (Ctrl + S)
2. Revisa que el servidor esté corriendo (`npm run dev`)
3. Recarga la página (F5)

### ❌ Error: "Port 5173 is already in use"
**Solución:** 
```powershell
# Detén el servidor actual (Ctrl + C) y vuelve a ejecutar
npm run dev
```

### ❌ Errores de TypeScript (líneas rojas)
**Solución:**
- Lee el mensaje de error (generalmente dice qué falta)
- Verifica que las props estén bien escritas
- Asegúrate de haber definido los tipos (interfaces)

---

## 📚 RECURSOS ADICIONALES

### Documentación Oficial:
- [React](https://react.dev/) - Documentación oficial (en inglés)
- [TypeScript](https://www.typescriptlang.org/) - Documentación de TypeScript
- [Vite](https://vitejs.dev/) - Documentación de Vite

### Tutoriales en Español:
- [midudev en YouTube](https://www.youtube.com/@midudev) - Tutoriales de React
- [FreeCodeCamp Español](https://www.freecodecamp.org/espanol/) - Cursos gratis

### Práctica:
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API falsa para practicar
- [React Dev Tools](https://react.dev/learn/react-developer-tools) - Extensión para Chrome/Firefox

---

## 🎓 PRÓXIMOS PASOS RECOMENDADOS

Una vez que domines lo básico, aprende:

1. **React Router** - Para crear múltiples páginas
2. **Context API** - Para manejar estado global
3. **React Query** - Para manejar datos de APIs
4. **Formularios con React Hook Form** - Para formularios complejos
5. **Testing con Vitest** - Para probar tu código

---

## 🌟 CONSEJOS FINALES

1. **Practica todos los días** - 30 minutos diarios es mejor que 5 horas una vez a la semana
2. **No memorices, entiende** - Es normal consultar documentación
3. **Comete errores** - Son la mejor forma de aprender
4. **Construye proyectos propios** - To-Do List, calculadora, blog personal
5. **Lee código de otros** - Ve repositorios en GitHub
6. **Únete a comunidades** - Discord, Reddit, Twitter

---

## ✅ CHECKLIST DE CONCEPTOS BÁSICOS

Asegúrate de entender:

- [ ] ¿Qué es un componente?
- [ ] ¿Cómo pasar props?
- [ ] ¿Cómo usar useState?
- [ ] ¿Cómo usar useEffect?
- [ ] ¿Cómo renderizar listas con .map()?
- [ ] ¿Cómo hacer renderizado condicional?
- [ ] ¿Cómo manejar eventos (onClick, onChange)?
- [ ] ¿Cómo hacer peticiones a APIs?
- [ ] ¿Cómo crear un custom hook?
- [ ] ¿Cómo agregar estilos?

---

## 💬 ¿NECESITAS AYUDA?

- **Stack Overflow en Español**: [es.stackoverflow.com](https://es.stackoverflow.com/)
- **Discord de React en Español**: Busca servidores de comunidades hispanohablantes
- **Twitter/X**: Busca hashtags como #ReactJS #AprendiendoReact

---

**¡Mucha suerte en tu prueba! 🚀 Recuerda: todos empezamos desde cero. Tú puedes hacerlo.**

---

## 📝 NOTAS SOBRE ESTE PROYECTO

Este proyecto incluye ejemplos completos de:
- ✅ Componente Button con props
- ✅ Componente Counter con useState
- ✅ Componente UserList con useEffect y API
- ✅ Hook personalizado useFetch
- ✅ Estilos CSS para cada componente

**Para estudiar:**
1. Lee el código de cada componente en `src/components/`
2. Lee el hook personalizado en `src/hooks/useFetch.ts`
3. Experimenta cambiando valores y ve qué pasa
4. Crea tus propios componentes

**¡Todo está comentado línea por línea para que entiendas cada parte!**

---

## 1. Instalación y Configuración

### Paso 1: Instalar Node.js
React necesita un entorno de ejecución de JavaScript fuera del navegador. Eso es Node.js.
*   **Verificar si lo tienes:** Abre tu terminal y escribe `node -v`. Si sale un número (ej. `v18.17.0`), estás lista.

### Paso 2: Crear el Proyecto con Vite
Vite es la herramienta moderna para crear proyectos React. Es mucho más rápido que el antiguo `create-react-app`.

**Comando Mágico:**
```bash
npm create vite@latest nombre-de-tu-proyecto -- --template react-ts
```
*   `npm`: El gestor de paquetes de Node.
*   `create vite@latest`: Llama a la última versión de Vite.
*   `--template react-ts`: Le dice "Quiero React con TypeScript" (TS es JS con superpoderes de tipos, te ayuda a no cometer errores).

### Paso 3: Instalar Dependencias
Cuando creas el proyecto, la carpeta `node_modules` (donde viven las librerías) no existe para ahorrar espacio. Debes crearla:

```bash
cd nombre-de-tu-proyecto
npm install
```
*   Esto lee el archivo `package.json` y descarga todo lo necesario.

### Paso 4: Arrancar el Proyecto
Para ver tu web en vivo:
```bash
npm run dev
```

---

## 2. Estructura del Proyecto

Aquí es donde mucha gente se pierde. Vamos a desglosar qué es cada archivo en tu carpeta:

*   📁 **`node_modules/`**: ¡NO LO TOQUES! Aquí están las miles de librerías que usa React. Es pesado y feo.
*   📁 **`public/`**: Archivos estáticos que no cambian (imágenes, favicon).
*   📁 **`src/`**: **AQUÍ TRABAJAS TÚ**. Todo tu código fuente va aquí.
    *   📄 `main.tsx`: El punto de entrada. Aquí React se "inyecta" en el HTML.
    *   📄 `App.tsx`: Tu componente principal. El "padre" de todos.
    *   📄 `vite-env.d.ts`: Cosas de configuración de tipos, ignóralo por ahora.
*   📄 **`index.html`**: El único archivo HTML real. Tiene un `<div id="root"></div>` donde React montará toda tu aplicación.
*   📄 **`package.json`**: ⚠️ **¡IMPORTANTE!** Es el DNI de tu proyecto.
    *   Dice cómo se llama tu app.
    *   Qué librerías usa (`dependencies`).
    *   Qué comandos puedes correr (`scripts`).
*   📄 **`tsconfig.json`**: Reglas de TypeScript. Define qué tan estricto es el "policía" del código.
*   📄 **`vite.config.ts`**: Configuración del servidor de desarrollo (puertos, plugins).

---

## 3. Conceptos Fundamentales

### Componentes (JSX)
Un componente es una pieza de tu interfaz (un botón, un menú, una tarjeta). En React, son **funciones** que devuelven HTML (bueno, JSX).

**Reglas de Oro:**
1.  El nombre de la función debe empezar con **Mayúscula** (ej. `MiComponente`).
2.  Debe retornar **un solo elemento padre** (usa `<> ... </>` o `<div> ... </div>`).

```tsx
// Ejemplo
function Saludo() {
  return <h1>Hola Mundo</h1>;
}
```

### Props (Propiedades)
Son la forma en que los componentes se comunican. Piensa en ellas como los **argumentos** de una función. El padre le pasa datos al hijo.

```tsx
// Hijo
function Boton({ texto }: { texto: string }) {
  return <button>{texto}</button>;
}

// Padre
function App() {
  return <Boton texto="Click aquí" />;
}
```

### State (Estado - useState)
El `state` es la **memoria** del componente. Si quieres que algo cambie en la pantalla (un contador, un formulario), necesitas estado.

```tsx
import { useState } from 'react';

function Contador() {
  // [valorActual, funcionParaCambiarlo] = useState(valorInicial)
  const [cuenta, setCuenta] = useState(0);

  return (
    <button onClick={() => setCuenta(cuenta + 1)}>
      Clicks: {cuenta}
    </button>
  );
}
```

### Efectos (useEffect)
Se usa para "efectos secundarios": cosas que pasan **después** de renderizar o cuando algo cambia.
*   Llamar a una API.
*   Poner un temporizador.
*   Cambiar el título de la página.

```tsx
import { useEffect } from 'react';

function Aviso() {
  useEffect(() => {
    // Esto se ejecuta cuando el componente nace
    alert("¡Bienvenido!");
  }, []); // [] vacío significa "solo una vez al principio"
}
```

---

## 4. Hooks Personalizados
Si tienes lógica que repites mucho (ej. llamar a APIs), puedes crear tu propio Hook. Es solo una función que usa otros hooks.

*(Ver ejemplo en `src/hooks/useFetch.ts`)*

---

## 5. Comandos Importantes

| Comando | Qué hace |
| :--- | :--- |
| `npm install` | Instala las librerías del `package.json`. |
| `npm run dev` | Inicia el servidor local para programar. |
| `npm run build` | Crea la versión final optimizada para subir a internet (carpeta `dist`). |
| `npm run preview` | Te deja ver cómo quedó la versión `build` localmente. |

---

¡Mucha suerte en tu prueba! Revisa los archivos en `src/` para ver ejemplos reales comentados. 🚀
