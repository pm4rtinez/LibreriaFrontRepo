import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = `${environment.apiUrl}/Libros`;

  constructor(private http: HttpClient) { }

  buscarLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.baseUrl}`)

  }
}
