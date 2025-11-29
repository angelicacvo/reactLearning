# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

NOTAS:
- Trigger: un evento que dispara (una accion de render)Componente: función que devuelve un HTML y se inserta en la página cuando se llame como HTML ej: <Dashboard />
- Renderizar: ejecuta el componente
- Commit: DOM y DOM virtual -> compara el cambio de contenido del DOM con el DOM virtual y actualiza solo lo que se necesita
- Componente: Mínima unidad de lógica posible. Contiene la lógica que le pertenece
- Atomizar: descomponer un componente en subcomponentes
- Props: propiedades que se le pasan a un componente
- useState(usa estados): todo lo que se haga adentro están ligados a ese componente. Relaciona una var para que se pueda usar con el render y posee un método para cambiar el valor de la variable y que triggeree un cambio de estado. 
estructura logica: 
 const state = {
  value = any,
  getValue() => value (get() return this.value),
  setValue(newValue) => value = valorDeAfuera (set() this.value = newValue)

 }

- Batching: buena práctica. La logica hace un cambio de estado y anida todos los cambios en un solo render
- Hooks: siempre empieza con use, hay 2 tipos: propios de react y custom. Enganchan a los componentes

- useEffect: es un hook que se ejecuta cuando el componente se monta y cuando se desmonta

Hay que comunicarse con un endpoint del back paqra traer los datos
useEffect es un hook que se ejecuta cuando el componente se monta
sync con entidades externas, async con entidades internas
 ejecutar algo cuando el componente se monta
  useEffect(() => {
     lógica, se ejecuta siemopre que haya un cambio
    
     ejecuta cada vez que el componente se deje de usar
    return () => {

    }
  }, []);  el array es un array de dependencias, si
    está vacío se ejecuta solo una vez. Maneja el estado de la memoria


 Estado: se guardan variables y métodos que luego 
 se van a usar para el html (useState)
 Conexión y detección de cambios de estado:
pasos: mount -> render -> update -> unmount
valorInicial (count), setter que despues da un 
get y ejecuta el count, el useState declara el varlor inicial
   const [count, setCount] = useState(0)

   const handleClick = () => {
     setCount(count + 1)
   }
   return (
     <>
       {/* // cada vez que se haga click se crea un nuevo método  */}

       <Button label={`Count is ${count}`} parentMethod={() => handleClick()} />
  //     </>
   )

Función que renderiza el HTML en el index.html
  function App() 

- useCallback: mantiene en memoria la función que se le pasa como parámetro para que no se vuelva a crear cada vez que se renderiza el componente 

useCallback memoriza la función para que no se vuelva a crear en cada render.
Si no lo usamos, 'consoleLoader' sería una función nueva cada vez, lo que obligaría
a que 'fetchData' (que depende de ella) también se recree.
  const consoleLoader = useCallback((loadingValue: boolean) => {
    setLoading(loadingValue);
    console.info("Loading...")
  }, []); // Array vacío: no depende de nada externo, así que nunca cambia.

- custom hooks: 






**Explicación en código de cosas que no entiendo: **
   

