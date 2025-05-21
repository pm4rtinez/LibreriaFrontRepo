import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../models/logindto';
import { RegistroDTO } from '../models/registrodto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl = 'http://localhost:5219/api/auth';
  constructor(private http: HttpClient) { }

  login(dto: LoginDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, dto);
  }

  registro(dto: RegistroDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, dto);
  }

}
