import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string= "";

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    if(this.mensaje.length == 0){
      return;
    }

    console.log(this.mensaje);
  }

}
