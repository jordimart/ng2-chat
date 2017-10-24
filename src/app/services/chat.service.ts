import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../interfaces/mensaje.interface';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {

  }

  constructor(private afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {

    this.afAuth.authState.subscribe( user =>{
      console.log( 'Estado del usuario:', user);
      if( !user ){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })
  }

  login( proveedor: string ) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('/chats', ref => ref.orderBy('fecha', 'desc')
      .limit(5));
    return this.itemsCollection.valueChanges()
      .map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = [];
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
        return this.chats;
      })
    // this.itemsCollection = this.af.collection<Mensaje>('/chats');
    // console.log(this.itemsCollection.valueChanges())
    // return this.chats = this.itemsCollection.valueChanges();
  }

  agregarMensaje(texto: string) {

    //TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: 'demo',
      mensaje: texto,
      fecha: new Date().getTime(),
    }

    return this.itemsCollection.add(mensaje);
  }

}
