import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { productos } from 'src/app/utils/producto';


@Component({
  selector: 'coffedam-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  tipo : string = "";
  titulo : string = "";
  productostotales : productos[]=[]
  productosCarrito: productos[]=[]
  constructor(private gestorRutas : ActivatedRoute, private servicioProductos : ProductosService) { }

  ngOnInit(): void {
    this.gestorRutas.params.subscribe((element : Params)=>{
      this.tipo = element['alimento'];
      switch (this.tipo) {
        case "espresso":
          this.titulo = "Espresso";
          break;
          case "frappuccino":
          this.titulo = "Frappuccino";
          break;
          case "chocolate":
          this.titulo = "Chocolates";
          break;
          case "te":
          this.titulo = "Tés";
          break;
          case "infusiones":
          this.titulo = "Infusiones";
          break;
          case "muffins":
          this.titulo = "Muffins";
          break;
          case "glaseados":
          this.titulo = "Glaseados";
          break;
          case "bizcochos":
          this.titulo = "Bizcochos";
          break;
          case "salados":
          this.titulo = "Salados";
          break;
          case "snacks":
          this.titulo = "Snacks";
          break;
          case "tartas":
          this.titulo = "Tartas";
          break;
          case "cookies":
          this.titulo = "Cookies";
          break;
          case "bolleria":
          this.titulo = "Bollería";
          break;
          case "ensaladas":
          this.titulo = "Ensaladas";
          break;
        default:
          break;
      }
      this.servicioProductos.getDatos(this.tipo).subscribe((d) => {

        console.log(d);
        console.log(d.orange);
        var a = Object.keys(d);
        console.log(a[1]);
        var b = []
        for (let i = 0; i < a.length; i++) {
          console.log(d[a[i]])
          b.push(d[a[i]])
        }
        console.log(b)
        this.productostotales = b;
      });
      console.log(this.tipo);
      //this.productostotales = this.servicioProductos.getProductosFiltrados(this.tipo);
      /* this.productostotales = this.servicioProductos.getDatos(this.tipo);
      console.log(this.productostotales); */

    })

  }
  addCarrito(cantidad:string, nombre:string, precio:number, imagen:string){
    this.productosCarrito = this.servicioProductos.pasarCarritoaCarrito();
      let producto = {} as productos;
      producto.imagen = imagen;
      producto.nombre = nombre;
      producto.precio = precio;
      producto.cantidad = Number(cantidad);
      //console.log(producto);
      this.productosCarrito.push(producto);
      this.productosCarrito.forEach(element => {
        console.log(element);

      });
      this.pasarCarrito();
  }
  pasarCarrito(){
    this.servicioProductos.pasarCarritoServices(this.productosCarrito);
    }


  /* obtenerArray(dato: string){
    console.log("Hola")
    this.servicioProductos.getDatos(dato).subscribe((d) => {

      console.log(d);
      console.log(d.orange);
      var a = Object.keys(d);
      console.log(a[1]);
      var b = []
      for (let i = 0; i < a.length; i++) {
        console.log(d[a[i]])
        b.push(d[a[i]])
      }
      console.log(b)
      this.productostotales = b;
    });
  } */

}
