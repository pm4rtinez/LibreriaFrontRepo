import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = `${environment.apiUrl}/Categorias`;

  constructor(private http: HttpClient) { }


  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}`);
  }


}
