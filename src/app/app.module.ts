import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ContactService } from './contact.service';

const firebaseConfig = {
  apiKey: 'AIzaSyDKGk-oJSEN7cRR1bJozGYe6mJEyE8-yzQ',
  authDomain: 'myportfolio-fec34.firebaseapp.com',
  projectId: 'myportfolio-fec34',
  storageBucket: 'myportfolio-fec34.appspot.com',
  messagingSenderId: '904505913618',
  appId: '1:904505913618:web:f3d39a1351a0ca7d3783cb',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
