import { Component, ElementRef, OnInit, Renderer2,  Output,  EventEmitter  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import firebase from "firebase/app";
import { UserInterface } from '../../models/user';
import { ICarouselItem } from '../principal/hero/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../principal/hero/carousel.const';
import { ViewChild } from '@angular/core'
import { UserCompGraf } from '../../models/userCompGraf';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  @Output() propagar2 = new EventEmitter<UserCompGraf>();

  constructor(private renderer: Renderer2, public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.renderer.listen(document.querySelector('.header .nav-bar .nav-list .hamburger'), "click", () => {
      console.log("clickk 1;");
      document.querySelector('.header .nav-bar .nav-list .hamburger').classList.toggle('active');
      document.querySelector('.header .nav-bar .nav-list ul').classList.toggle('active');;
    });
    document.querySelectorAll('.header .nav-bar .nav-list ul li a').forEach((item) => {
      item.addEventListener('click', () => {
        document.querySelector('.header .nav-bar .nav-list .hamburger').classList.toggle('active');
        document.querySelector('.header .nav-bar .nav-list ul').classList.toggle('active');
      });
    });

  }

  async onLoginGoogle() {
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
      this.router.navigate(['principal']);
    }
  }

/*************/ 
  procesaPropagar(mensaje: UserCompGraf) {
    console.log("Propaga1>"+mensaje.type_user);
    this.propagar2.emit(mensaje);
  }

}