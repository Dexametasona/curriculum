import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillComponent,
    PortafolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    SkillComponent,
    PortafolioComponent,
    ContactComponent
  ]
})
export class CompCurriculumModule { }
