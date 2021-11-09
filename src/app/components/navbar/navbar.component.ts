import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
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

import { UserCompGrafService } from '../../services/userCompGraf.service';
import { UserCompGraf } from '../../models/userCompGraf';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserCompGrafService]
})
export class NavbarComponent implements OnInit {
  public app_name1: string='C';
  public app_name2: string='omp';
  public app_name3: string='G';
  public app_name4: string='raf';

  public isLogged: boolean=false;
  public isAdmin: boolean=false;

  public user: Observable<UserInterface>;

  public pruebanombre: string='';
  public pruebaemail: string='';
  public pruebaphoto: string='';
  public pruebatype: string='';

  /*****/
  @Input() propagaruserCompGraf: UserCompGraf= new UserCompGraf(); 
  
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
   },
   {
    displayName: 'Acerca',
    iconName: 'recent_actors',
    route: 'principal/contact'
   }
 ];

 navItemsAdmin: NavItem[] = [
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
    displayName: ' Gestión',
    iconName: 'build',
    route: 'user/gestion',
    children: [
      {
        displayName: 'Usuarios',
        iconName: 'contact_mail',
        route: 'user/gestion/user-comp-graf'
      },
      {
        displayName: 'Evaluaciones',
        iconName: 'library_books',
        route: 'user/gestion/test-comp-graf',
      }
    ]
   },
   {
    displayName: 'Perfil',
    iconName: 'person',
    route: 'user/profile'
   },
   {
    displayName: 'Acerca',
    iconName: 'recent_actors',
    route: 'principal/contact'
   }
 ];

  constructor( private observer: BreakpointObserver,private navService: NavService, private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router, public userCompGrafService: UserCompGrafService ){ 
    this.userCompGrafService.selectedMDBUserCompGraf=this.propagaruserCompGraf;
  }

  async ngOnInit(){
    this.getCurrentUser();
/*    this.userCompGrafService.searchUserCompGrafByEmail(this.pruebaemail).subscribe((res) => {
      this.userCompGrafService.selectedMDBUserCompGraf = res;
      console.log('>2>>>>>>>>>>>>>'+this.userCompGrafService.selectedMDBUserCompGraf.name_user);
    });
*/
/*
try {
    console.log('>2>>>>>>>>>>>>>'+this.propagaruserCompGraf.email_user);
    this.userCompGrafService.searchUserCompGrafByEmail(this.pruebaemail).subscribe((res) => {
      this.userCompGrafService.selectedMDBUserCompGraf = res;
      console.log(">2.1>>>>>"+res.email_user);
      console.log('>3>>>>>>>>>>>>>'+this.userCompGrafService.selectedMDBUserCompGraf.email_user);
    
    });
    } catch (error) {
      console.log(error);
    }*/
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
        console.log(">2>>>>>"+auth.email);
        this.userCompGrafService.searchUserCompGrafByEmail(auth.email).subscribe((res) => {
          this.userCompGrafService.selectedMDBUserCompGraf = res;
          console.log(">2.1>>>>>"+res.email_user);
          console.log('>3>>>>>>>>>>>>>'+this.userCompGrafService.selectedMDBUserCompGraf.email_user);
          console.log('>4>>>>>>>>>>>>>'+this.userCompGrafService.selectedMDBUserCompGraf.type_user); 
          console.log('>4.1>>>>>>>>>>>>>'+this.userCompGrafService.selectedMDBUserCompGraf.type_user);        

        this.pruebanombre=auth.displayName
        if(this.propagaruserCompGraf.type_user){
          this.pruebatype=this.propagaruserCompGraf.type_user;
        }else{
          this.pruebatype=this.userCompGrafService.selectedMDBUserCompGraf.type_user;
        }
        this.pruebaemail=auth.email;        
        this.pruebaphoto=auth.photoURL;

        if(this.propagaruserCompGraf.type_user==="Docente" || this.userCompGrafService.selectedMDBUserCompGraf.type_user==="Docente"){
          this.isLogged = false;
          this.isAdmin = true;  
        }else{
          this.isLogged = true;
          this.isAdmin = false;  
        }       
        });
        
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
        this.isAdmin = false;

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
