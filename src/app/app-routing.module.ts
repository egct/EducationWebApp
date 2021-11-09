import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/user/login/login.component';
import { Page404Component } from 'src/app/components/page404/page404.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ContentComponent } from './components/user/content/content.component';
import { ChapterIComponent } from './components/user/chapter-i/chapter-i.component';
import { ChapterIIIComponent } from './components/user/chapter-iii/chapter-iii.component';
import { ChapterIIComponent } from './components/user/chapter-ii/chapter-ii.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BibliographyComponent } from './components/user/bibliography/bibliography.component';
import { HelpComponent } from './components/user/help/help.component';
import { GestionComponent } from './components/user/gestion/gestion.component';
import { GalleryComponent } from './components/principal/gallery/gallery.component';
import { ContactComponent } from './components/principal/contact/contact.component';
import { UserCompGrafComponent } from './components/user/user-comp-graf/user-comp-graf.component'; 
import { TestCompGrafComponent } from './components/user/test-comp-graf/test-comp-graf.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/content', component: ContentComponent },
  { path: 'user/content', children: [
    {path: 'chapterI', component: ChapterIComponent},
    {path: 'chapterII', component: ChapterIIComponent},
    {path: 'chapterIII', component: ChapterIIIComponent}
  ]},
  { path: 'user/help', component: HelpComponent },
  { path: 'user/bibliography', component: BibliographyComponent },
  { path: 'user/gestion', component: GestionComponent },
  { path: 'user/gestion', children: [
    {path: 'user-comp-graf', component: UserCompGrafComponent},
    {path: 'test-comp-graf', component: TestCompGrafComponent}
  ]},
  { path: 'principal/contact', component: ContactComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
