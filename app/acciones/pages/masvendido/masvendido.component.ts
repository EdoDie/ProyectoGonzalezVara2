import { isNgContainer } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/usuario.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-masvendido',
  templateUrl: './masvendido.component.html',
  styleUrls: ['./masvendido.component.css']
})
export class MasvendidoComponent implements OnInit {

  nuevoProducto:Articulo = new Articulo ();

  constructor( private productoServices: FirebaseService,

    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id=  ''+this.route.snapshot.paramMap.get('id');

    if( id !== 'nuevo'){
      this.productoServices.getProductos(id)
      .subscribe ( (resp: any) => {
        this.nuevoProducto=resp;
        this.nuevoProducto.id = id;

      });
    }
  }

  agregar(form:NgForm){

    if(form.invalid){
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title:'Espere por favor',
      text:'La informacion se esta guardando en el servidor',
      icon:'info',
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    Swal.showLoading(Swal.getDenyButton());
  }




}
