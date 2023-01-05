import { ContactComponent } from './comp-curriculum/contact/contact.component';
import { PortafolioComponent } from './comp-curriculum/portafolio/portafolio.component';
import { SkillComponent } from './comp-curriculum/skill/skill.component';
import { AboutComponent } from './comp-curriculum/about/about.component';
import { HomeComponent } from './comp-curriculum/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'skill', component:SkillComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
