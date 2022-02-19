import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coffedam-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private navegador: Router) { }

  ngOnInit(): void {
  }

  navegar(navegacion:string){
    this.navegador.navigate([navegacion])
  }

}
