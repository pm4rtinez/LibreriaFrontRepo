import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

import { MenuComponent } from "../shared/menu/menu.component";
import { CategoriaService } from '../core/services/categoria.service';
import { AutorService } from '../core/services/autor.service';
import { LibroService } from '../core/services/libro.service';

import { Categoria } from '../core/models/categoria';
import { Autor } from '../core/models/autor';
import { Libro } from '../core/models/libro';

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    DividerModule,
    MenuComponent
  ],
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  tab = 'comprar';
  autor = '';
  titulo = '';
  precio = '';
  categoriaSeleccionada = '';
  disponible = false;

  categorias: Categoria[] = [];
  autores: Autor[] = [];
  libros: Libro[] = [];
  librosFiltrados: Libro[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private autorService: AutorService,
    private libroService: LibroService
  ) {}

  ngOnInit(): void {
    this.buscarLibros();
    this.categoriaService.obtenerCategorias().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error('Error cargando categorías', err)
    });

    // Crear autor al iniciar
    this.autorService.crearAutor("Pablo123").subscribe({
      next: () => console.log("✅ Autor creado"),
      error: (error) => console.error("❌ No se pudo crear el autor", error)
    });
  }

  buscarLibros(): void {
    this.libroService.buscarLibros().subscribe({
      next: (data) => {
        this.libros = data;
        this.aplicarFiltros();
      },
      error: (err) => console.error('Error cargando libros', err)
    });
  }

  aplicarFiltros(): void {
    this.librosFiltrados = this.libros.filter(libro =>
      (!this.autor || libro.Autor.Nombre.toLowerCase().includes(this.autor.toLowerCase())) &&
      (!this.titulo || libro.Titulo.toLowerCase().includes(this.titulo.toLowerCase())) &&
      (!this.precio || libro.Precio <= +this.precio) &&
      (!this.categoriaSeleccionada || libro.Categoria.nombre === this.categoriaSeleccionada) &&
      (!this.disponible || libro.Disponible)
    );
  }

  accion(libro: Libro): void {
    alert(`${this.tab === 'comprar' ? '📘 Comprado' : '📖 Reservado'}: ${libro.Titulo}`);
  }
}
