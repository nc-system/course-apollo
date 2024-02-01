
import { useReactiveVar } from "@apollo/client";
import { nombreVar, edadVar, estadoCivilVar } from '../../../cache/cache'

export default function Monitor() {
    
    const nombre = useReactiveVar(nombreVar);
    const edad = useReactiveVar(edadVar);
    const estadoCivil = useReactiveVar(estadoCivilVar);

    return(
        <>
            <h2>Monitor Cliente</h2>
            <p>Nombre: { nombre }</p> 
            <p>Edad: { edad }</p>  
            <p>Estado Civil: { estadoCivil }</p> 
        </>
    )
}