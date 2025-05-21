import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombreCompleto = '';
  correo = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService) {}

  registrar() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.registro({
      nombreCompleto: this.nombreCompleto,
      correo: this.correo,
      password: this.password,
      confirmPassword: this.confirmPassword
    }).subscribe({
      next: () => alert('Usuario registrado correctamente'),
      error: (err) => alert(err.error?.mensaje || 'Error en el registro')
    });
  }
}
