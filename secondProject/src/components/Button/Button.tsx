/**
 * 🎓 COMPONENTE: BOTÓN REUTILIZABLE
 * 
 * Este archivo demuestra:
 * 1. Cómo crear un componente funcional.
 * 2. Cómo definir los tipos de las "Props" (propiedades) con TypeScript.
 * 3. Cómo recibir y usar esas props.
 * 4. Cómo manejar eventos (onClick).
 */

// 1. Definimos la "forma" que deben tener las props.
// Esto ayuda a que VS Code te avise si te falta algo.
/**
 * 🎓 COMPONENTE: BOTÓN REUTILIZABLE
 * 
 * Este archivo demuestra:
 * 1. Cómo crear un componente funcional.
 * 2. Cómo definir los tipos de las "Props" (propiedades) con TypeScript.
 * 3. Cómo recibir y usar esas props.
 * 4. Cómo manejar eventos (onClick).
 */

// 1. Definimos la "forma" que deben tener las props.
// Esto ayuda a que VS Code te avise si te falta algo.
interface ButtonProps {
    label: string;           // Texto que irá dentro del botón
    onClick: () => void;     // Función que se ejecutará al hacer click
    variant?: 'primary' | 'secondary'; // Opcional (?), solo puede ser uno de esos dos valores
}

import './Button.css'; // Importamos los estilos

// 2. Definimos el componente.
export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {

    // Construimos el nombre de la clase dinámicamente
    // Si variant es 'primary', la clase será 'btn btn-primary'
    const className = `btn btn-${variant}`;

    // 3. Retornamos el JSX
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
