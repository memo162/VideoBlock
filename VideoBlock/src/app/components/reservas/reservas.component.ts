import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from '../models/reserva';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  public reservas : Array<Reserva>;

  constructor(
    private reservaService: ReservaService) { }

    ngOnInit(): void {
      this.reservaService.reservas$.subscribe((response) => {
        this.reservas = response;
      })

      this.reservaService.get();
    }
  
    cerrar(reserva:Reserva) : void {
      reserva.cerrada = true;
      this.reservaService.update(reserva);
    }

    borrar(reserva:Reserva) : void {
      reserva.eliminado = true;
      this.reservaService.update(reserva);
    }
}
