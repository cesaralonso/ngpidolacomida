export interface OfertaInterface {
    idoferta?: string;
    nombre?: string;
    descripcion?: string;
    tipo?: string;
    fecha_ini?: string;
    fecha_iniForView?: Date;
    fecha_fin?: string;
    fecha_finForView?: Date;
    precio?: string;
    res_has_pla_restaurante_idrestaurante?: string;
    res_has_pla_platillo_idplatillo?: string;
    baja?: boolean;
    image?: any;
}
