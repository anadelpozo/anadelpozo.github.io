import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenproductos'
})
export class ImagenproductosPipe implements PipeTransform {

  transform(tipo: string, ...args: unknown[]): unknown {

   if(tipo === "carrito"){
      return "https://picnicimpro.files.wordpress.com/2019/05/shopping-basket-icon.png";
   } else if (tipo === "gatito"){
     return "https://cdn3.vectorstock.com/i/thumb-large/54/62/cat-ready-for-a-hugging-black-round-fat-pet-icon-vector-30175462.jpg";
   } else {
     return null;
   }
    }

}
