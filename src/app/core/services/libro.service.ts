import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { CrearLibroDTO } from '../models/crear-libro';
import { LibroPlano } from '../models/libroplano';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = `${environment.apiUrl}/Libros`;

  constructor(private http: HttpClient) { }

  buscarLibros(): Observable<LibroPlano[]> {
    return this.http.get<LibroPlano[]>(this.baseUrl);
  }

  crearLibro(dto: CrearLibroDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}`, dto);
  }

}
