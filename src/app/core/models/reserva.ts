export interface Reserva {
  id: number;
  tituloLibro: string;
  fechaReserva: string;
  fechaLimite: string;
  estadoReserva: 'Activo' | 'EnReserva' | 'Terminado';
}
