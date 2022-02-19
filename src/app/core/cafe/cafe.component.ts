import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coffedam-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  constructor(private navegador:Router) { }

  ngOnInit(): void {
  }
  navegar(navegacion:string){
    this.navegador.navigate([navegacion])
  }
}
