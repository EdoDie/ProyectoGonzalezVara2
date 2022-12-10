import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RegistroComponent } from './acciones/pages/registro/registro.component';
import { HomeComponent } from './acciones/pages/home/home.component';
import { LoginComponent } from './acciones/pages/login/login.component';
import { NavbarComponent } from './acciones/navbar/navbar.component';
import { MasvendidoComponent } from './acciones/pages/masvendido/masvendido.component';
import { CategoriasComponent } from './acciones/pages/categorias/categorias.component';
import { NuevoPComponent } from './pages/nuevo-p/nuevo-p.component';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    MasvendidoComponent,
    CategoriasComponent,
    NuevoPComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
