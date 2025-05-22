import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoReservaTexto',
  standalone: true
})
export class EstadoReservaTextoPipe implements PipeTransform {
  transform(valor: number | string): string {
    const mapa: Record<number, string> = {
      0: 'Activo',
      1: 'En Reserva',
      2: 'Terminado'
    };

    return mapa[+valor] || 'Desconocido';
  }
}
