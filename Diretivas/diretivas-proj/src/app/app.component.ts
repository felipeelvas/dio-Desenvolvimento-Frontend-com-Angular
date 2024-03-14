import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { CardComponent } from "./card/card.component";
import { CompAtributosComponent } from "./comp-atributos/comp-atributos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent, CommonModule, CompAtributosComponent]
})
export class AppComponent {
  title = 'diretivas-proj';
  isAliveCard = true;
}
