import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formulario!:FormGroup;
  constructor(private FB:FormBuilder) { }

  ngOnInit(): void {
    this.formulario=this.FB.group({
      /* -------------------Validaciones-------------- */
      name:['',
        [
          Validators.required,
          Validators.maxLength(40)
        ]
      ],
      email:['',[
          Validators.required,
          Validators.email
        ]
      ],
      asunto:[
        '',
        [Validators.required,
        Validators.minLength(2)]
      ],
      mensaje:[
        '',
        [Validators.required,
        Validators.maxLength(100)]
      ]
    })
  }
  /* --------------------Muestra de datos----------------------- */
  oir(){
    let mensaje=`hola ${this.formulario.get('name')?.value} el mensaje: ${this.formulario.get('mensaje')?.value} fue enviado.`
    alert(mensaje)
  }

}
