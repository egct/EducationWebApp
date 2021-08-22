import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public pruebanombre: string='';
  public pruebaemail: string='';
  public pruebaphoto: string='';
  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.pruebanombre=auth.displayName;
        this.pruebaemail=auth.email;        
        this.pruebaphoto=auth.photoURL;
      } else {
        console.log('NOT user logged');
      }
    });
  }

}
