import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {VERSION} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {NavItem} from 'src/app/services/nav-item';
import {NavService} from 'src/app/services/nav.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public app_name1: string='C';
  public app_name2: string='omp';
  public app_name3: string='G';
  public app_name4: string='raf';

  public isLogged: boolean=false;

  public user: Observable<UserInterface>;

  public pruebanombre: string='';
  public pruebaemail: string='';
  public pruebaphoto: string='';

  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
 version = VERSION;
 navItemsNoLogin :NavItem[] = [
   {
    displayName: 'Acerca',
    iconName: 'info',
    route: ''
   },
   {
    displayName: 'Ayuda',
    iconName: 'help',
    route: 'user/login'
   }
 ]; 
 navItems: NavItem[] = [
  {
    displayName: 'Inicio',
    iconName: 'local_library',
    route: ''
   },
  {
     displayName: 'Contenido',
     iconName: 'work_outline', 
     route: 'user/content',
     children: [
       {
         displayName: 'Capítulo I',
         iconName: 'library_books',
         route: 'user/content/chapterI'
       },
       {
         displayName: 'Capítulo II',
         iconName: 'library_books',
         route: 'user/content/chapterII',
       },
       {
         displayName: 'Capítulo III',
         iconName: 'library_books',
         route: 'user/content/chapterIII'
       }
     ]
   },
   {
    displayName: 'Referencias',
    iconName: 'note',
    route: 'user/bibliography'
   },
   {
    displayName: 'Perfil',
    iconName: 'person',
    route: 'user/profile'
   }
 ];

  constructor(private observer: BreakpointObserver,private navService: NavService, private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  async ngOnInit(){
    this.getCurrentUser();
  }

  ngAfterViewInit() {
    try{
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  
    }catch(error){}
  }

  getCurrentUser() {
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
    });
  }
  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['user/login']);
    } catch (error) {
      console.log(error);
    }
  }

  onClick(event) {
    //    console.log(event);
    //    console.log(event.srcElement.attributes.id);
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr.nodeValue;
        console.log(value);
        window.open("https://miespe.espe.edu.ec/", '_blank');//otra pesta;a
  }
}
