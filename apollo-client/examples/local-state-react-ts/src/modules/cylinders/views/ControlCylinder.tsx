
import { cacheCylindersConfig } from '../../../cache/cache'

export default function ControlCylinder() {

    cacheCylindersConfig({status: false, user: 'Harry'})

    return(
        <>
            <h2>FORMULARIO CYLINDER</h2>

            <div>
            </div>
        </>
    )

}