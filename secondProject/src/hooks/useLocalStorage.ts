/**
 * 🎓 CUSTOM HOOK: useLocalStorage
 * 
 * Sincroniza estado con localStorage.
 * Los datos persisten incluso si recargas la página.
 * ÚTIL para guardar preferencias, tema, etc.
 */

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Obtener valor inicial desde localStorage o usar initialValue
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error al leer localStorage:', error);
      return initialValue;
    }
  });

  // Guardar en localStorage cada vez que value cambie
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

/**
 * EJEMPLO DE USO:
 * 
 * const [name, setName] = useLocalStorage('username', 'Invitado');
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 * 
 * <input value={name} onChange={(e) => setName(e.target.value)} />
 * // El valor se guarda automáticamente en localStorage
 */
