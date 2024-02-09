
/* CYLINDER CONFIG */
// Interface
interface ICylinderConfig {
    status: boolean,
    user?: string
}


// Type
export type TypeCylinderConfig = ICylinderConfig;


// Initialization
export const InitCylinderConfig: TypeCylinderConfig = {
    status: false,
    user: 'undefined'
}

