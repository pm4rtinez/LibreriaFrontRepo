import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombreCompleto = '';
  correo = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router:Router) { }

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
      next: () => {
        alert('✅ Usuario registrado correctamente');
        this.router.navigate(['/login']);
      },
      error: (err) => alert(err.error?.mensaje || '❌ Error en el registro')
    });
  }
}
