import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserCompGraf } from "../models/userCompGraf";

@Injectable({
  providedIn: "root",
})
export class UserCompGrafService {

  selectedUserCompGraf: UserCompGraf;
  selectedMDBUserCompGraf: UserCompGraf;

  userCompGraf: UserCompGraf[];
  readonly URL_API = "https://educationwebapp-server.herokuapp.com/api/users";

  constructor(private http: HttpClient) {
    this.selectedUserCompGraf = new UserCompGraf();
    this.selectedMDBUserCompGraf = new UserCompGraf();
  }

//crea user
  postUserCompGraf(userCompGraf: UserCompGraf) {
    console.log(userCompGraf);
    console.log("return>"+this.http.post(this.URL_API, userCompGraf));
    return this.http.post(this.URL_API, userCompGraf);
  }
//lista users
  getUserCompGraf() {
    return this.http.get<UserCompGraf[]>(this.URL_API);
  }
//update user
  putUserCompGraf(userCompGraf: UserCompGraf) {
    return this.http.put(this.URL_API + `/${userCompGraf._id}`, userCompGraf);
  }
//elimina user
  deleteUserCompGraf(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
//buscar un user
  searchUserCompGraf(_id: string) {
    return this.http.get<UserCompGraf>(this.URL_API + `/${_id}`);
  }
//buscar un user by email
  searchUserCompGrafByEmail(email_user: string) {
    return this.http.get<UserCompGraf>(this.URL_API + `/email/${email_user}`);
  }
}