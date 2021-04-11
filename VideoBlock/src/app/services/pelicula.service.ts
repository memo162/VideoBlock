import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { Pelicula } from "../components/models/pelicula";
import { HttpService } from "./http.service";

@Injectable()
export class PeliculaService {
    public peliculas = new BehaviorSubject<Array<Pelicula>>(new Array<Pelicula>());
    public peliculas$ = this.peliculas.asObservable(); 
    public pelicula = new BehaviorSubject<Pelicula>(new Pelicula);
    public pelicula$ = this.pelicula.asObservable();

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

    getById(id:number) {
        this.httpServive.get(environment.VideoBlockAPI + 'pelicula/' + id).subscribe((requestResult) => {
            this.pelicula.next(requestResult);
        });
    }

    create(pelicula:Pelicula) {
        this.httpServive.post(environment.VideoBlockAPI + 'pelicula/', pelicula).subscribe((response) => {
            this.pelicula.next(response);
        });
    }

    update(pelicula:Pelicula) {
        this.httpServive.post(environment.VideoBlockAPI + 'pelicula/', pelicula).subscribe((response) => {
            this.pelicula.next(response);
        });
    }
}
