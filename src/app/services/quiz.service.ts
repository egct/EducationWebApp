import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  readonly URL_API = "https://educationwebapp-server.herokuapp.com/api/questions";

  quizzes: Question[];

  constructor(private http: HttpClient) {
  }

  //list questions
  getQuestionsCompGraf() {
    return this.http.get<Question[]>(this.URL_API);
  }

}