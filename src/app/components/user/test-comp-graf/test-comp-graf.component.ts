import { Component, OnInit, ViewChild  } from '@angular/core';

import { TestCompGrafService } from '../../../services/testCompGraf.service';
import { Option, TestCompGraf } from '../../../models/testCompGraf';
import { NgForm } from "@angular/forms";
import { FormGroup, FormBuilder} from "@angular/forms";
import * as shajs from 'sha.js';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-test-comp-graf',
  templateUrl: './test-comp-graf.component.html',
  styleUrls: ['./test-comp-graf.component.css'],
  providers: [TestCompGrafService]
})
export class TestCompGrafComponent implements OnInit {

/**Tipo de usuario*/
lista:string[]=["1","2","3"];
testForm: FormGroup;
/***/
/*Responsive Table**/
displayedColumns: string[] = ['ID', 'Capitulo', 'Pregunta', 'Respuestas', 'Acciones'];

dataSource: MatTableDataSource<TestCompGraf>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
/***/
/**Answer*/
favoriteSeason: string;
seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
/**/
aux: TestCompGraf=new TestCompGraf();
num: number;
constructor(public testCompGrafService: TestCompGrafService, private formBuiler: FormBuilder) {}

ngOnInit() {
  this.getTestCompGraf();
  console.log("aqui1>"+this.getTestCompGraf());
}

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
addTestCompGraf(form?: NgForm) {

  console.log("aqui2>"+form.value);
  if (form.value._id) {
    console.log(form.value._id);
    this.testCompGrafService.putTestCompGraf(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getTestCompGraf();
    });
  } else {
    //console.log(form.value);
    //console.log(this.userCompGrafService.selectedUserCompGraf.id_user+"AQUIII");
    console.log("1");
    this.createTestCompGraf();
    console.log("3");    
    this.testCompGrafService.postTestCompGraf(this.testForm.value).subscribe((res) => {
      console.log("4");
      this.getTestCompGraf();
      this.resetForm(form);
      this.resettestForm(this.testForm);
      console.log("5");
    });
    console.log("6");
    //this.obtenerId_Question();
  }
}
//lista los usuarios
getTestCompGraf() {
  this.testCompGrafService.getTestCompGraf().subscribe((res) => {
    this.testCompGrafService.testCompGraf = res;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.testCompGrafService.testCompGraf);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

editTestCompGraf(testCompGraf: TestCompGraf) {
  this.testCompGrafService.selectedTestCompGraf = testCompGraf;
}

deleteTestCompGraf(_id: string, form: NgForm) {
  if (confirm("Are you sure you want to delete it?")) {
    this.testCompGrafService.deleteTestCompGraf(_id).subscribe((res) => {
      this.getTestCompGraf();
      this.resetForm(form);
    });
  }
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.testCompGrafService.selectedTestCompGraf = new TestCompGraf();
  }
}
/*****/
obtenerId_Question(){
  console.log("2.1");
  this.testCompGrafService.getNumberCurrentQuestionCompGraf(this.testCompGrafService.selectedTestCompGraf.cap_question).subscribe((res) => {
    console.log("2.2");
    this.aux = res;
    if(this.aux){
      this.num=Number(this.aux.id_question);
      this.num+=1;
      console.log("num>>"+this.num);
    }else{
      this.num=1;
    }
    console.log("idQ>>"+this.num);

  });
}
/******NEW FORM without Id********/
createTestCompGraf(){
  console.log(">>>>>"+this.favoriteSeason);
  for(let i=0;i<this.testCompGrafService.selectedTestCompGraf.answer.length;i++){
    if(this.testCompGrafService.selectedTestCompGraf.answer[i].option===this.favoriteSeason){
      this.testCompGrafService.selectedTestCompGraf.answer[i].correct=true;
    }else{
      this.testCompGrafService.selectedTestCompGraf.answer[i].correct=false;
    }
  }
  let formArray=this.formBuiler.array(this.testCompGrafService.selectedTestCompGraf.answer);
  console.log("Convertir +1>>"+this.num);
  this.testForm= this.formBuiler.group({
    id_question: this.num, 
    cap_question: this.testCompGrafService.selectedTestCompGraf.cap_question, 
    question: this.testCompGrafService.selectedTestCompGraf.question, 
    answer: formArray
  });
}
resettestForm(form?: FormGroup) {
  if (form) {
    form.reset();
    this.testCompGrafService.selectedTestCompGraf = new TestCompGraf();
  }
}

/**/ 



}
