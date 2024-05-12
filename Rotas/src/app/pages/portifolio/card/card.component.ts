import { Component, OnInit } from '@angular/core';
import { PortifolioModule } from '../portifolio.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PortifolioModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  //http://localhost:4200/portifolio/{1}
  constructor (
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ){

    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )
  //http://localhost:4200/portifolio/1?{name=felipe&token=123}
      this.parametrizador.queryParams.subscribe(
        res => console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.navegador.navigate(['/']) //redirecionamento por componente
    // }, 5000)
  }

}
