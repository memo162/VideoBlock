import { BaseModel } from "./baseModel";

export class Pelicula extends BaseModel {
    titulo: string;
    descripcion: string;
    director: string;
    costo: string;
    cantidadInventario: number;
    cantiddDisponible:number;
}