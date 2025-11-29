/**
 * 🎓 HOOK PERSONALIZADO: useFetch
 * 
 * Este archivo demuestra:
 * 1. Cómo crear tu propio Hook para reutilizar lógica.
 * 2. Uso de `useEffect` para llamadas a APIs.
 * 3. Uso de Generics <T> en TypeScript para ser flexible.
 */

import { useState, useEffect } from 'react';

// Definimos qué devuelve nuestro hook
interface FetchResult<T> {
    data: T | null;      // Los datos (pueden ser null al principio)
    loading: boolean;    // Si está cargando o no
    error: string | null; // Si hubo error
}

// <T> significa "Cualquier Tipo". Quien use este hook definirá qué tipo de datos espera.
export function useFetch<T>(url: string): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Esta función se ejecuta cuando el componente se monta o cuando cambia la URL.

        const fetchData = async () => {
            try {
                setLoading(true); // Empezamos a cargar
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Error en la petición');
                }

                const result = await response.json();
                setData(result); // Guardamos los datos
            } catch (err) {
                setError((err as Error).message); // Guardamos el error
            } finally {
                setLoading(false); // Terminamos de cargar (sea éxito o error)
            }
        };

        fetchData();

    }, [url]); // [url] es la dependencia. Si la URL cambia, se vuelve a ejecutar.

    return { data, loading, error };
}
