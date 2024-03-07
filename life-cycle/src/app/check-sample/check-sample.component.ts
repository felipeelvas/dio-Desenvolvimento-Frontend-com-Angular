import {
    Component,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewInit
  } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent
implements OnInit, DoCheck,
AfterContentInit,
AfterViewChecked,
AfterContentChecked,
AfterViewInit{

  quantidade: number = 0

  constructor(){}
  adicionar(){
    this.quantidade +=1
  }
  decrementar(){
    this.quantidade -= 1
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

}
