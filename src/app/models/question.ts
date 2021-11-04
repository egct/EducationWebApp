export class Question {
    constructor(_id = "", id_question = "", cap_question = "", question = "", answer = "", createdAt="", updatedAt="") {
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
    answer: string;
    createdAt: string;
    updatedAt: string;
    }