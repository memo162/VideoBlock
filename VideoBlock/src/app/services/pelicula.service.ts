import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { Pelicula } from "../components/models/pelicula";
import { HttpService } from "./http.service";

@Injectable()
export class PeliculaService {
    public peliculas = new BehaviorSubject<Array<Pelicula>>(new Array<Pelicula>());
    public peliculas$ = this.peliculas.asObservable(); 

    constructor (private httpServive: HttpService) {}

    get() {
        this.httpServive.get(environment.VideoBlockAPI + 'pelicula/').subscribe((requestResult) => {
            if(requestResult != null) {
                this.peliculas.next(requestResult);
            }
            else {
                this.peliculas.next(new Array<Pelicula>());
            }
        });
    }
}
