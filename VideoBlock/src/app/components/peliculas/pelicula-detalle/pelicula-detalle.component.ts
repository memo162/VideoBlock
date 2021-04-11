import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})

export class PeliculaDetalleComponent implements OnInit {
  public pelicula : Pelicula;
  public idPelicula : string;
  
  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPelicula = this.route.snapshot.paramMap.get('id');

    this.peliculaService.pelicula$.subscribe((response) => {
      this.pelicula = response;
    })

    this.peliculaService.getById(parseInt(this.idPelicula));
  }
}
