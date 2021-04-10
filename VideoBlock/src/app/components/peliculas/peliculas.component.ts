import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas : Array<Pelicula>;

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.peliculas$.subscribe((response) => {
      this.peliculas = response;
      console.log(this.peliculas);
    })

    this.peliculaService.get();
  }

}
