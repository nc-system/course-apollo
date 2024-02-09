
import { useReactiveVar } from "@apollo/client";
import { cacheCylindersConfig } from '../../../cache/cache.ts' 

export default function MonitorCylinder() {

    const gsCylinderConfig = useReactiveVar(cacheCylindersConfig)
    
    return(
        <>
            <h2>MONITOR CYLINDER</h2>

            <div>
                <p>Status: { gsCylinderConfig.status }</p>
                <p>User: { gsCylinderConfig.user }</p>
            </div>
        </>
    )
}