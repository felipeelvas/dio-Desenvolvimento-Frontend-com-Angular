import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import quizz__questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit{
  title:string=""

  questions:any
  questionSelected:any

  answers:string[]=[]
  answerSelected:string=""

  questionIndex:number=0
  questionMaxIndex:number=0

  finished:boolean= false


  ngOnInit(): void {
    if(quizz__questions){
      this.finished = false
      this.title = quizz__questions.title

      this.questions = quizz__questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex)
      console.log(this.questionMaxIndex)
    }
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()

  }

  async nextStep(){
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswers:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz__questions.results[finalAnswers as keyof
        typeof quizz__questions.results]
      //verificar a opção ganhadora
      console.log(this.answers)
    }
  }

  async checkResult(answers:string[]){

    const result = answers.reduce((previous, current, i, arr)=>{
        if(
            arr.filter(item => item === previous).length >
            arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })
    return result
  }



}
