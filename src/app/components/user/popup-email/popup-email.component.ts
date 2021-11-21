import { Component, OnInit } from '@angular/core';

import { PopupService } from '../../../services/popup.service';
import { Popup } from '../../../models/popup';
import { NgForm } from "@angular/forms";
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-popup-email',
  templateUrl: './popup-email.component.html',
  styleUrls: ['./popup-email.component.css'],
  providers: [PopupService]
})
export class PopupEmailComponent implements OnInit{

  listaDocentes:Array<string>=[];
  nombrecurrentDocente: string;

  constructor(public popUpEmailService: PopupService,private authService: AuthService, private afsAuth: AngularFireAuth) {}
  
  ngOnInit() {
    this.getCurrentUser();
    this.getDocentesCompGraf();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.popUpEmailService.popupemail.from=auth.displayName+"("+auth.email+")";
      }
    });
  }    
  toggleChat(selector, selector2, visible) {
    console.log("AQUIIIIIIIII ");
    var elemento = document.querySelector(selector);
    var btnEmail = document.querySelector(selector2);
    console.log(elemento);
      if (elemento != null) {
       elemento.style.display = visible?'block':'none';
       btnEmail.style.display = !visible?'block':'none';
      }
  }

  sendmessage(form?: NgForm) {
    console.log("De>"+form.value.from);
    if (form.value.to && form.value.subject && form.value.from && form.value.text) {
      console.log("email>"+form.value.to);
      console.log("asunto>"+form.value.subject);
      console.log("contenido>"+form.value.text);
      this.popUpEmailService.postPopupEmailMethod(form.value).subscribe((res) => {
        console.log("MENSAJE Enviado"+res); 
        this.resetForm(form);
        this.getCurrentUser();
        this.getDocentesCompGraf();
      });
   } 
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.popUpEmailService.popupemail = new Popup();
      this.listaDocentes=[];
      this.nombrecurrentDocente="";
    }
  }

  //lista los docentes
  getDocentesCompGraf() {
    this.popUpEmailService.getDocentesCompGraf().subscribe((res) => {
      this.popUpEmailService.docentesCompGraf = res;
      for (let entry of this.popUpEmailService.docentesCompGraf) {
        this.listaDocentes.push(entry.email_user);
      }
    });
  }
//buscar nombre docente
  obtenernombreDocente(){
    for (let entry of this.popUpEmailService.docentesCompGraf) {
      if(entry.email_user===this.popUpEmailService.popupemail.to){
        this.nombrecurrentDocente=entry.name_user;
      }
    }
  }

}
