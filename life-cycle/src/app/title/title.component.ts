import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''
  //nome: string = 'Felipe Elvas Barbosa'
  constructor(){
    console.log(`Construtor ${this.nome}`)
  }
  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`)
 }

  ngOnInit(): void {
    this.nome = this.nome + "x"
    console.log(`OnInit ${this.nome}`)
  //this.nome = `Olá meu nome é ${this.nome}`
 }


}
