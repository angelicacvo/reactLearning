import { useState, useEffect, useCallback } from 'react'
// import viteLogo from '/vite.svg'
// import { Button } from './components'

// Función que renderiza el HTML en el index.html
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const consoleLoader = useCallback((loadingValue: boolean) => {
    setLoading(loadingValue);
    console.info("Loading...")
  }, []); // Array vacío: no depende de nada externo, así que nunca cambia.

  // Si no lo hicieramos, fetchData se recrearía
  // en cada render. Como la usamos en el array de dependencias del useEffect de abajo,
  // eso causaría un bucle infinito (render -> nueva función -> useEffect corre -> setEstado -> render...).
  const fetchData = useCallback(async () => {
    // antes de hacer la petición
    consoleLoader(true);
    try {
      // peiticion al endpoint
      const response = await fetch('https://linkdeapi.com/data');
      if (!response.ok) {
        throw new Error('Error obteniendo datos');
      }
      const jsonData = await response.json();
      setData(jsonData);

    } catch (error) {
      setError(error as string);
    } finally {
      // después de hacer la petición, cuando pasa el evento
      consoleLoader(false);
    }
  }, [consoleLoader]); // Dependencia: si consoleLoader cambia, fetchData se recrea.

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}


export default App
