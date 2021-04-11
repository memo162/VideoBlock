import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/components/models/pelicula';
import { Reserva } from 'src/app/components/models/reserva';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva-from',
  templateUrl: './reserva-from.component.html',
  styleUrls: ['./reserva-from.component.css']
})
export class ReservaFromComponent implements OnInit {
  public idPelicula : string;
  public pelicula : Pelicula;
  public reserva : Reserva;

  constructor(
    private peliculaService: PeliculaService,
    private reservaService: ReservaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPelicula = this.route.snapshot.paramMap.get('idPelicula');
    this.peliculaService.pelicula$.subscribe((response) => {
      this.pelicula = response;
    })

    this.peliculaService.getById(parseInt(this.idPelicula));
    
    this.reservaService.reserva$.subscribe((response) => {
      this.reserva = response;
    })
  }

  createReserva(): void {
    let reserva = new Reserva();
    reserva.peliculaId = this.pelicula.id;
    reserva.usuarioId = 1;
    this.reservaService.createReserva(reserva);
  } 
}
