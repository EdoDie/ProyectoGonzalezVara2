import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './acciones/pages/home/home.component';;
import { RegistroComponent } from './acciones/pages/registro/registro.component';
import { LoginComponent } from './acciones/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoriasComponent } from './acciones/pages/categorias/categorias.component';
import { MasvendidoComponent } from './acciones/pages/masvendido/masvendido.component';
const routes: Routes = [
  {path: 'categorias', component: CategoriasComponent, canActivate:[AuthGuard] },
  {path: 'masvendido', component: MasvendidoComponent, canActivate:[AuthGuard] },
  { path: 'home'    , component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'registro' },
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
