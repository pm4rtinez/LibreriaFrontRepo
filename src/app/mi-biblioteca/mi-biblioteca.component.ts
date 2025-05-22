import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mi-biblioteca',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mi-biblioteca.component.html',
  styleUrls: ['./mi-biblioteca.component.css']
})
export class MiBibliotecaComponent {
  tabActivo: 'reservas' | 'compras' = 'reservas';

  reservas = [
    { titulo: 'Libro1', fechaReserva: '11/12/2024', fechaDevolucion: '11/01/2024', estado: 'Activa' },
    { titulo: 'Libro2', fechaReserva: '11/12/2024', fechaDevolucion: '11/01/2024', estado: 'Devuelta' },
    { titulo: 'Libro3', fechaReserva: '11/12/2024', fechaDevolucion: '11/01/2024', estado: 'Terminada' }
  ];

  compras = [
    { titulo: 'Libro A', fechaCompra: '01/04/2025', precio: '19.99€' },
    { titulo: 'Libro B', fechaCompra: '02/04/2025', precio: '25.00€' }
  ];
}
