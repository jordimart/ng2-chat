import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private afs: AngularFirestore) {
    // this.itemsCollection = af.collection<Mensaje>('chats');
    // this.chats = this.itemsCollection.valueChanges();

    // this.itemsCollection = this.af.collection<Mensaje>('chats');
    // this.chats = this.itemsCollection.snapshotChanges(['added', 'removed']);
    // console.log(this.chats)
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<any>('/chats');
    return this.itemsCollection.valueChanges();
    // this.itemsCollection = this.af.collection<Mensaje>('/chats');
    // console.log(this.itemsCollection.valueChanges())
    // return this.chats = this.itemsCollection.valueChanges();
  }

  agregarMensaje(texto: string) {
    // let mensaje:Mensaje = {
    //   nombre:"Juan Carlos",
    //   mensaje:texto
    // }
    //
    // return this.itemsCollection.add( mensaje );
  }

}
