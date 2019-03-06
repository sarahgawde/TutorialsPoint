import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QaComponent } from './qa/qa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { P1Component } from './home/p1/p1.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './providers/auth.service';

import { environment } from '../environments/environment';
import { NmComponent } from './nm/nm.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
 
    apiKey: "AIzaSyAABhkee6p4fsJVwWAMjR7mG7hqgMLCleU",
    authDomain: "notsarah-1318a.firebaseapp.com",
    databaseURL: "https://notsarah-1318a.firebaseio.com",
    projectId: "notsarah-1318a",
    storageBucket: "notsarah-1318a.appspot.com",
    messagingSenderId: "135560577324"
  };



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QaComponent,
    P1Component,
    ApiComponent,
    
    NmComponent,
    
 
    
    SignupComponent,
    
    LoginComponent


    
    
    
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, children: [
        {path: 'p1', component: P1Component}
      ]},
      {path: 'qa', component: QaComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'qa/:$data', component: QaComponent},
      { path: 'api', component: ApiComponent},
      { path: 'nm', component : NmComponent},
      {path: 'login', component: LoginComponent}
    ]),
    HttpClientModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
