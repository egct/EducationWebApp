export class Popup {
    constructor(from = "", to = "", subject = "", text = "") {
      this.from = from;
      this.to= to; 
      this.subject= subject;
      this.text= text;
    }
  
    from: string;
    to: string; 
    subject: string;
    text: string;
}

/*
  "from": "Kevin Sanipatin(kisanipatin@espe.edu.ec)",
  "to":"egcuichan@espe.edu.ec",
  "subject":"TEST ENVIO SABADO",
  "text":"Hello this is a test - CompGraf"
*/