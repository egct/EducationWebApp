import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuizService } from '../../../services/quiz.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Question[] = [];

  currentQuiz = 0;
  lengthQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result = false;
  minimum_score= 70; //%
  aux: Question[] = [];
  cont: number = 0;
  
  /*****/
  @Input() propagarNumCapitulo: number; 

  constructor(private quizService: QuizService, private authService: AuthService, private router: Router) { }

  public pruebanombre: string='';
  public pruebaemail: string='';
  
  ngOnInit(): void {

    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged'+auth.photoURL);
        this.pruebanombre=auth.displayName;
        this.pruebaemail=auth.email;       
      } else {
        console.log('NOT user logged'); 
      }
    });

    this.quizService.getQuestionsCompGraf();
    console.log("aqui1>"+this.quizService.getQuestionsCompGraf());
    console.log("NUM_CAPITULO"+this.propagarNumCapitulo);
    
    this.quizService.getQuestionsCompGraf().subscribe((res) => {
      this.quizService.quizzes = res;
      // Asign list to the variables
      this.quizzes = this.indentifyCap(this.quizService.quizzes);
      this.quizzes = this.shuffle(this.quizzes);
      this.lengthQuiz = this.quizzes.length;
      });
    
  }

  onAnswer(option:boolean){
    console.log(option);
    this.answerSelected = true;
    setTimeout(()=>{
      this.currentQuiz++;
      this.answerSelected = false;
    }, 2000);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
  }

  showResult(){
    this.result=true;
  }

  showNext(){
    this.currentQuiz++;
  }

  formatScore(valor) {
    // si no es un número devuelve el valor, o lo convierte a número con 2 decimales
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }

  shuffle(array) {
    
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    for (let index = 0; index < array.length; index++) {
      console.log(array[index].id_question);
    }
     
  
    return array;
  }

  indentifyCap(array){
    for (let index = 0; index < array.length; index++) {
      if (array[index].cap_question == this.propagarNumCapitulo) {
        this.aux[this.cont] =  array[index];
        this.cont++;
      } 
    }
    this.cont=0;
    return this.aux;
  }

  resetQuiz() {
    try {
      this.router.navigate(['user/content/chapterII']);
      this.router.navigate(['user/content/chapterI']);
    } catch (error) {
      console.log(error);
    }
  }

}