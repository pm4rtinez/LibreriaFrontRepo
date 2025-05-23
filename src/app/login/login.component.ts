import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { CardModule } from 'primeng/card';
import { Router, RouterModule } from '@angular/router';
import { LoginDTO } from '../core/models/logindto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo = '';
  password = '';
  constructor(private authService: AuthService,
    private router: Router
  ) { }

  iniciarSesion() {
    const dto: LoginDTO = {
      Correo: this.correo,
      Password: this.password
    };

    console.log('[FRONT] Intentando login con:', dto);

    this.authService.login(dto).subscribe({
      next: (res) => {
        console.log('[FRONT] ✅ Login exitoso, token recibido:', res.token);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/perfil']);
      },

      error: (err) => {
        console.error('[FRONT] ❌ Error en login:', err);
        alert(err?.error?.mensaje || 'Credenciales incorrectas');
      }

    });
  }



}
