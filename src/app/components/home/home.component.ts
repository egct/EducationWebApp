import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NavService} from 'src/app/services/nav.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pruebanombre: string='';
  public pruebaemail: string='';
  public pruebaphoto: string='';
  public pruebatitle: string='';
  
  constructor(private navService: NavService, private authService: AuthService, private afsAuth: AngularFireAuth, private route: Router) { }

  ngOnInit(): void {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged'+auth.photoURL);
        this.pruebanombre=auth.displayName;
        this.pruebaemail=auth.email;        
        this.pruebaphoto=auth.photoURL;
      } else {
        console.log('NOT user logged'); 
      }
    });
  }

  onClick(event) {
//    console.log(event);
//    console.log(event.srcElement.attributes.id);
    var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    switch(value){
      case "MyRef1":
          this.pruebatitle="CAPITULO I CompGraf";
          this.route.navigate(['/user/content/chapterI']);
        break;
      case "MyRef2":
        this.pruebatitle="CAPITULO II CompGraf";
        this.route.navigate(['/user/content/chapterII']);
      break;
      case "MyRef3":
        this.pruebatitle="CAPITULO III CompGraf";
        this.route.navigate(['/user/content/chapterIII']);
      break;
      case "MyRef4":
        this.pruebatitle="REFERENCIAS CompGraf";
        this.route.navigate(['/user/bibliography']);//crear un component para referencias generales
      break;
      case "MyRef5":
        this.pruebatitle="MI PERFIL CompGraf";
        this.route.navigate(['/user/profile']);//
      break;
      case "MyRef6":
        this.pruebatitle="AYUDA CompGraf";
        this.route.navigate(['/user/help']);//crear un componente ayuda
      break;
      case "MyRef7":
        this.pruebatitle="MI ESPE CompGraf";
        window.open("https://miespe.espe.edu.ec/", '_blank');//otra pesta;a
//      window.location.href = <any>"https://miespe.espe.edu.ec/";//misma pesta;a
      break;
      default:
        this.pruebatitle="CompGraf";
        this.route.navigate(['']);//again this page
        break;      
    }

  }

  
  over(event){
//    console.log("Mouseover called");
    var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    switch(value){
      case "MyRef1":
          this.pruebatitle="CAPITULO I CompGraf";
        break;
      case "MyRef2":
        this.pruebatitle="CAPITULO II CompGraf";
      break;
      case "MyRef3":
        this.pruebatitle="CAPITULO III CompGraf";
      break;
      case "MyRef4":
        this.pruebatitle="REFERENCIAS BIBLIOGRÁFICAS CompGraf";
      break;
      case "MyRef5":
        this.pruebatitle="MI PERFIL CompGraf";
      break;
      case "MyRef6":
        this.pruebatitle="AYUDA CompGraf";
      break;
      case "MyRef7":
        this.pruebatitle="MI ESPE CompGraf";
      break;
      default:
        this.pruebatitle="CompGraf";
        break;      
    }
  }

  out(event){
//    console.log("Mouseout called");
var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    switch(value){
      case "MyRef1":
          this.pruebatitle=" ";
        break;
      case "MyRef2":
        this.pruebatitle=" ";
        break;
      case "MyRef3":
        this.pruebatitle=" ";
      break;
      case "MyRef4":
        this.pruebatitle=" ";
      break;
      case "MyRef5":
        this.pruebatitle=" ";
      break;
      case "MyRef6":
        this.pruebatitle=" ";
      break;
      case "MyRef7":
        this.pruebatitle=" ";
      break;
      default:
        this.pruebatitle=" ";
        break;      
    }
  }
}
