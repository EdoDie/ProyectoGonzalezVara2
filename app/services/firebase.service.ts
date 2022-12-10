import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { Articulo } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = 'https://auth-49f1e-default-rtdb.firebaseio.com/Productos';

 
  constructor(private http: HttpClient) { }

  getProductos(heroe: string)
  {
    return this.http.post(`${`this.url`}/productos.json`, heroe)
    .pipe(
      map ((resp: any)=>{
        heroe.id = resp.name;
        return heroe;

      })
      );
    
  }


}

