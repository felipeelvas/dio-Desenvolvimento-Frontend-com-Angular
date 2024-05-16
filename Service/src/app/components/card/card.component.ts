import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  name: string = "CHARIZARD"
  attributesTypes:string[] = ['FIRE', 'ROCK']

constructor(){}

ngOnInit(): void {

}

}
