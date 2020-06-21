import { ShopDetailModalPageModule } from './shop-detail-modal/shop-detail-modal.module';
// import { ShowShopDPage } from './show-shop-d/show-shop-d.page';
// import { ShopDetailModalPage } from './shop-detail-modal/shop-detail-modal.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCSnQEju5atz8AkNrVZIuPz8IPvsGAO9Pw",
  authDomain: "ironwala-f2af5.firebaseapp.com",
  databaseURL: "https://ironwala-f2af5.firebaseio.com",
  projectId: "ironwala-f2af5",
  storageBucket: "ironwala-f2af5.appspot.com",
  messagingSenderId: "16883334627",
  appId: "1:16883334627:web:3b1ec305b44d19425df4d6",
  measurementId: "G-0HDGKG8KN7"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    
    BrowserModule,
    
   
    //firebase.initializeApp(environment.firebase),
    IonicModule.forRoot(), AppRoutingModule,
       
    ShopDetailModalPageModule,
     BrowserAnimationsModule,FormsModule,
    
    ],
    
  providers: [
    StatusBar,
    SplashScreen,
    
    AngularFireAuth,
    SmsRetriever,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
