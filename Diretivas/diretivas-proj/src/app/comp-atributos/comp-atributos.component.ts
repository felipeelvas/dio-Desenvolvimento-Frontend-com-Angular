
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit  {
estilo:string=""
  constructor(){}
  ngOnInit(): void {
    throw new Error('error.');
  }
  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{

    }
  }
}
