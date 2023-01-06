import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valor=true;
  sug=''
  listaSug:string[]=[]

  darkMode(){
    this.valor=!this.valor
  }

  enviar(){
    if(this.listaSug.length<=3){
      this.listaSug.push(this.sug);
      this.sug=' ';
    }else{
      this.sug='MAX # de sugerencias'
    }
  }
  
}
