import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, finalize } from 'rxjs/operators';

@Injectable()
export class HttpService {
    httpHeaders: HttpHeaders;

    constructor(
      private http: HttpClient
      ) {
        this.httpHeaders = new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type':  'application/json'         
        });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }

    get(url: string): Observable<any> {
        return this.http.get<any>(url, {headers: this.httpHeaders})
        .pipe(
            retry(2),
            catchError(this.handleError),
        );
    }

    post(url: string, request: any): Observable<any> {
        return this.http.post<any>(url, request, {headers: this.httpHeaders})
        .pipe(
            retry(2),
            catchError(this.handleError),
        );
    }
}
