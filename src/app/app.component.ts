import { Component, OnInit } from '@angular/core';
import {NavItem} from 'src/app/services/nav-item';
import {NavService} from 'src/app/services/nav.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserCompGraf } from 'src/app/models/userCompGraf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CompGraf';
  public isLogged: boolean=false;
  public pruebanombre: string='';
  public pruebaemail: string='';
  public pruebaphoto: string='';

  public userCompGraf: UserCompGraf;

  constructor(private navService: NavService, private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) {
      this.userCompGraf=new UserCompGraf();
      this.verificarUsuarioLogin();
  }

  public verificarUsuarioLogin(){
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('App>Firebase>user logged');
        console.log("AppFirts>"+this.userCompGraf.type_user);
        if(auth.email.includes(this.userCompGraf.email_user)){
          this.isLogged = true;
          this.pruebanombre=auth.displayName;
          this.pruebaemail=auth.email;        
          this.pruebaphoto=auth.photoURL;  
        }else{
          console.log('NOT user logged ESPE');
          this.authService.logout();
          this.isLogged = false;  
        }
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
    
  }  

  async logout(): Promise<void> {
    // todo
  }

  /*************/ 
  procesaPropagar(mensaje: UserCompGraf) {
    console.log("Propaga2>"+mensaje.type_user);
    
    this.userCompGraf=mensaje;
  }


}

