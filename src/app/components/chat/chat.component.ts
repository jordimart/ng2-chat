import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string = "";

  constructor(public _cs: ChatService) {
    // let mensajes = this._cs.cargarMensajes().subscribe(() => {
    //   console.log(mensajes);
    // })

    this._cs.cargarMensajes()
      .subscribe((mensajes: any[]) => {
        console.log(mensajes);
      })
  }

  ngOnInit() {
  }

  enviar() {

    console.log(this.mensaje);
    //   if (this.mensaje.length == 0) {
    //     return;
    //   }
    //   this._cs.agregarMensaje(this.mensaje)
    //     .then(() => console.log("hecho"))
    //     .catch((error) => console.error(error))
    // }
  }
}
