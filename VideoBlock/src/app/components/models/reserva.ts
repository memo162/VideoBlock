import { BaseModel } from "./baseModel";
import { Pelicula } from "./pelicula";
import { Usuario } from "./usuario";

export class Reserva extends BaseModel {
    peliculaId:number;
    usuarioId:number;
    fechaDeReserva:string;
    diasDeReserva:number;
    cerrada:boolean;
    pelicula:Pelicula;
    usuario:Usuario;
}