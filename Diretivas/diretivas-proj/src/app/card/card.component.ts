import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
produtos: string [] = []
menuType: string = "superUser"

constructor() {
  this.produtos = [
    "mouse",
    "teclado",
    "cabo",
    "font"
  ]
}

ngOnInit(): void {
}
adicionar(){
  this.produtos.push("monitor")
}
remover(index: number){
this.produtos.splice(index,1)
}

}
