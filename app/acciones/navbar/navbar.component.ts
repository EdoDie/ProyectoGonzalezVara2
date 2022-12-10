import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router
  ) { 


  }
productoc(){
  this.router.navigateByUrl('/categorias')

}
productop(){
  this.router.navigateByUrl('/masvendido')

}
salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login')
  }

  home(){
    this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
  }

}
