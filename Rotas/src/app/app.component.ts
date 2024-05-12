import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { MenuComponent } from "./shared/menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, IndexModule, PortifolioModule, MenuComponent]
})
export class AppComponent {
  title = 'Rotas';
}
