import { BaseModel } from "./baseModel";

export class Pelicula extends BaseModel {
    titulo: string;
    descripcion: string;
    director: string;
    costo: number;
    cantidadInventario: number;
    cantiddDisponible: number;
}