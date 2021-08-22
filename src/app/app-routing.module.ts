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
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
