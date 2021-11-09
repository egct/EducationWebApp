export class TestCompGraf {
    constructor(_id = "", id_question = "", cap_question = "", question = "", answer = [{"option": "", "correct":false},{"option": "", "correct":false},{"option": "", "correct":false},{"option": "", "correct":false}], createdAt="", updatedAt="") {
      this._id = _id;
      this.id_question= id_question; 
      this.cap_question= cap_question;
      this.question= question;
      this.answer= answer;
      this.createdAt= createdAt;
      this.updatedAt= updatedAt;
  
    }
  
    _id: string;
    id_question: string; 
    cap_question: string;
    question: string;
    answer: Option[];
    createdAt: string;
    updatedAt: string;
}

export class Option{
  constructor(option="",correct=false){
    this.option=option;
    this.correct=correct;
  }
  option: string;
  correct: boolean;
}

/*
 "_id": "615fe209dec4370b5ba611f6",
 "id_question":"14",
  "cap_question":"1",
  "question":"Verdadero o Falso a) TEST",
  "answer":[
    {"option":"A. Verdadero, Verdadero","correct":false},
    {"option":"B. Verdadero, Falso","correct":false},
    {"option":"C. Falso, Verdadero","correct":false},
    {"option":"D. Falso, Falso","correct":true}
  ],
  " createdAt ":" 2021-10-08T06: 15: 37.313Z ",
  " updatedAt ":" 2021-10-08T17: 34: 31.727Z "
*/