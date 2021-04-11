import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas : Array<Pelicula>;

  constructor(
    private peliculaService: PeliculaService,
    private router: Router) { }

  ngOnInit(): void {
    this.peliculaService.peliculas$.subscribe((response) => {
      this.peliculas = response;
    })

    this.peliculaService.get();
  }

  goToDetail(id:number) {
    this.router.navigate(['peliculas/detalle/', id]);
  }
}
