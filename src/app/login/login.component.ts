import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo = '';
  password = '';

  constructor(private authService: AuthService) {}

iniciarSesion() {
  this.authService.login({ correo: this.correo, password: this.password }).subscribe({
    next: (res) => {
      console.log('✅ Login correcto:', res);
      localStorage.setItem('token', res.token);

    },
    error: (err) => {
      console.error('❌ Error en login:', err);
      alert('Credenciales incorrectas');
    }
  });
}

}
