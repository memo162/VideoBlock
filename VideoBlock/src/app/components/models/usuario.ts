import { BaseModel } from "./baseModel"
import { Rol } from "./rol";

export class Usuario extends BaseModel {
    nombre:string;
    contraseña:string;
    correo:string;
    direccion:string;
    telefono:string;
    rolId:number;
    rol:Rol
}