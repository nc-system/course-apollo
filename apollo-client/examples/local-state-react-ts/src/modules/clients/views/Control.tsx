
import { useState } from 'react'
import { nombreVar, apellidoVar, edadVar, estadoCivilVar } from '../../../cache/cache'


export default function Control() {

    const [stateNombre, setStateNombre] = useState('')
    const [stateApellido, setStateApellido] = useState('')
    

    function onChangeNombre(e: Event) {
        const input = e.target as HTMLInputElement 
        const inputNombre = input
        setStateNombre(inputNombre.value)
        // console.log(stateNombre)
    }
    function handleNombre() {
        nombreVar(stateNombre)
    }


    function onChangeApellido(e: Event) {
        const input = e.target as HTMLInputElement
        const inputApellido = input
        setStateApellido(inputApellido.value)
        // console.log(stateApellido)
    }
    function handleApellido() {
        apellidoVar(stateApellido)
    }


    function handleEdad() {
        edadVar(43)
    }

    function handleEstadoCivil() {
        estadoCivilVar('Soltero')
    }

    return(
        <>
            <h3>Formulario Clientes</h3>
            
            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="" id="name" onChange={onChangeNombre}/>
                    <button onClick={handleNombre} type='button'>Actualizar nombre</button>
                </div>

                <div>
                    <label htmlFor="lastname">Apeliido</label>
                    <input type="text" name="" id="lastname" onChange={onChangeApellido}/>
                    <button onClick={handleApellido} type='button'>Actualizar apellido</button>
                </div>

                <div>
                    <label htmlFor="name">Edad</label>
                    <input type="number" name="" id="name" />
                    <button onClick={handleEdad} type='button'>Actualizar edad</button>
                </div>

                <div>
                    <label htmlFor="name">Estado Civil</label>
                    <select id="cars">
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Union Libre">Union Libre</option>
                    </select>
                    <button onClick={handleEstadoCivil} type='button'>Actualizar estado civil</button>
                </div>
                
            </form>
            

        </>
    )

}