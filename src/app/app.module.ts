import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { ProductosComponent } from './core/productos/productos.component';
import { CafeComponent } from './core/cafe/cafe.component';
import { ImagenproductosPipe } from './pipe/imagenproductos.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './core/carrito/carrito.component';
import { InformacionComponent } from './core/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    CafeComponent,
    ImagenproductosPipe,
    CarritoComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
