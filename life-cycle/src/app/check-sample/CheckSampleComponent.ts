import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';


@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent
  implements OnInit, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0;

  constructor() { }

  adicionar() {
    this.quantidade += 1;
  }
  decrementar() {
    this.quantidade  -= 1;
  }
//checked --> content --> view

//quando o primeiro conteúdo é iniciado.
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  //após alguma alteração verifica algum conteúdo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  //após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnDestroy(): void {
    console.log("Good Bye My Friend");
  }

}
