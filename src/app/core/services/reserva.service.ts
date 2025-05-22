import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl = `${environment.apiUrl}/reservas`;

  constructor(private http: HttpClient) {}

  getReservasPorUsuario(usuarioId: number): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.baseUrl}/usuario/${usuarioId}`);
  }

  getReservasPorFechas(usuarioId: number, desde: string, hasta: string): Observable<Reserva[]> {
    const params = new HttpParams()
      .set('desde', desde)
      .set('hasta', hasta);

    return this.http.get<Reserva[]>(`${this.baseUrl}/usuario/${usuarioId}/entre`, { params });
  }

  registrarReserva(usuarioId: number, libroId: number): Observable<any> {
    const params = new HttpParams()
      .set('usuarioId', usuarioId)
      .set('libroId', libroId);

    return this.http.post(`${this.baseUrl}/registrar`, null, { params });
  }

  devolverLibro(reservaId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/devolver/${reservaId}`, null);
  }

  getDiasRestantes(reservaId: number): Observable<{ diasRestantes: number }> {
    return this.http.get<{ diasRestantes: number }>(`${this.baseUrl}/${reservaId}/dias-restantes`);
  }
}
