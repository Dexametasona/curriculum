import { CompCurriculumModule } from './comp-curriculum/comp-curriculum.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompCurriculumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
