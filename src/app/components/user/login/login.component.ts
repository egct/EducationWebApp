import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import firebase from "firebase/app"
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';
  
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
}
