import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats: Observable<Mensaje[]>;
  constructor(private af: AngularFirestore) {
    this.itemsCollection = af.collection<Mensaje>('/chats');
    this.chats = this.itemsCollection.valueChanges();
  }

  cargarMensajes(){

  }

  agregarMensaje( texto:string ){
      let mensaje:Mensaje = {
        nombre:"Juan Carlos",
        mensaje:texto
      }

      return this.itemsCollection.add( mensaje );
  }

}
