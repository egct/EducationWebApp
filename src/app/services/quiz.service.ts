import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes : Quiz [] = [
    {
      question: '¿Cual es el tercer planeta del sistema solar?',
      answer: [
        { option: 'Mercurio' , correct: false},
        { option: 'Venus' , correct: false},
        { option: 'Saturno' , correct: false},
        { option: 'Tierra' , correct: true}
      ]
    },
    {
      question: '¿Cual es el segundo planeta del sistema solar?',
      answer: [
        { option: 'Mercurio' , correct: false},
        { option: 'Venus' , correct: true},
        { option: 'Saturno' , correct: false},
        { option: 'Tierra' , correct: false}
      ]
    },
    {
      question: '¿Cual es el cuarto planeta del sistema solar?',
      answer: [
        { option: 'Mercurio' , correct: false},
        { option: 'Venus' , correct: false},
        { option: 'Saturno' , correct: false},
        { option: 'Marte' , correct: true}
      ]
    }

  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}