import { Component, OnInit } from '@angular/core';

import { UserCompGrafService } from '../../../services/userCompGraf.service';
import { UserCompGraf } from '../../../models/userCompGraf';
import { NgForm } from "@angular/forms";
import { FormGroup, FormBuilder} from "@angular/forms";
import * as shajs from 'sha.js';


@Component({
  selector: 'app-user-comp-graf',
  templateUrl: './user-comp-graf.component.html',
  styleUrls: ['./user-comp-graf.component.css'],
  providers: [UserCompGrafService]
})
export class UserCompGrafComponent implements OnInit {

  /**Tipo de usuario*/
  lista:string[]=["Estudiante","Docente"];
  userForm: FormGroup;
  /***/
  constructor(public userCompGrafService: UserCompGrafService, private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.getUserCompGraf();
    console.log("aqui1>"+this.getUserCompGraf());
  }

  addUserCompGraf(form?: NgForm) {

    console.log("aqui2>"+form.value);
    if (form.value._id) {
      console.log(form.value._id);
      this.userCompGrafService.putUserCompGraf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getUserCompGraf();
      });
    } else {
      //console.log(form.value);
      //console.log(this.userCompGrafService.selectedUserCompGraf.id_user+"AQUIII");
      this.createUserCompGraf();
      console.log(this.userForm.value);
      
      this.userCompGrafService.postUserCompGraf(this.userForm.value).subscribe((res) => {
        console.log("Aqui3> "+this.userForm.value.name_user)
        this.getUserCompGraf();
        this.resetForm(form);
        this.resetuserForm(this.userForm);
      });
    }
  }
  //lista los usuarios
  getUserCompGraf() {
    this.userCompGrafService.getUserCompGraf().subscribe((res) => {
      this.userCompGrafService.userCompGraf = res;
    });
  }

  editUserCompGraf(userCompGraf: UserCompGraf) {
    this.userCompGrafService.selectedUserCompGraf = userCompGraf;
  }

  deleteUserCompGraf(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.userCompGrafService.deleteUserCompGraf(_id).subscribe((res) => {
        this.getUserCompGraf();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userCompGrafService.selectedUserCompGraf = new UserCompGraf();
    }
  }

  /******NEW FORM without Id********/
  createUserCompGraf(){
    this.userForm= this.formBuiler.group({
      id_user: this.userCompGrafService.selectedUserCompGraf.id_user, 
      type_user: this.userCompGrafService.selectedUserCompGraf.type_user, 
      name_user: this.userCompGrafService.selectedUserCompGraf.name_user, 
      email_user: this.userCompGrafService.selectedUserCompGraf.email_user, 
      nrc_user: this.userCompGrafService.selectedUserCompGraf.nrc_user,
      name_tutor: this.userCompGrafService.selectedUserCompGraf.name_tutor,
      password_user: shajs('sha256').update(this.userCompGrafService.selectedUserCompGraf.id_user).digest('hex')
    });
  }
  resetuserForm(form?: FormGroup) {
    if (form) {
      form.reset();
      this.userCompGrafService.selectedUserCompGraf = new UserCompGraf();
    }
  }

}
