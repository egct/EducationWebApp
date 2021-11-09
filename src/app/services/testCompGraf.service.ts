import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TestCompGraf } from "../models/testCompGraf";
import { NumberValueAccessor } from "@angular/forms";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root",
})
export class TestCompGrafService {

  selectedTestCompGraf: TestCompGraf;
  selectedMDBTestCompGraf: TestCompGraf;

  testCompGraf: TestCompGraf[];
  readonly URL_API = "https://educationwebapp-server.herokuapp.com/api/questions";

  constructor(private http: HttpClient) {
    this.selectedTestCompGraf = new TestCompGraf();
    this.selectedMDBTestCompGraf = new TestCompGraf();
  }

//crea question
  postTestCompGraf(testCompGraf: TestCompGraf) {
    console.log(testCompGraf);
    console.log("return>"+this.http.post(this.URL_API, testCompGraf));
    return this.http.post(this.URL_API, testCompGraf);
  }
//lista tests
  getTestCompGraf() {
    return this.http.get<TestCompGraf[]>(this.URL_API);
  }
//update question
  putTestCompGraf(testCompGraf: TestCompGraf) {
    return this.http.put(this.URL_API + `/${testCompGraf._id}`, testCompGraf);
  }
//elimina question
  deleteTestCompGraf(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
//buscar un question
  searchTestCompGraf(_id: string) {
    return this.http.get<TestCompGraf>(this.URL_API + `/${_id}`);
  }

//obtener siguiente numero de pregunta 
  getNumberCurrentQuestionCompGraf(cap_question: String) {
    console.log("xxx"+cap_question);
    console.log("xxx"+this.http.get<TestCompGraf>(this.URL_API + `/cap/${cap_question}`));
    return this.http.get<TestCompGraf>(this.URL_API + `/cap/${cap_question}`);
}
}