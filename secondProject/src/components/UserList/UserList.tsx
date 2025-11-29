/**
 * 🎓 COMPONENTE: LISTA DE USUARIOS
 * 
/**
 * 🎓 COMPONENTE: LISTA DE USUARIOS
 * 
 * Este archivo demuestra:
 * 1. Cómo usar nuestro Custom Hook `useFetch`.
 * 2. Renderizado condicional (mostrar Loading o Error).
 * 3. Renderizado de listas con `.map()`.
 */

import { useFetch } from '../../hooks/useFetch'; // Subimos dos niveles ahora
import './UserList.css';

// Definimos la forma de un Usuario (según la API que usaremos)
interface User {
    id: number;
    name: string;
    email: string;
}

export const UserList = () => {
    // Usamos nuestro hook mágico. Le decimos que esperamos una lista de usuarios (User[])
    const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

    // 1. Renderizado Condicional: Si está cargando...
    if (loading) return <p className="loading-text">⏳ Cargando usuarios...</p>;

    // 2. Renderizado Condicional: Si hubo error...
    if (error) return <p className="error-text">❌ Error: {error}</p>;

    // 3. Renderizado Principal: La lista
    return (
        <div className="user-list-container">
            <h3>Ejemplo de Consumo de API (useEffect + Custom Hook)</h3>

            <ul className="user-list">
                {/* Recorremos el array de usuarios y creamos un <li> por cada uno */}
                {users?.slice(0, 5).map((user) => (
                    <li key={user.id} className="user-item">
                        <strong className="user-name">{user.name}</strong>
                        <span className="user-email">{user.email}</span>
                    </li>
                ))}
            </ul>
            <small>Mostrando primeros 5 usuarios de JSONPlaceholder</small>
        </div>
    );
};
