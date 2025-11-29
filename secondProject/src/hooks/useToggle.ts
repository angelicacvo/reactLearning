/**
 * 🎓 CUSTOM HOOK: useToggle
 * 
 * Hook simple para alternar valores booleanos (true/false).
 * MUY útil para modales, menús, mostrar/ocultar, etc.
 */

import { useState } from 'react';

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}

/**
 * EJEMPLO DE USO:
 * 
 * const { value: isOpen, toggle, setTrue, setFalse } = useToggle(false);
 * 
 * <button onClick={toggle}>Toggle</button>
 * <button onClick={setTrue}>Abrir</button>
 * <button onClick={setFalse}>Cerrar</button>
 * {isOpen && <Modal />}
 */
