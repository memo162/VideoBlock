import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css']
})
export class PeliculaFormComponent implements OnInit {
  public peliculaForm: FormGroup;
  public pelicula: Pelicula;

  constructor(
    private formBuilder: FormBuilder,
    private peliculaService: PeliculaService
  ) {}

  ngOnInit(): void {
    this.peliculaForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      director: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      cantidadInventario: ['', Validators.required]
    });

    this.peliculaService.pelicula$.subscribe((response) => {
      this.pelicula = response;
    });
  }

  guardar() {
    let pelicula = new Pelicula();
    
    pelicula.titulo = this.peliculaForm.controls['titulo'].value;
    pelicula.descripcion = this.peliculaForm.controls['descripcion'].value;
    pelicula.director = this.peliculaForm.controls['director'].value;
    pelicula.costo = parseFloat(this.peliculaForm.controls['costo'].value);
    pelicula.cantidadInventario = parseInt(this.peliculaForm.controls['cantidadInventario'].value);

    this.peliculaService.create(pelicula);
  }
}
