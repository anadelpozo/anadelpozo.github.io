import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeComponent } from './core/cafe/cafe.component';
import { CarritoComponent } from './core/carrito/carrito.component';
import { InformacionComponent } from './core/informacion/informacion.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { ProductosComponent } from './core/productos/productos.component';

const routes: Routes = [
  {path: 'inicio', component :InicioComponent},
{path: 'cafeinformacion', component : CafeComponent},
{path: 'productos/:alimento', component : ProductosComponent},
{path: 'carrito', component : CarritoComponent},
{path: 'informacion', component : InformacionComponent},
{
  path: '**', redirectTo: 'inicio'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
