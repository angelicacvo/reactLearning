import { useEffect } from "react";
import "./Button.css"

// Props: propiedades que se le pasan a un componente
interface Props {
    label: string,
    parentMethod: () => void
}

// método padre le extiende sus funciones a los hijos
// En el onClick se le pasa la función que se le pasa por props
export const Button = ({ label, parentMethod }: Props) => {

    useEffect(() => {
        
    }, [label]); // <- cada vez que label cambie se activa la lógica

    // Fragmento que envuelve el HTML que va al DOM
    return (
        <button className="custom-button" onClick={parentMethod}>
            {/* label es la propiedad que se le pasa al componente */}
            {/* Variable de react, no de HTML*/}
            {label}
        </button>
    )
}