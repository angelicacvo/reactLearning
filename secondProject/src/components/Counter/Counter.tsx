/**
 * 🎓 COMPONENTE: CONTADOR
 * 
/**
 * 🎓 COMPONENTE: CONTADOR
 * 
 * Este archivo demuestra:
 * 1. El uso del Hook `useState` para manejar memoria/estado.
 * 2. Cómo actualizar la interfaz cuando cambian los datos.
 */

import { useState } from 'react'; // Importamos el hook necesario
import './Counter.css'; // Importamos los estilos

export const Counter = () => {
    // 1. Declaramos el estado.
    // count: es la variable que guarda el valor actual.
    // setCount: es la función MÁGICA que usamos para cambiar el valor y avisar a React que redibuje.
    // useState(0): El valor inicial es 0.
    const [count, setCount] = useState(0);

    // Funciones auxiliares para manejar la lógica
    const incrementar = () => setCount(count + 1);
    const decrementar = () => setCount(count - 1);
    const resetear = () => setCount(0);

    return (
        <div className="counter-container">
            <h3>Ejemplo de Estado (useState)</h3>

            <p className="counter-value">
                Cuenta actual: {count}
            </p>

            <div className="counter-buttons">
                {/* Usamos eventos onClick para llamar a nuestras funciones */}
                <button onClick={decrementar}>- Restar</button>
                <button onClick={resetear}>0 Resetear</button>
                <button onClick={incrementar}>+ Sumar</button>
            </div>

            <p className="counter-note">
                * Cada vez que tocas un botón, React detecta el cambio de estado y actualiza este pedacito de pantalla.
            </p>
        </div>
    );
};
