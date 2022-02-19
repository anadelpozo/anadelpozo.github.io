import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { productos } from '../utils/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private servicioHttp: HttpClient) { }

  tipoproducto : string = "";

  /* productostotales : productos[] = [
    {
      "nombre" : "Café Espresso",
      "tipo" : "Café",
      "imagen" : "https://www.starbucks.es/media/Blonde%20Espresso_tcm31-53172_w1024_n.jpg",
      "precio" : 1.80
    },
     {
      "nombre" : "Café Americano",
      "tipo" : "Café",
      "imagen" : "https://www.starbucks.es/media/Starbucks-Blonde-Americano_tcm31-53275_w1024_n.jpg",
      "precio" :  1.90
    },
    {
      "nombre" : "Cappuccino",
      "tipo" : "Café",
      "imagen" : "https://www.starbucks.es/media/Starbuks-Blonde-Cappuccino_tcm31-53278_w1024_n.jpg",
      "precio" :  2.50
    },
    {
      "nombre" : "Café Latte",
      "tipo" : "Café",
      "imagen" : "https://www.starbucks.es/media/Caf%C3%A9-latte_tcm31-53348_w1024_n.jpg",
      "precio" :  2.0
    },
     {
      "nombre" : "Latte Macchiato",
      "tipo" : "Café",
      "imagen" : "https://www.starbucks.es/media/Latte-Macchiato_tcm31-53349_w1024_n.jpg",
      "precio" :  2.50
    },
    {
      "nombre" : "Bloomer César",
      "tipo"  : "Bocata",
      "imagen" : "https://www.starbucks.es/media/food-sandwiches-ceasar-salad_tcm31-10917_w1024_n.jpg",
      "precio" :  6.50
    },
    {
      "nombre" : "Chapata de Pollo y Queso Cheddar",
      "tipo"  : "Bocata",
      "imagen" : "https://www.starbucks.es/media/food-sandwiches-chicken-cheddar-ciabatta_tcm31-10918_w1024_n.jpg",
      "precio" :  7.00
    },
    {
      "nombre" : "Focaccia de Jamón Jork y Queso Provolone",
      "tipo"  : "Bocata",
      "imagen" : "https://www.starbucks.es/media/food-sandwiches-focaccia-ham-provolone_tcm31-10919_w1024_n.jpg",
      "precio" :  7.50
    },
    {
      "nombre" : "Sándwich de Jamón Bacon y Queso",
      "tipo"  : "Bocata",
      "imagen" : "https://www.starbucks.es/media/food-sandwiches-ham-bacon-cheese_tcm31-10920_w1024_n.jpg",
      "precio" :  7.50
    },
   {
      "nombre" : "Bloomer Clásico de Jamón y Queso",
      "tipo"  : "Bocata",
      "imagen" : "https://www.starbucks.es/media/food-sandwich-classic-ham-cheese_tcm31-10916_w1024_n.jpg",
      "precio" :  6.50
    },
    {
      "nombre" : "Cheesecake de Dulce de Leche",
      "tipo"  : "Tarta",
      "imagen" : "https://www.starbucks.es/media/food-tarts-caramal-cheesecake_tcm31-10861_w1024_n.jpg",
      "precio" :  4.50
    },
    {
      "nombre" : "Cheesecake de Frambuesa",
      "tipo"  : "Tarta",
      "imagen" : "https://www.starbucks.es/media/food-tarts-raspberry-cheesecake_tcm31-10864_w1024_n.jpg",
      "precio" :  5.50
    },
     {
      "nombre" : "Cake de Manzana",
      "tipo"  : "Tarta",
      "imagen" : "https://www.starbucks.es/media/food-tarts-apple-cheesecake_tcm31-10860_w1024_n.jpg",
      "precio" :  4.50
    },
    {
      "nombre" : "Carrot Cake",
      "tipo"  : "Tarta",
      "imagen" : "https://www.starbucks.es/media/food-tarts-carrot-cake_tcm31-10862_w1024_n.jpg",
      "precio" :  5.00
    },
    {
      "nombre" : "Chocolate Cake",
      "tipo"  : "Tarta",
      "imagen" : "https://www.starbucks.es/media/food-tarts-chocolate-cake_tcm31-10863_w1024_n.jpg",
      "precio" :  5.50
    }
  ] */

  productosfiltrados: productos[]=[]
  productosCarrito:productos[]=[]

  /* getProductosFiltrados(filtro:string): productos[]{
      this.tipoproducto=filtro;
      console.log(this.productostotales);
      return this.productostotales.filter((element)=> element.tipo == this.tipoproducto);


  } */

  getDatos(dato:string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('BQANI+NhSYiPin66ZXDTeA==:8it3PZ2i4XmKkBPzPcKgsA==')
      })
    };
    console.log(httpOptions)
    return this.servicioHttp.get('https://coffedam.oa.r.appspot.com/' + dato, httpOptions);
  }

  pasarCarritoServices(producto:productos[]){
    this.productosCarrito = producto;
    console.log(this.productosCarrito);

  }

  pasarCarritoaCarrito():productos[]{
      return this.productosCarrito;
  }
}
