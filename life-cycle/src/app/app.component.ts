import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { CheckSampleComponent } from './check-sample/CheckSampleComponent';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TitleComponent, CheckSampleComponent]
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample:boolean = true

  disposeCheckSample():void{
    this.isAliveCheckSample=false
  }
}
