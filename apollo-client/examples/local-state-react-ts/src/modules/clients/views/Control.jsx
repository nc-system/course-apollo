
import { useState } from 'react'
import { nombreVar, edadVar, estadoCivilVar } from '../../../cache/cache'


export default function Control() {

    function handleNombre() {
        nombreVar('Peluche')
    }

    function handleEdad() {
        edadVar(43)
    }

    function handleEstadoCivil() {
        estadoCivilVar('Soltero')
    }

    return(
        <>
            <h3>Datos Clientes</h3>
            
            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="" id="name" />
                    <button onClick={handleNombre} type='button'>Actualizar nombre</button>
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