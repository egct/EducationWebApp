import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import {NavService} from './services/nav.service';
import { MenuListItemComponent } from './components/navbar/listItem/menu-list-item/menu-list-item.component';
import { FormsModule } from '@angular/forms';
import { environment} from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ContentComponent } from './components/user/content/content.component';
import { ChapterIComponent } from './components/user/chapter-i/chapter-i.component';
import { ChapterIIComponent } from './components/user/chapter-ii/chapter-ii.component';
import { ChapterIIIComponent } from './components/user/chapter-iii/chapter-iii.component';
import { PrincipalComponent } from './components/principal/principal.component';

import {ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactComponent } from './components/principal/contact/contact.component';
import { ServiceComponent } from './components/principal/service/service.component';
import { HeroComponent } from './components/principal/hero/hero.component';
import { SnakeComponent } from './components/user/game/snake/snake.component';
import { MathjaxComponent } from './components/mathjax/mathjax.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { QuizComponent } from './components/quiz/quiz.component';
import { BackgroundDirective } from './components/quiz/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page404Component,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MenuListItemComponent,
    ProfileComponent,
    ContentComponent,
    ChapterIComponent,
    ChapterIIComponent,
    ChapterIIIComponent,
    PrincipalComponent,
    ContactComponent,
    ServiceComponent,
    HeroComponent,
    SnakeComponent,
    MathjaxComponent,
    QuizComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    HighlightModule
  ],
  providers: [NavService, AngularFireAuth, AngularFirestore,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
       
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
