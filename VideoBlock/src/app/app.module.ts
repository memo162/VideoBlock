import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { PeliculaDetalleComponent } from './components/peliculas/pelicula-detalle/pelicula-detalle.component';
import { HttpService } from './services/http.service';
import { PeliculaService } from './services/pelicula.service';
import { HttpClientModule } from '@angular/common/http';
import { ReservaService } from './services/reserva.service';
import { ReservaFromComponent } from './components/reservas/reserva-form/reserva-from.component';
import { PeliculaFormComponent } from './components/peliculas/pelicula-form/pelicula-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    ReservasComponent,
    PeliculaDetalleComponent,
    ReservaFromComponent,
    PeliculaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    PeliculaService,
    ReservaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
