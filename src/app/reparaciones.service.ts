import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Reparacion } from './reparacion';
import { Vehiculo } from './vehiculo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class ReparacionesService {

  private backendUrl = 'http://localhost:4010';
  //private backendUrl = 'http://192.168.0.6:4010';
  constructor(private http: HttpClient) { }

  getReparacion(id: number): Observable<Reparacion> {
    const url = `${this.backendUrl}/reparacion/${id}/`;
    return this.http.get<Reparacion>(url)
    .pipe(
      catchError(this.handleError<Reparacion>('getReparacion'))
    );
  }

  addReparacion(reparacion: Reparacion): Observable<Reparacion>{
    const url = `${this.backendUrl}/reparacion`;   
    return this.http.post<Reparacion>(url, reparacion, httpOptions)
    .pipe(
      catchError(this.handleError<Reparacion>('addReparacion'))
    );
  }

  getVehiculo(id: number): Observable<Vehiculo> {
    const url = `${this.backendUrl}/vehiculo/${id}/`;
    return this.http.get<Vehiculo>(url)
    .pipe(
      catchError(this.handleError<Vehiculo>('getVehiculo'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error.message); // log to console instead
      console.error(operation);
      alert(error.message);
      alert(operation);
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
