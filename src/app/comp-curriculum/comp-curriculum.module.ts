import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillComponent,
    PortafolioComponent,
    ContactComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    SkillComponent,
    PortafolioComponent,
    ContactComponent,
    NavBarComponent
  ]
})
export class CompCurriculumModule { }
