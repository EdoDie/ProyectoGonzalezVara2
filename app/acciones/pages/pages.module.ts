import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MasvendidoComponent } from './masvendido/masvendido.component';
import { RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  HomeComponent,
  MasvendidoComponent,
  CategoriasComponent,
  LoginComponent,
  RegistroComponent,
  
  ],

  exports:[
    HomeComponent,
    MasvendidoComponent,
    CategoriasComponent,
    LoginComponent,
    RegistroComponent,
    
  ],


  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ]
})
export class PagesModule { }
