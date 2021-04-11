import { identifierModuleUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { Reserva } from "../components/models/reserva";
import { HttpService } from "./http.service";

@Injectable()
export class ReservaService {
    public reservas = new BehaviorSubject<Array<Reserva>>(new Array<Reserva>());
    public reservas$ = this.reservas.asObservable(); 
    public reserva = new BehaviorSubject<Reserva>(new Reserva);
    public reserva$ = this.reserva.asObservable();

    constructor (private httpServive: HttpService) {}

    get() {
        this.httpServive.get(environment.VideoBlockAPI + 'reserva/').subscribe((requestResult) => {
            if(requestResult != null) {
                this.reservas.next(requestResult);
            }
            else {
                this.reservas.next(new Array<Reserva>());
            }
        });
    }

    getById(id:number) {
        this.httpServive.get(environment.VideoBlockAPI + 'reserva/' + id).subscribe((requestResult) => {
            this.reserva.next(requestResult);
        });
    }

    create(reserva:Reserva) {
        this.httpServive.post(environment.VideoBlockAPI + 'reserva/', reserva).subscribe((response) => {
            this.reserva.next(response);
        });
    }

    update(reserva:Reserva) {
        this.httpServive.post(environment.VideoBlockAPI + 'reserva/', reserva).subscribe((response) => {
            this.reserva.next(response);
        });
    }
}