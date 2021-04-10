import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { PeliculaDetalleComponent } from './components/peliculas/pelicula-detalle/pelicula-detalle.component';
import { HttpService } from './services/http.service';
import { PeliculaService } from './services/pelicula.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    ReservasComponent,
    PeliculaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    PeliculaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
