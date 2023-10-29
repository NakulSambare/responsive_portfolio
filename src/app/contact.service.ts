import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private fs: Firestore) {}
  addMessage(name: string, email: string, message: string) {
    console.log(name);
    console.log(email);
    console.log(message);

    let data = {
      name: name,
      email: email,
      message: message,
    };
    let messageCollection = collection(this.fs, 'messages');
    return addDoc(messageCollection, data);
  }
}
