import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Counter } from './components/Counter/Counter'
import { UserList } from './components/UserList/UserList'

function App() {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Proyecto Maestro de React</h1>
      <p>
        Bienvenida a tu aplicación de estudio. Aquí verás en acción los componentes
        que hemos creado en la carpeta <code>src/components</code>.
      </p>

      <hr />

      {/* SECCIÓN 1: PROPS Y EVENTOS */}
      <section>
        <h2>1. Props y Eventos (Button.tsx)</h2>
        <p>Estos botones reciben diferentes "props" para cambiar su color y texto.</p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            label="Botón Primario"
            onClick={() => alert('¡Hiciste click en el primario!')}
            variant="primary"
          />
          <Button
            label="Botón Secundario"
            onClick={() => alert('Soy el secundario')}
            variant="secondary"
          />
        </div>
      </section>

      <hr />

      {/* SECCIÓN 2: ESTADO (STATE) */}
      <section>
        <h2>2. Estado y Reactividad (Counter.tsx)</h2>
        <Counter />
      </section>

      <hr />

      {/* SECCIÓN 3: EFECTOS Y API */}
      <section>
        <h2>3. Efectos y Datos Externos (UserList.tsx)</h2>
        <p>Aquí usamos un botón para mostrar/ocultar la lista, demostrando renderizado condicional.</p>

        <Button
          label={showUsers ? "Ocultar Usuarios" : "Cargar Usuarios"}
          onClick={() => setShowUsers(!showUsers)}
        />

        {/* Si showUsers es true, mostramos el componente UserList */}
        {showUsers && <UserList />}
      </section>

    </div>
  )
}

export default App
