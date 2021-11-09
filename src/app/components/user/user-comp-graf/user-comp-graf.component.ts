import { Component, OnInit, ViewChild  } from '@angular/core';

import { UserCompGrafService } from '../../../services/userCompGraf.service';
import { UserCompGraf } from '../../../models/userCompGraf';
import { NgForm } from "@angular/forms";
import { FormGroup, FormBuilder} from "@angular/forms";
import * as shajs from 'sha.js';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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
  /*Responsive Table**/
  displayedColumns: string[] = ['ID', 'Nombre', 'Email', 'Tipo', 'Nrc', 'Tutor', 'Acciones'];
  dataSource: MatTableDataSource<UserCompGraf>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  /***/

  constructor(public userCompGrafService: UserCompGrafService, private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.getUserCompGraf();
    console.log("aqui1>"+this.getUserCompGraf());
    /*Responsive Table**/
    /***/
  }
 
  /*Responsive Table**/
  ngAfterViewInit() {
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addbut(){
    window.alert("addbutton");
  }
  editbut(){
    window.alert("editbutton");
  }

  /***/
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
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.userCompGrafService.userCompGraf);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
