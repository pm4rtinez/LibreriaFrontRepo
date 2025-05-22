import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from '../models/autor';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  constructor(private http: HttpClient) { }
  private baseUrl = `${environment.apiUrl}/autores`;


  obtenerAutores(): Observable<Autor[]> {

    return this.http.get<Autor[]>(`${this.baseUrl}`)

  }

  crearAutor(nombre: string): Observable<any> {
    return this.http.post(this.baseUrl, { nombre });
  }

}
