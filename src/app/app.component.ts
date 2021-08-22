import { Component} from '@angular/core';
import {NavItem} from 'src/app/services/nav-item';
import {NavService} from 'src/app/services/nav.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(private navService: NavService, private authService: AuthService, private afsAuth: AngularFireAuth) {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
        this.pruebanombre=auth.displayName;
        this.pruebaemail=auth.email;        
        this.pruebaphoto=auth.photoURL;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });}

  async logout(): Promise<void> {
    // todo
  }
}

