import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LayoutComponent } from './layout/layout.component';
import { ComprarComponent } from './comprar/comprar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MiBibliotecaComponent } from './mi-biblioteca/mi-biblioteca.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'comprar', component: ComprarComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'biblioteca', component: MiBibliotecaComponent },
      { path: '', redirectTo: 'comprar', pathMatch: 'full' }
    ]
  }
];
