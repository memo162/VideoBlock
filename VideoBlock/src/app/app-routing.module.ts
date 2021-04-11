import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaDetalleComponent } from './components/peliculas/pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormComponent } from './components/peliculas/pelicula-form/pelicula-form.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ReservaFromComponent } from './components/reservas/reserva-form/reserva-from.component';
import { ReservasComponent } from './components/reservas/reservas.component';

const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'peliculas/detalle/:id', component: PeliculaDetalleComponent },
  { path: 'peliculas/crear', component: PeliculaFormComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'reservas/crear/:idPelicula', component: ReservaFromComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
