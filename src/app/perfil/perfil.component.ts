import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../core/services/reserva.service';
import { Reserva } from '../core/models/reserva';
import { EstadoReservaTextoPipe } from '../shared/pipes/estado-reserva-texto.pipe';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone: true,
  imports: [CommonModule,EstadoReservaTextoPipe  ]
})
export class PerfilComponent implements OnInit {
  usuario = {
    id: 1,  // 🔁 De momento ID fijo, luego lo obtendrás del login
    nombre: 'Pablo Martínez',
    correo: 'pablo@gmail.com',
    direccion: 'Calle Falsa 123',
    credito: 11,
    imagen: 'https://via.placeholder.com/100'
  };

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas() {
    this.reservaService.getReservasPorUsuario(5).subscribe({
      next: (data) => {
        console.log("Los datos de las reservas son: ");
        this.reservas = data;
      },
      error: (err) => {
        console.error('Error al obtener reservas', err);
      }
    });
  }

  anadirCredito() {
    this.usuario.credito += 5;
  }

calcularDiasRestantes(fechaLimite: string): number {
  const hoy = new Date();
  const limite = new Date(fechaLimite);
  const diffMs = limite.getTime() - hoy.getTime();
  return Math.max(Math.ceil(diffMs / (1000 * 60 * 60 * 24)), 0);
}

}
