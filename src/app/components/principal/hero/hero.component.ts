import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import firebase from "firebase/app";
import { UserInterface } from '../../../models/user';
import { ICarouselItem } from './Icarousel-item.metadata';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  
 /**
   * Custom Properties
   */
  @Input() height = 650;
  @Input() isFullScreen = true;
  @Input() items: ICarouselItem[] = [];
  /**
   * Final Properties
   */
   public finalHeight: string | number = 0;
   public currentPosition = 0;

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { 
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;
    });
    this.setCurrentPosition(0);
    setInterval(() => {
      this.setNext();
     }, 7500);

  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;

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
        this.router.navigate(['principal']);
      }
    }
    /*********/ 

}
