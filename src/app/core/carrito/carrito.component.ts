import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { productos } from 'src/app/utils/producto';

@Component({
  selector: 'coffedam-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarrito: productos[]=[]
  hayproductos:boolean=false;
  nopulsado:boolean=true;
  preciototal:number=0;

  constructor(private servicioProductos : ProductosService) { }

  ngOnInit(): void {

    this.productosCarrito = this.servicioProductos.pasarCarritoaCarrito();
    this.productosCarrito.forEach(element => {
        this.preciototal+= element.cantidad*element.precio;
    });
    if(this.productosCarrito.length>0){
      this.hayproductos = true;
    } else {
      this.hayproductos = false;
    }
    console.log(this.productosCarrito);


  }
  pulsado(){
    this.nopulsado = false;
  }



}
