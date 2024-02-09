
import { useReactiveVar } from "@apollo/client";
import { nombreVar, apellidoVar, edadVar, estadoCivilVar } from '../../../cache/cache'

export default function Monitor() {
    
    const nombre = useReactiveVar(nombreVar);
    const apellido = useReactiveVar(apellidoVar);
    const edad = useReactiveVar(edadVar);
    const estadoCivil = useReactiveVar(estadoCivilVar);
    

    return(
        <>
            <h2>Monitor Cliente</h2>
            <p>Nombre: { nombre }</p> 
            <p>Apellido: { apellido }</p> 
            <p>Edad: { edad }</p>  
            <p>Estado Civil: { estadoCivil }</p> 
        </>
    )
}