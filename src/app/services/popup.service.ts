import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Popup } from "../models/popup";
import { UserCompGraf } from "../models/userCompGraf";


@Injectable({
  providedIn: "root",
})
export class PopupService {

  popupemail: Popup;
  docentesCompGraf: UserCompGraf[];

  readonly URL_API = "https://educationwebapp-server.herokuapp.com/api/email";
  readonly URL_API2 = "https://educationwebapp-server.herokuapp.com/api/users/type_user/Docente";

  constructor(private http: HttpClient) {
    this.popupemail = new Popup();
  }

//crea email
  postPopupEmailMethod(popupemail: Popup) {
    console.log(popupemail);
    return this.http.post(this.URL_API, popupemail);
  }
//lista docentes
getDocentesCompGraf() {
    return this.http.get<UserCompGraf[]>(this.URL_API2);
  }
  
}