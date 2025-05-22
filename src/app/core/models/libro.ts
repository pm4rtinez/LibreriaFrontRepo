import { Autor } from "./autor";
import { Categoria } from "./categoria";
import { Reserva } from "./reserva";

export interface Libro{

  Titulo: string;
  Descripcion:string,
  Precio:number,
  Disponible:boolean,
  AutorId:number,
  Autor:Autor,
  CategoriaId:number,
  Categoria:Categoria,
  Reservas:Reserva
}
