import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import firebase from "firebase/app"
import { UserInterface } from '../../../models/user';

import { UserCompGrafService } from '../../../services/userCompGraf.service';
import { UserCompGraf } from '../../../models/userCompGraf';
import { NgForm } from "@angular/forms";

import * as shajs from 'sha.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserCompGrafService]
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public isUserMDB: boolean=false;
  public mensajeMDB: string='';
  
  @Output() propagar = new EventEmitter<UserCompGraf>();

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, public userCompGrafService: UserCompGrafService) { 
    this.isUserMDB=false;      
  }

  ngOnInit(): void {

  }

async onLoginGoogle(){
  try {
    const user = await this.authService.loginGoogleUser();
    if (user) {
      this.checkUserIsVerified(user);
    }
  } catch (error) {
    console.log(error);
  }
  }

  private checkUserIsVerified(userr: firebase.User) {
    if (userr && userr.emailVerified) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/register']);
    }
  }
  /************************************************************************************/
  public onCheckMDB(form?: NgForm) {
    try {
      //aqui poner logica 
      console.log('login>onCheckMDB>email'+this.userCompGrafService.selectedMDBUserCompGraf.email_user);
      console.log('login>onCheckMDB>password'+ shajs('sha256').update(this.userCompGrafService.selectedMDBUserCompGraf.id_user).digest('hex'));
      this.userCompGrafService.searchUserCompGrafByEmail(this.userCompGrafService.selectedMDBUserCompGraf.email_user).subscribe((res) => {
        console.log("res.password_user>>>"+res.password_user);
        if(res){
          console.log("res.password_user>>>"+res.password_user);
          if(res.password_user===shajs('sha256').update(this.userCompGrafService.selectedMDBUserCompGraf.id_user).digest('hex')){
            this.userCompGrafService.selectedMDBUserCompGraf = res;
            this.mensajeMDB='Usuario pertenece a CompGraf, Inicia sesion con Gmail';
            console.log(this.userCompGrafService.selectedMDBUserCompGraf.name_user+"##");
            console.log(this.userCompGrafService.selectedMDBUserCompGraf.type_user+"##");
            this.isUserMDB=true;
            this.propagar.emit(this.userCompGrafService.selectedMDBUserCompGraf);
          }else{
            this.mensajeMDB='Contraseña Incorrecta';
          }
        }else{
          this.mensajeMDB='Usuario no pertenece a CompGraf';
        }
        //this.resetForm(form);
        //this.router.navigate(['']);
      });
    } catch (error) {
      console.log(error);
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userCompGrafService.selectedMDBUserCompGraf = new UserCompGraf();
      this.mensajeMDB='';
    }

  }

  /*********************************************/
  
  checkAgain(){
      this.isUserMDB=false;
      this.mensajeMDB='';
  }

  limpiarAll(){
    this.isUserMDB=false;
    this.mensajeMDB='';
    this.userCompGrafService.selectedMDBUserCompGraf = new UserCompGraf();
  }
  


}
